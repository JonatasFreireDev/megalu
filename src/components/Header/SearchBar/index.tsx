import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiHelpCircle } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import logo from '../../../assets/magalu-header.svg';

import * as S from './styles';
import { usePageConfig } from '../../../store/PageConfig';
import DropBox from '../../DropBox';

export const SearchBar: React.FC = () => {
  const {
    getHeaderIsVisible,
    setHeaderIsVisible,
    setHeaderIsClosed,
  } = usePageConfig();

  const handleCloseHeader = useCallback(() => {
    setHeaderIsVisible(true);
    setHeaderIsClosed(true);
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
        <button>
          <DropBox className="DropBoxStyle" Icon={FiHelpCircle}>
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
          </DropBox>
        </button>
        <button>
          <BsHeartFill />
          <span className="purple">0</span>
        </button>
        <button>
          <FiShoppingBag />
          <span className="green">0</span>
        </button>
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
