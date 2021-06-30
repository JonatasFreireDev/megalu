import styled from 'styled-components';
import { appearFromTop } from '../../../../styles/keyframs';

interface IdropHelp {
  dropHelp: boolean;
}

export const Container = styled.div`
  z-index: 100;
  text-align: center;
  transition: all 0.2s;
  margin-right: 30px;
  padding: 10px;
  border-radius: 10px;

  span {
    height: 100%;
    text-align: center;
  }
`;

export const MenuHelp = styled.div<IdropHelp>`
  display: ${props => (props.dropHelp ? 'block' : 'none')};
  position: absolute !important;
  transition: all 0.3s;
`;

export const DropDown = styled.div`
  display: flex;
  animation: ${appearFromTop} 0.5s;
  position: relative !important;
  padding: 5px;
  right: 10px;
  min-width: 200px;
  border-radius: 5px;
  background: white;
  color: black;
  margin-top: 10px;

  justify-content: space-between;
  align-items: center;

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
