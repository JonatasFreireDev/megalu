import styled, { css } from 'styled-components';
import { appearFromTop } from '../../styles/keyframs';
import DropDownMenu from './SubMenu';

interface IdropHelp {
  dropHelp: boolean;
}

interface IHeaderIsVisible {
  HeaderIsVisible: boolean;
}

export const Container = styled.div<IHeaderIsVisible>`
  background: ${props => props.theme.theme.mainTheme};
  width: 100%;
  color: white;
  transition: position 0.5s;
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

export const SearchHeader = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;

  a {
    position: relative;
    margin-right: 20px;
    min-width: 150px;

    @media (max-width: 700px) {
      & {
        display: none;
      }
    }
    img {
      display: block;
      margin-top: 10px;
      max-width: 150px;
      width: 100%;
    }
  }

  .welcome {
    margin: 0 10px;
    max-width: 130px;
    width: 100%;
    display: flex;
    font-size: 13px;
    flex-direction: column;
  }
`;

export const Input = styled.form`
  width: 100%;
  margin: auto;
  display: flex;
  align-self: center;
  position: relative;

  input {
    width: 100%;
    font-size: 14px;
    height: 33px;
    color: #8c8c8c;
    border: 0;
    line-height: 32px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    padding: 0 10px;
    padding-right: 40px;
  }

  button {
    background: transparent;
    border: none;

    svg {
      position: absolute;
      color: ${props => props.theme.theme.mainTheme};
      font-size: 20px;
      right: 10px;
      top: 8px;
      transition: all 0.3s;

      &:hover {
        filter: brightness(0.5);
      }
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;

  div,
  button {
    position: relative;

    svg {
      cursor: pointer;
      font-size: 30px;
      margin: 0 10px;
    }

    span {
      cursor: pointer;
      display: block;
      font-size: 12px;
      position: absolute;
      border-radius: 10px;
      align-self: auto;
      text-align: center;
      top: 15px;
      right: 5px;
      height: 20px;
      width: 20px;
      padding: 2px;
    }

    .purple {
      background: ${props => props.theme.colors.purple};
    }
    .green {
      background: ${props => props.theme.colors.green};
    }
  }
`;

export const MenuHelp = styled.div<IdropHelp>`
  display: ${props => (props.dropHelp ? 'block' : 'none')};
  position: absolute !important;
  transition: all 0.3s;
  animation: ${appearFromTop} 0.5s;
  padding: 5px;
  right: 10px;
  width: 300px;
  border-radius: 5px;
  background: white;
  color: black;
  border-bottom: 5px solid ${props => props.theme.colors.green};
  box-shadow: 0px 0px 22px -3px rgba(0, 0, 0, 0.66);

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    top: -5px;
    right: 0px;
    width: 0;
    height: 0;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
  }

  ul {
    li {
      margin: 15px;
    }
  }
`;

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

export const DropDown = styled(DropDownMenu)`
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const ArcoIris = styled.div`
  /* margin-top: -5px; */
  /* overflow: hidden;
  border: none; */

  .yellow {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.yellow};
    width: 10%;
    height: 5px;
    float: left;
  }
  .orange {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.orange};
    width: 10%;
    height: 5px;
    float: left;
  }
  .red {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.red};
    width: 10%;
    height: 5px;
    float: left;
  }
  .rose {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.rose};
    width: 10%;
    height: 5px;
    float: left;
  }
  .purple {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.purple};
    width: 10%;
    height: 5px;
    float: left;
  }
  .deep-purple {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.deepPurple};
    width: 10%;
    height: 5px;
    float: left;
  }
  .blue {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.blue};
    width: 10%;
    height: 5px;
    float: left;
  }
  .cyan {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.cyan};
    width: 10%;
    height: 5px;
    float: left;
  }
  .light-green {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.lightGreen};
    width: 10%;
    height: 5px;
    float: left;
  }
  .green {
    border: none;
    background-clip: padding-box;
    background-color: ${props => props.theme.headerColors.green};
    width: 10%;
    height: 5px;
    float: left;
  }
`;
