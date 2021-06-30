import React from 'react';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './store';

import GlobalStyle from './styles/global';
import { lightTheme } from './styles/lightTheme';

import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={lightTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
