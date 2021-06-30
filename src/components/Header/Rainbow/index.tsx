import React from 'react';
import styled from 'styled-components';

export const Rainbow: React.FC = () => {
  return(
    <ArcoIris>
      <span className="yellow" />
      <span className="orange" />
      <span className="red" />
      <span className="rose" />
      <span className="purple" />
      <span className="deep-purple" />
      <span className="blue" />
      <span className="cyan" />
      <span className="light-green" />
      <span className="green" />
    </ArcoIris>
  )
}

const ArcoIris = styled.div`
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
