import styled, { css } from 'styled-components';
import { appearFromTop } from '../../../styles/keyframs';
import DropDownMenu from '../SubMenu';

interface IdropHelp {
  dropHelp: boolean;
}

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
z-index: 100;
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
