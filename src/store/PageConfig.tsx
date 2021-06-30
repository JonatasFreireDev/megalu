import React, { createContext, useContext, useState, useCallback } from 'react';

interface PageConfigContextData {
  setHeaderIsVisible(isVisible: boolean): void;
  getHeaderIsVisible: boolean;
  setHeaderIsClosed(close: boolean): void;
  getHeaderIsClosed: boolean;
}

const PageConfigContext = createContext<PageConfigContextData>(
  {} as PageConfigContextData
);

const PageConfigProvider: React.FC = ({ children }) => {
  const [getHeaderIsVisible, setHeaderVisible] = useState(true);
  const [getHeaderIsClosed, setStateHeaderIsClosed] = useState(false);

  const setHeaderIsVisible = useCallback((isVisible: boolean) => {
    setHeaderVisible(isVisible);
  }, []);

  const setHeaderIsClosed = useCallback((close: boolean) => {
    setStateHeaderIsClosed(close);
  }, []);

  return (
    <PageConfigContext.Provider
      value={{
        getHeaderIsVisible,
        setHeaderIsVisible,
        getHeaderIsClosed,
        setHeaderIsClosed,
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
