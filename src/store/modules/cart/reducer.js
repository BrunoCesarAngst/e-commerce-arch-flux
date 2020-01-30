// e sabendo que quando fazemos um dispatch de dentro de component do react todos os reducer da aplicação são ativados, o state é o estado anterior
export default function cart(state = [], action) {
  // para o reducer do cart só ouça a ação ADD_TO_CART
  switch (action.type) {
    case 'ADD_TO_CART':
      // quando type ADD_TO_CART for disparada
      // pega todo o state e adiciona um novo produto
      return [...state, action.product];
    default:
      return state;
  }
}
