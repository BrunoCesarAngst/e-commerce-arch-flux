# E-commerce-arch-flux

## Inicializando a aplicação

```bash
~/$ npm install -g create-react-app
~/$ create-react-app e-commerce-arch-flux
~/$ cd e-commerce-arch-flux/
```

## Padronizando mensagens de commit do Git

Usando [commitlint](https://github.com/conventional-changelog/commitlint), [husky](https://github.com/typicode/husky) e o [commitizen](https://github.com/commitizen/cz-cli)

```bash
comp:~/first-project-with-react$ yarn add @commitlint/config-conventional @commitlint/cli -D
comp:~/first-project-with-react$ echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
# Para informar ao commitlint que ele deve rodar depois do git commit colocando uma commit message dentro dele
comp:~/first-project-with-react$ yarn add husky -D

```

No package.json colamos isso

```json
},
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      // usando o poder do husky quando for digitado git commit ele executa o
      //commitizen
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
    }
  },
  "devDependencies": {
```

```bash
comp:~/first-project-with-react$ yarn add commitizen -D
comp:~/first-project-with-react$ yarn commitizen init cz-conventional-changelog --yarn --dev --exact
```

## ESLint, Prettier & EditorConfig

Com o [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) for VS Code instalado damos um Generation .editorconfig e editamos nesse arquivo as seguintes linhas:

 end_of_line = lf,

 trim_trailing_whitespace = true,

 insert_final_newline = true

 Vamos configurar o ESLint

```bash
comp:~/first-project-with-react$ yarn add eslint -D
comp:~/first-project-with-react$ yarn eslint --init
# Removemos o arquivo package-lock.json e rodamos yarn na raiz do projeto
comp:~/first-project-with-react$ yarn
# Damos continuação configurando o Prettier
comp:~/first-project-with-react$ yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
#  Vamos para o arquivo .eslintrc.js e criamos o arquivo .prettierrc
```

```js
// ~/first-project-with-react.js/.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    // 'plugin:react/recommended',
    'airbnb',
    // estendendo as configurações do
    'prettier',
    // e prettier para react
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  // Para informar que estamos usando as últimas configurações do babel
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    // incluindo o
    'prettier',
  ],
  rules: {
    // mostrar todos os erros
    'prettier/prettier': 'error',
    // para continuar a usar a extensão .js
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] },
    ],
    // para poder usar export sem default
    'import/prefer-default-export': 'off',
  },
};
```

```json
// ~/first-project-with-react.js/.prettierrc.json
{
  // aspas simples
  "singleQuote": true,
  // virgula à direita
  "trailingComma": "es5"
}
```

## Configurando rotas

```bash
~/e-commerce-arch-flux$ yarn add react-router-dom

src
├── App.js # Header dentro do BrowserRouter, para para ter acesso a navegação e
|          # ser clicável
├── index.js
├── pages
│   ├── Cart
│   │   └── index.js
│   └── Home
│       └── index.js
└── routes.js #configurar as rotas
```

## Estilos globais

```bash
~/e-commerce-arch-flux$ yarn add styled-components
src
├── App.js
├── index.js
├── pages
│   ├── Cart
│   │   └── index.js
│   └── Home
│       └── index.js
├── routes.js
└── styles
    └── global.js # trabalhamos nesse arquivo
```

vou usar a font [Roboto](https://fonts.google.com/specimen/Roboto) e colocar uma imagem de fundo

## Criando Header

```bash
src
├── App.js
├── assets
│   └── images
│       ├── background.svg
│       └── logo.svg # para incluir o logo na página
├── components # trabalhamos nesses arquivos
│   └── Header
│       ├── index.js
│       └── styles.js
├── index.js
├── pages
│   ├── Cart
│   │   └── index.js
│   └── Home
│       └── index.js
├── routes.js
└── styles
    └── global.js

# vamos incluir um ícone no carrinho
~/e-commerce-arch-flux$ yarn add react-icons
```

## Estilização da Home

```bash
src
├── App.js
├── assets
│   └── images
│       ├── background.svg
│       └── logo.svg
├── components
│   └── Header
│       ├── index.js
│       └── styles.js
├── index.js
├── pages
│   ├── Cart
│   │   └── index.js
│   └── Home
│       ├── index.js
│       └── styles.js # trabalhamos nesse arquivo
├── routes.js
└── styles
    └── global.js

# para um hover que escurece o botão usando darken
~/e-commerce-arch-flux$ yarn add polished
```

## Estilização do Carrinho

```bash
src
├── App.js
├── assets
│   └── images
│       ├── background.svg
│       └── logo.svg
├── components
│   └── Header
│       ├── index.js
│       └── styles.js
├── index.js
├── pages
│   ├── Cart # trabalhamos nesses arquivos
│   │   ├── index.js
│   │   └── styles.js
│   └── Home
│       ├── index.js
│       └── styles.js
├── routes.js
└── styles
    └── global.js
```

## Configurando API fake

Vamos obter uma API REST fake completa com codificação zero através do [json-server](https://github.com/typicode/json-server)

```bash
~/e-commerce-arch-flux$ yarn global add json-server

~/e-commerce-arch-flux$ yarn add axios
# criamos a api fake  e rodamos a api com esse comando!
# damos um json-server passando o nome do arquivo com o nome da porta e o -w é
# para quando temos alterações no arquivo e ele altera automático
.
├── commitlint.config.js
├── package.json
├── public
│   └── index.html
├── README.md
├── server.json # o arquivo da api REST fake
├── src
│   ├── App.js
│   ├── assets
│   │   └── images
│   │       ├── background.svg
│   │       └── logo.svg
│   ├── components
│   │   └── Header
│   │       ├── index.js
│   │       └── styles.js
│   ├── index.js
│   ├── pages
│   │   ├── Cart
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── Home
│   │       ├── index.js
│   │       └── styles.js
│   ├── routes.js
│   ├── services
│   │   └── api.js # acessando a api
│   └── styles
│       └── global.js
└── yarn.lock
~/e-commerce-arch-flux$ json-server server.json -p 3333 -w
```

## Buscando produtos da API

Trabalhando a internacionalização da aplicação com pacote Intl do JS e falando de formatação, ter o cuidado para fazer formatações fora do render ou return de um componente.

```bash
src
├── App.js
├── assets
│   └── images
│       ├── background.svg
│       └── logo.svg
├── components
│   └── Header
│       ├── index.js
│       └── styles.js
├── index.js
├── pages
│   ├── Cart
│   │   ├── index.js
│   │   └── styles.js
│   └── Home
│       ├── index.js
│       └── styles.js
├── routes.js
├── services
│   └── api.js
├── styles
│   └── global.js
└── util
    └── format.js # Trabalhando nesse arquivo
```

## Configurando o Redux

```bash
~/e-commerce-arch-flux$ yarn add redux react-redux

src
├── App.js
├── assets
│   └── images
│       ├── background.svg
│       └── logo.svg
├── components
│   └── Header
│       ├── index.js
│       └── styles.js
├── index.js
├── pages
│   ├── Cart
│   │   ├── index.js
│   │   └── styles.js
│   └── Home
│       ├── index.js
│       └── styles.js
├── routes.js
├── services
│   └── api.js
├── store # configurando o redux
│   ├── index.js # configuração inicial do redux
│   └── modules # armazenando os vários tipos de dados no redux
│       ├── cart
│       │   └── reducer.js # aqui a função do reducer do carrinho
│       └── rootReducer.js # armazenando todos os reducer da aplicação
├── styles
│   └── global.js
└── util
    └── format.js
```

## Adicionando ao carrinho

Passando o objeto do produto que foi clicado no botão ADICIONAR AO CARRINHO para o reducer do carrinho(cart), para ser acessível pelo resto da aplicação

E sabendo que quando fazemos um dispatch de dentro de component do react todos os reducer da aplicação são ativados

Então o nosso component dispara(dispatch) uma ação(action), a action avisa o reducer, o reducer faz as alterações e avisa todos os components que precisão dessa informação para fazer as atualizações.

## Reactotron + Redux

```bash
~/e-commerce-arch-flux$ yarn add reactotron-react-js reactotron-redux

# para que reactotron tenha integração completa com o estado do redux
# usaremos a seção state do reactotron e com dotNotation podemos visualizar as reducer e fazendo um snapshot do reutilizando o estado

src
├── App.js # importar o reactotron antes das importações de arquivos internos
├── assets
│   └── images
│       ├── background.svg
│       └── logo.svg
├── components
│   └── Header
│       ├── index.js
│       └── styles.js
├── config
│   └── ReactotronConfig.js # criamos esse arquivo de configuração
├── index.js
├── pages
│   ├── Cart
│   │   ├── index.js
│   │   └── styles.js
│   └── Home
│       ├── index.js
│       └── styles.js
├── routes.js
├── services
│   └── api.js
├── store
│   ├── index.js # integrando a parte do redux com reactotron
│   └── modules
│       ├── cart
│       │   └── reducer.js
│       └── rootReducer.js
├── styles
│   └── global.js
└── util
    └── format.js
```
