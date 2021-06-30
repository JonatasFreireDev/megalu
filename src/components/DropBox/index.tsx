/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState, ElementType } from 'react';
import { AnyStyledComponent } from 'styled-components';
import { Rainbow } from '../Header/Rainbow';
import * as S from './styles';

interface IDropBox {
  title?: string;
  Icon?: ElementType;
  children: React.ReactNode;
  className?: AnyStyledComponent | string;
}

const DropBox: React.FC<IDropBox> = ({ title, Icon, className, children }) => {
  const [getDropDownBox, setDropDownBox] = useState(false);

  const dropBox = useCallback((isActive: boolean) => {
    setDropDownBox(isActive);
  }, []);

  return (
    <S.Container
      className={className}
      onMouseEnter={() => {
        dropBox(true);
      }}
      onMouseLeave={() => {
        dropBox(false);
      }}
    >
      <span>
        {Icon && <Icon />}
        {title && title}
      </span>
      <S.MenuHelp boxStatus={getDropDownBox}>
        <S.DropDown>{children}</S.DropDown>
      </S.MenuHelp>
    </S.Container>
  );
};

export default React.memo(DropBox);
