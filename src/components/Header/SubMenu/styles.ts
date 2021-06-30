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
      justify-content: space-around;
    }
  }

  ul {
    margin: 10px;

    li {
      text-align: left;
      margin: 10px;

      a {
        color: black;

        &:hover {
          text-decoration: underline !important;
        }
      }
    }
  }

  img {
    width: 100%;
    max-width: 300px;
  }
`;
