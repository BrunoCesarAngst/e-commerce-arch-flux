//  o call é responsável por chamar métodos assíncronos e que retornam promises e o put para disparar uma action o all cadastra lister's o takeLatest paga o clique mais recente descartando os anteriores
import { call, put, all, takeLatest } from 'redux-saga/effects';

// a api
import api from '../../../services/api';

import { addToCartSuccess } from './actions';

// function generator como se fosse um async que vai gerar um passo a mais entre a action e o reducer acessando a api buscando os detalhes do produto para cadastrar dentro do carrinho. recebendo o id do produto
function* addToCart({ id }) {
  // chamando a api o yield = await do saga para obter os dados do produto e vamos anotar essas informações no reducer
  const response = yield call(api.get, `/products/${id}`);

  // colocando as informação no reducer do cart
  yield put(addToCartSuccess(response.data));
}

// ouvindo lister's

export default all([
  // o primeiro parâmetro do takeLatest e qual ação do redux vai ser ouvida e depois qual função queremos disparar
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
