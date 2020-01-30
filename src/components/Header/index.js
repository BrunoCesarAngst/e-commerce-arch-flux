import React from 'react';
import { Link } from 'react-router-dom';

// conectando o nosso componente ao redux com o estado global
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

// recebendo do retorno do connect a propriedade
function Header({ cartAmount }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartAmount} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

// o connect recebendo o parâmetro o primeiro uma função que retorna o estado inteiro do redux retornando um objeto com as informações desse componente
export default connect(state => ({
  // quantos produtos no carrinho
  cartAmount: state.cart.length,
}))(Header);
