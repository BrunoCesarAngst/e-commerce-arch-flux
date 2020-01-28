import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* para o Header ter acesso a parte de navegação, ser clicável */}
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
