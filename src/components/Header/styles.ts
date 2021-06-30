import styled from 'styled-components';

interface IHeaderIsVisible {
  HeaderIsVisible: boolean;
}

export const Container = styled.div<IHeaderIsVisible>`
  z-index: 100;
  background: ${props => props.theme.theme.mainTheme};
  width: 100%;
  color: white;
  transition: all 0.5s;
  position: ${props => (!props.HeaderIsVisible ? 'fixed' : '')};

  @media (max-width: 800px) {
    & {
      flex-wrap: wrap;
    }
  }

  header {
    display: flex;
    flex-direction: row;
    max-width: 1300px;
    margin: auto;
    padding-top: ${props => (!props.HeaderIsVisible ? '0px' : '20px')};
    height: ${props => (!props.HeaderIsVisible ? '70px' : '120px')};

    @media (max-width: 800px) {
      & {
        height: ${props => (!props.HeaderIsVisible ? '70px' : '160px')};
      }
    }

    & > img {
      display: ${props => (!props.HeaderIsVisible ? 'none' : '')};
      max-width: 100px;
      height: 100%;
      transition: all 0.3s;
    }

    & > div {
      width: 100%;
      margin-left: 25px;
    }

    a {
      color: white;
    }

    button {
      background: transparent;
      border: none;
    }
  }
`;



