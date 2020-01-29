import { createStore } from 'redux';

// importando os vários reducer
import rootReducer from './modules/rootReducer';

// a variável que recebe essa função
const store = createStore(rootReducer);

export default store;
