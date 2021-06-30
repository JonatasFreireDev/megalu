import styled from 'styled-components';

interface IHeaderIsVisible {
  HeaderIsVisible: boolean;
}

export const MenuList = styled.div<IHeaderIsVisible>`
  display: ${props => (!props.HeaderIsVisible ? 'none' : 'flex')};
  width: 100%;
  height: 50px;

  @media (max-width: 800px) {
    & {
      flex-wrap: wrap;
    }
  }
`;
