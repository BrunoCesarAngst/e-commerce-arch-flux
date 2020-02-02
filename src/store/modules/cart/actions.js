// quando o usuário clica em adicionar no carrinho, essa action passa a ser ouvida pelo saga quando o saga finalizar a chama a api ter os dados do produto o saga vai disparar a ADD_SUCCESS que vai ser ouvida pela reducer e levar as informações do produto para o carrinho
export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    // toda action tem o type e passo o produto
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

// modificando a propriedade amount do product
export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
