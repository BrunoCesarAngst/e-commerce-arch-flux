import { createStore } from 'redux';

// importando os vários reducer
import rootReducer from './modules/rootReducer';

//  integrando a parte do redux com reactotron
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

// a variável que recebe essa função
const store = createStore(rootReducer, enhancer);

export default store;
