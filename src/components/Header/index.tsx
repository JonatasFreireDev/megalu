/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';

import * as S from './styles';
import magalu from '../../assets/lu-header.png';

import { Rainbow } from './Rainbow/index';
import { SearchBar } from './SearchBar';
import SubMenu from './SubMenu';
import { usePageConfig } from '../../store/PageConfig';

const Header: React.FC = () => {
  const {
    getHeaderIsVisible,
    toggleHeaderMenu,
    headerIsVisibleClosed,
  } = usePageConfig();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderVisible);
    return () => {
      window.removeEventListener('scroll', changeHeaderVisible);
    };
  }, [headerIsVisibleClosed]);

  const changeHeaderVisible = useCallback(() => {
    if (!headerIsVisibleClosed) {
      if (window.pageYOffset < 150) {
        toggleHeaderMenu(true);
      } else {
        toggleHeaderMenu(false);
      }
    }
  }, [headerIsVisibleClosed]);

  return (
    <S.Container ref={ref} HeaderIsVisible={getHeaderIsVisible}>
      <header>
        <img src={magalu} alt="magalu" />
        <div>
          <SearchBar />
          <SubMenu />
        </div>
      </header>
      <Rainbow />
    </S.Container>
  );
};

export default React.memo(Header);
