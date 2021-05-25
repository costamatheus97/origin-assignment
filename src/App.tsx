import React from 'react';

import Home from './pages/Home';
import GlobalStyles from './styles/global';

import AppProvider from './context';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Home />
      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
