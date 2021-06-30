import styled from 'styled-components';

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
  min-width: 100px;
  max-width: 150px;

  img {
    display: block;
    margin-top: 5px;
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

  .DropBoxStyle{
    & > span{
      margin-right: -10px !important;
    }

    div{
      div{
        z-index: 100;
        margin-left: -150px;
        margin-top: 10px;

        &::before {
          margin-left: 175px;
        }

        ul {
          width: 200px;
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
      }
    }
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
  margin-right: 10px;

  & > div,
  & > button {
    position: relative;

     svg {
      cursor: pointer;
      font-size: 30px;
      margin: 0 5px;
      color: white;

      @media (max-width: 800px) {
          &{
            font-size: 25px;
          }
      }
    }

    & > span {
      cursor: pointer;
      display: block;
      font-size: 12px;
      position: absolute;
      border-radius: 10px;
      align-self: auto;
      text-align: center;
      top: 25px;
      right: 0px;
      height: 20px;
      width: 20px;
      padding: 2px;
      color: white;
    }

    .purple {
      background: ${props => props.theme.colors.purple};
    }
    .green {
      background: ${props => props.theme.colors.green};
    }
  }
`;
