/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { MenuData } from '../../../Data/MenuData';
import { usePageConfig } from '../../../store/PageConfig';
import DropBox from '../../DropBox';
import * as S from './styles';

const DropDownMenu: React.FC = () => {
  const { getHeaderIsVisible } = usePageConfig();

  return (
    <S.MenuList HeaderIsVisible={getHeaderIsVisible}>
      {MenuData.map(item => (
        <DropBox key={item.title} title={item.title}>
          <ul>
            {item.data.map(link => (
              <li>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
          {item.image ? <img src={item.image} alt={item.title} /> : ''}
        </DropBox>
      ))}
    </S.MenuList>
  );
};

export default React.memo(DropDownMenu);
