import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// deixa disponível o store da aplicação o estado global servindo essa informação para todos os componentes
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Routes from './routes';

import store from './store';

function App() {
  return (
    // o Provider servindo o estado global para os components
    <Provider store={store}>
      <BrowserRouter>
        {/* para o Header ter acesso a parte de navegação, ser clicável */}
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
