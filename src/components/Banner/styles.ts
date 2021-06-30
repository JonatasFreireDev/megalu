import styled from 'styled-components';

interface IProps {
  HeaderIsVisible: boolean;
}

export const Container = styled.div<IProps>`
  div {
    top: -10px;

    .slick-prev {
      color: black;
      z-index: 99;
      left: 15px;
    }

    .slick-prev::before {
      font-size: 25px;
      color: black;
    }

    .slick-next {
      color: black;
      right: 15px;
    }

    .slick-next::before {
      font-size: 25px;
      color: black;
    }

    ul {
      bottom: 25px;

      li {
        button::before {
          font-size: 15px;
        }
      }
    }
    div {
      div {
        div {
          display: flex;
          justify-content: center;
          align-content: center;

          img {
            z-index: 1000;
            max-width: 100%;
          }
        }
      }
    }
  }
`;
