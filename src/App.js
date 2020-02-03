import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// deixa disponível o store da aplicação o estado global servindo essa informação para todos os componentes
import { Provider } from 'react-redux';

// para aplicar mensagens ao usuário
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

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
        {/* incluindo o toastfy com tempo de abertura */}
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
