/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect } from 'react';

import * as S from './styles';
import magalu from '../../assets/lu-header.png';

import { Rainbow } from './Rainbow/index';
import { SearchBar } from './SearchBar';
import SubMenu from './SubMenu';
import { usePageConfig } from '../../store/PageConfig';

const Header: React.FC = () => {
  const {
    getHeaderIsVisible,
    setHeaderIsVisible,
    getHeaderIsClosed,
  } = usePageConfig();

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderVisible);
    return () => {
      window.removeEventListener('scroll', changeHeaderVisible);
    };
  }, [getHeaderIsClosed]);

  const changeHeaderVisible = useCallback(() => {
    if (!getHeaderIsClosed) {
      if (window.pageYOffset < 150) {
        setHeaderIsVisible(true);
      } else {
        setHeaderIsVisible(false);
      }
    }
  }, [getHeaderIsClosed]);

  return (
    <S.Container HeaderIsVisible={getHeaderIsVisible}>
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
