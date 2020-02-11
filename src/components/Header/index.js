import React from 'react';
import { Link } from 'react-router-dom';

// conectando o nosso componente ao redux com o estado global
import { /*  connect */ useSelector } from 'react-redux';
// aplicando React Hooks

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

// o connect recebendo o parâmetro o primeiro uma função que retorna o estado inteiro do redux retornando um objeto com as informações desse componente
// export default connect(state => ({
//   // quantos produtos no carrinho
//   cartAmount: state.cart.length,
// }))(Header);
