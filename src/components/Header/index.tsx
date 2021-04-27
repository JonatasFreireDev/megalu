/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiHelpCircle } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import * as S from './styles';

import magalu from '../../assets/lu-header.png';
import logo from '../../assets/magalu-header.svg';

import { MenuData } from './SubMenu/MenuData';

const Header: React.FC = () => {
  const [dropDownHelp, setDropDownHelp] = useState(false);
  const [headerIsVisible, setHeaderIsVisible] = useState(true);
  const [headerIsVisibleClosed, setHeaderIsVisibleClosed] = useState(false);
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
        setHeaderIsVisible(true);
      } else {
        setHeaderIsVisible(false);
      }
    }
  }, [headerIsVisibleClosed]);

  const handleCloseHeader = useCallback(() => {
    setHeaderIsVisible(true);
    setHeaderIsVisibleClosed(true);
  }, []);

  const dropHelp = useCallback((isActive: boolean) => {
    setDropDownHelp(isActive);
  }, []);

  return (
    <S.Container ref={ref} HeaderIsVisible={headerIsVisible}>
      <header>
        <img src={magalu} alt="magalu" />
        <div>
          <S.SearchHeader>
            <Link to="/">
              <img src={logo} alt="magalu" />
            </Link>
            <S.Input>
              <input placeholder="procure por código, nome, marca..." />
              <button type="submit">
                <FiSearch />
              </button>
            </S.Input>
            <div className="welcome">
              <strong>Bem Vindo :)</strong>
              <span>Entre ou cadastre-se</span>
            </div>
            <S.Icons>
              <div
                onMouseEnter={() => {
                  dropHelp(true);
                }}
                onMouseLeave={() => {
                  dropHelp(false);
                }}
              >
                <FiHelpCircle />
                <S.MenuHelp dropHelp={dropDownHelp}>
                  <ul>
                    <li>Ajuda:</li>
                    <li>Nossas Lojas</li>
                    <li>Tenha sua loja</li>
                    <li>Regulamentos</li>
                    <li>Acessibilidade</li>
                    <li>Guia de segurança</li>
                    <li>Atendimento</li>
                    <li>Compre pelo tel: 0800 773 3838</li>
                    <li>Meus pedidos</li>
                  </ul>
                </S.MenuHelp>
              </div>
              <div>
                <BsHeartFill />
                <span className="purple">0</span>
              </div>
              <div>
                <FiShoppingBag />
                <span className="green">0</span>
              </div>
              <button
                onClick={handleCloseHeader}
                style={
                  headerIsVisible ? { display: 'none' } : { display: 'block' }
                }
              >
                <AiOutlineClose color="white" />
              </button>
            </S.Icons>
          </S.SearchHeader>
          <S.MenuList HeaderIsVisible={headerIsVisible}>
            {MenuData.map(item => (
              <S.DropDown key={item.title} title={item.title}>
                <ul>
                  {item.data.map(link => (
                    <li>
                      <a href={link.path}>{link.name}</a>
                    </li>
                  ))}
                </ul>
                {item.image ? <img src={item.image} alt={item.title} /> : ''}
              </S.DropDown>
            ))}
          </S.MenuList>
        </div>
      </header>
      <S.ArcoIris>
        <span className="yellow" />
        <span className="orange" />
        <span className="red" />
        <span className="rose" />
        <span className="purple" />
        <span className="deep-purple" />
        <span className="blue" />
        <span className="cyan" />
        <span className="light-green" />
        <span className="green" />
      </S.ArcoIris>
    </S.Container>
  );
};

export default React.memo(Header);
