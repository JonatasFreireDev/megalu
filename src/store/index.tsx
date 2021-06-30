import React from 'react';

import { PageConfigProvider } from './PageConfig';

const AppProvider: React.FC = ({ children }) => (
  <PageConfigProvider>{children}</PageConfigProvider>
);

export default AppProvider;
