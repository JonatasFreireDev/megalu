import styled from 'styled-components';
import magalu from '../../assets/lu-header.png';
import logo from '../../assets/magalu-header.svg';

export const Container = styled.div`
  background: ${props => props.theme.theme.mainTheme};
  width: 100%;
  color: white;

  header {
    display: flex;
    flex-direction: row;
    max-width: 1300px;
    height: 140px;
    margin: auto;
  }

  a {
    color: white;
  }
`;

export const Magalu = styled.span`
  /* display: flex; */
  background: url(${magalu});
  background-size: 100% auto;
  width: 95px;
  height: 113px;
  margin-top: 27px;
  margin-right: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: row;

  & + div {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  background: url(${logo});
  background-position: center center;
  background-size: 138px 30px;
  height: 30px;
  width: 138px;
  margin-right: 20px;
  margin-top: 55px;
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 13px;
  justify-content: space-between;

  ul {
    float: right;
    overflow: hidden;
    clear: both;
    width: 100%;
    padding: 12px 0 8px;

    li {
      float: left;
      margin-right: 10px;
    }

    .space {
      margin-left: 10%;
    }
  }

  /* & > nav {
    width: 100%;
    display: flex;
    flex-direction: row;

    a {
      margin: 15px 5px;
    }
  } */
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;

  div:first-child {
    input {
      font-size: 14px;
      /* width: 78%; */
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
    }
  }
`;

export const Menu = styled.div``;

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
