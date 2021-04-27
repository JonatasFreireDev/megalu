/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useState } from 'react';
import { AnyStyledComponent } from 'styled-components';
import * as S from './styles';

interface IDropDownMenu {
  title: string;
  children: React.ReactNode;
  className?: AnyStyledComponent;
}

const DropDownMenu: React.FC<IDropDownMenu> = ({
  title,
  className,
  children,
}) => {
  const [dropDownHelp, setDropDownHelp] = useState(false);

  const dropHelp = useCallback((isActive: boolean) => {
    setDropDownHelp(isActive);
  }, []);

  return (
    <S.Container
      onMouseEnter={() => {
        dropHelp(true);
      }}
      onMouseLeave={() => {
        dropHelp(false);
      }}
    >
      <span>{title}</span>
      <S.MenuHelp dropHelp={dropDownHelp}>
        <S.DropDown className={className}>{children}</S.DropDown>
      </S.MenuHelp>
    </S.Container>
  );
};

export default React.memo(DropDownMenu);
