import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiHelpCircle } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import logo from '../../../assets/magalu-header.svg';

import * as S from './styles';
import { usePageConfig } from '../../../store/PageConfig';

export const SearchBar: React.FC = () => {
  const [dropDownHelp, setDropDownHelp] = useState(false);
  const {
    getHeaderIsVisible,
    toggleHeaderMenu,
    setHeaderIsVisibleClosed,
  } = usePageConfig();

  const handleCloseHeader = useCallback(() => {
    toggleHeaderMenu(true);
    setHeaderIsVisibleClosed(true);
  }, []);

  const dropHelp = useCallback((isActive: boolean) => {
    setDropDownHelp(isActive);
  }, []);

  return (
    <S.SearchHeader>
      {/* Logo------------------------------------------------------------------- */}
      <Link to="/">
        <img src={logo} alt="magalu" />
      </Link>
      {/* Barra de Pesquisa------------------------------------------------------ */}
      <S.Input>
        <input placeholder="procure por código, nome, marca..." />
        <button type="submit">
          <FiSearch />
        </button>
      </S.Input>
      {/* Login------------------------------------------------------------------ */}
      <div className="welcome">
        <strong>Bem Vindo :)</strong>
        <span>Entre ou cadastre-se</span>
      </div>
      {/* Icones----------------------------------------------------------------- */}
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
        {/* Botao para fechar Header----------------------------------------------- */}
        <button
          onClick={handleCloseHeader}
          style={
            getHeaderIsVisible ? { display: 'none' } : { display: 'block' }
          }
        >
          <AiOutlineClose color="white" />
        </button>
      </S.Icons>
    </S.SearchHeader>
  );
};
