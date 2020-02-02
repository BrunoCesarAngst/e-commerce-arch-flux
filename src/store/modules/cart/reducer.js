import produce from 'immer';

// e sabendo que quando fazemos um dispatch de dentro de component do react todos os reducer da aplicação são ativados, o state é o estado anterior
export default function cart(state = [], action) {
  // para o reducer do cart só ouça a ação @cart/ADD_SUCCESS
  switch (action.type) {
    // quando type @cart/ADD_SUCCESS for disparada
    case '@cart/ADD_SUCCESS':
      // pega todo o state e adiciona um novo produto
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        // se existir
        if (productIndex >= 0) {
          // acrescenta um produto
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
