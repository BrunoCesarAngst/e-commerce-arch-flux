//  o call é responsável por chamar métodos assíncronos e que retornam promises;put para disparar uma action; all cadastra lister's; o takeLatest paga o clique mais recente descartando os anteriores; o select busca informações dentro do estado
import { call, put, all, takeLatest, select } from 'redux-saga/effects';

// a api
import api from '../../../services/api';

import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmount } from './actions';

// function generator como se fosse um async que vai gerar um passo a mais entre a action e o reducer acessando a api buscando os detalhes do produto para cadastrar dentro do carrinho. recebendo o id do produto
function* addToCart({ id }) {
  // se o produto já está no carrinho
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    // se existe acrescenta mais 1
    const amount = productExists.amount + 1;

    // disparando a action
    yield put(updateAmount(id, amount));
  } else {
    // chamando a api o yield = await do saga para obter os dados do produto e vamos anotar essas informações no reducer
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    // colocando as informação no reducer do cart
    yield put(addToCartSuccess(data));
  }
}

// ouvindo lister's

export default all([
  // o primeiro parâmetro do takeLatest e qual ação do redux vai ser ouvida e depois qual função queremos disparar
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);
