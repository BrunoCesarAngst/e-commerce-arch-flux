import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  // responsivo
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 6px;
    padding: 20px;
    margin: 10px;

    width: calc(33.33% - 20px);

    @media (max-width: 950px) {
      width: calc(50% - 20px);
    }
    @media (max-width: 650px) {
      width: calc(100% - 20px);
    }

    img {
      align-self: center;
      max-width: 250px;
    }

    // ">" só o strong dentro da li
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      //
      overflow: hidden;
      // títulos grandes jogam e alinha o botão na base, ocupando toda a margem
      // possível
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      // escurecendo o botão
      &:hover {
        // digo a % e qual cor quero escurecer
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgb(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
