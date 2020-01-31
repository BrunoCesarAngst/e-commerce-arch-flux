import React, { Component } from 'react';

// conectando o component com o estado do redux
import { connect } from 'react-redux';

// ligar criadores de ação
import { bindActionCreators } from 'redux';

import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import api from '../../services/api';

// todas as actions de cart
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  // a função recebendo o produto
  handleAddProduct = product => {
    // pegando o disparador de actions para a redux
    const { addToCart } = this.props;

    //  o disparador contendo action
    addToCart(product);
  };

  render() {
    const { products } = this.state;

    // essa propriedade vem do mapStateToProps
    const { amount } = this.props;

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
              onClick={() => this.handleAddProduct(product)}
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
}

const mapStateToProps = state => ({
  // gerar uma informação fácil de ser acessada de quanto de um produto está no carrinho
  // percorrendo o estado do carrinho recebendo o valor do amount, um objeto com id do produto e a quantidade que tem no carrinho
  amount: state.cart.reduce((amount, product) => {
    // criando um objeto com a chave de cada entrada do objeto e valor do amount
    amount[product.id] = product.amount;

    return amount;
    // iniciando o amount com objeto vazio
  }, {}),
});

// convertendo action do redux em props dentro do component
const mapDispatchToProps = dispatch =>
  // ligar criadores de ação
  bindActionCreators(CartActions, dispatch);

// connect retorna outra função que recebe a Home
// como connect não está recebendo o mapStateToProp como primeiro parâmetro, colocamos como null
export default connect(mapStateToProps, mapDispatchToProps)(Home);
