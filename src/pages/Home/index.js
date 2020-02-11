import React, { useState, useEffect } from 'react';

// usando React hooks redux
import { useDispatch, useSelector } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import api from '../../services/api';

// todas as actions de cart
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((SumAmount, product) => {
      // criando um objeto com a chave de cada entrada do objeto e valor do amount
      SumAmount[product.id] = product.amount;

      return SumAmount;
      // iniciando o amount com objeto vazio
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // para trabalhar com dados assíncronos criamos uma função chamando ela
    // mesma aqui dentro
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  // a função recebendo o id do produto
  function handleAddProduct(id) {
    // pegando o disparador de actions para a saga
    //  o disparador contendo action
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button
            type="button"
            // função passando todo o produto
            onClick={() => handleAddProduct(product.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
