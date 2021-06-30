import styled from 'styled-components';
import { appearFromTop } from '../../styles/keyframs';

interface IDropBox {
  boxStatus: boolean;
}

export const Container = styled.div`
  z-index: 100;
  text-align: center;
  transition: all 0.2s;
  padding: 10px;
  border-radius: 10px;

  & > span{
    margin-right: 20px;
  }

  & > svg {
    display: block;
    position: relative;
    margin-right: -20px;

    &:hover {
      filter: brightness(0.5);
    }
  }
`;

export const MenuHelp = styled.div<IDropBox>`
  display: ${props => (props.boxStatus ? 'block' : 'none')};
  position: absolute !important;
  transition: all 0.3s;
`;

export const DropDown = styled.div`
  display: flex;
  animation: ${appearFromTop} 0.5s;
  position: relative !important;
  padding: 5px;
  right: 10px;
  border-radius: 5px;
  background: white;
  color: black;
  margin-top: 10px;
  border-bottom: 5px solid ${props => (props.theme.theme.mainTheme)};

  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    & {
      max-width: 250px;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    margin-left: 25px;
    top: -5px;
    left: 0px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
  }
`;
