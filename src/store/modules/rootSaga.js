import { all } from 'redux-saga/effects';
// juntar todos os sagas

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
