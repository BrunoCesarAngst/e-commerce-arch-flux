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

```
