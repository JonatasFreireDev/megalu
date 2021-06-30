import React, { createContext, useContext, useState, useCallback } from 'react';

interface PageConfigContextData {
  toggleHeaderMenu(isVisible: boolean): void;
  getHeaderIsVisible: boolean;
  setHeaderIsVisibleClosed(close: boolean): void;
  headerIsVisibleClosed: boolean;
}

const PageConfigContext = createContext<PageConfigContextData>(
  {} as PageConfigContextData
);

const PageConfigProvider: React.FC = ({ children }) => {
  const [HeaderIsVisible, setHeaderIsVisible] = useState(true);
  const [headerIsVisibleClosed, setStateHeaderIsVisibleClosed] = useState(
    false
  );

  const toggleHeaderMenu = useCallback((isVisible: boolean) => {
    setHeaderIsVisible(isVisible);
  }, []);

  const getHeaderIsVisible = HeaderIsVisible;

  const setHeaderIsVisibleClosed = useCallback((close: boolean) => {
    setStateHeaderIsVisibleClosed(close);
  }, []);

  return (
    <PageConfigContext.Provider
      value={{
        getHeaderIsVisible,
        toggleHeaderMenu,
        headerIsVisibleClosed,
        setHeaderIsVisibleClosed,
      }}
    >
      {children}
    </PageConfigContext.Provider>
  );
};

function usePageConfig(): PageConfigContextData {
  const context = useContext(PageConfigContext);

  if (!context) {
    throw new Error('usePageConfig must be used within a PageConfigProvider');
  }

  return context;
}

export { PageConfigProvider, usePageConfig };
