import { combineReducers } from 'redux';

// importando o reducer do carrinho
import cart from './cart/reducer';

export default combineReducers({
  cart,
});
