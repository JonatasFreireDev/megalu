import React from 'react';
import styled from 'styled-components';
import { usePageConfig } from '../../store/PageConfig';

export const SpaceToHeader: React.FC = () => {
  const { getHeaderIsVisible } = usePageConfig();

  return !getHeaderIsVisible ? <SpaceBox /> : <></>;
};

const SpaceBox = styled.div`
  display: block;
  height: 120px;
`;
