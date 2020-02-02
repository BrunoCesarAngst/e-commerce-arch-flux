// para aplicar as middleware dentro do store, usamos o applyMiddleware e o compose para dar um merge nas configurações
import { createStore, applyMiddleware, compose } from 'redux';

// criando a middleware de saga
import createSagaMiddleware from 'redux-saga';

// importando os vários reducer
import rootReducer from './modules/rootReducer';

import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

//  integrando a parte do redux com reactotron
const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

// a variável que recebe essa função
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
