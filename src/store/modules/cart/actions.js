export function addToCart(product) {
  return {
    // toda action tem o type e passo o produto
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}
