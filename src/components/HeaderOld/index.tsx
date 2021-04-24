import React from 'react';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <header>
        <S.Magalu />
        <S.Content>
          <S.Search>
            <S.Logo />
            <div>
              <S.Tags>
                <ul>
                  <li>
                    <a href="https://lojas.magazineluiza.com.br/">
                      Nossas Lojas
                    </a>
                  </li>
                  <li>
                    <a href="https://lojas.magazineluiza.com.br/">
                      Tenha sua loja
                    </a>
                  </li>
                  <li>
                    <a href="https://lojas.magazineluiza.com.br/">
                      Regulamentos
                    </a>
                  </li>
                  <li>
                    <a href="https://lojas.magazineluiza.com.br/">
                      Acessibilidade
                    </a>
                  </li>
                  <li>
                    <a href="https://lojas.magazineluiza.com.br/">
                      Guia de segurança
                    </a>
                  </li>

                  <li className="space">
                    <a href="https://lojas.magazineluiza.com.br/">
                      Atendimento
                    </a>
                  </li>
                  <li>
                    <a href="https://lojas.magazineluiza.com.br/">
                      Compre pelo tel: 0800 773 3838
                    </a>
                  </li>
                  <li>
                    <a href="https://lojas.magazineluiza.com.br/">
                      Meus Pedidos
                    </a>
                  </li>
                </ul>
              </S.Tags>
              <S.SearchBar>
                <div>
                  <input type="text" />
                  <div>
                    <strong>bem vindo !</strong>
                    <span>Entre ou cadastre-se</span>
                  </div>
                </div>
                <div>
                  <p>coracao</p>
                  <p>sacola</p>
                </div>
              </S.SearchBar>
            </div>
          </S.Search>
          <S.Menu>
            <ul>
              <li>aew</li>
            </ul>
          </S.Menu>
        </S.Content>
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

export default Header;
