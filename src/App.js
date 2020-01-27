import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      {/* para o Header ter acesso a parte de navegação, ser clicável */}
      {/* <Header /> */}
      <Routes />
    </BrowserRouter>
  );
}

export default App;
