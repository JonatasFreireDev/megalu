import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './store';

import GlobalStyle from './styles/global';
import { lightTheme } from './styles/lightTheme';

import Routes from './routes';
import Header from './components/Header';
import { SpaceToHeader } from './components/SpaceToHeader';

function App() {
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
            <SpaceToHeader />
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
