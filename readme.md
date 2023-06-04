# yourFinance

Um parágrafo da descrição do projeto vai aqui

## Tópicos

<div>
 • <a href="#-sobre-o-yourfinance">Sobre o yourFinance</a> </br>
 • <a href="#%EF%B8%8F-tecnologias">Tecnologias</a> </br>
 • <a href="#-pré-requisitos">Pré requisitos</a> </br>
 • <a href="#-rodando-a-aplicação">Rodando a aplicação</a> </br>
 • <a href="#%EF%B8%8F-executando-os-testes">Executando os testes</a> </br>
 • <a href="#-colaborando">Colaborando</a> </br>
 • <a href="#user-content--licença">Licença</a></br>
</div>

## 💰 Sobre o yourFinance

O **yourFinance** é um software para gerenciamento e controle de finanças pessoais!

O projeto foi desenvolvido com o intuito de eliminar a utilização de planilhas para gerenciamento de controle financeiro. Com o armazenamento das informações através de transações, que são chamadas de movs, e podem ser definidas através de categorias, modalidades e tipo. A partir das definições do usuário, o projeto apresenta algumas informações em tela, e realiza determinadas análises da usabilidade do usuário.

## 🛠️ Tecnologias

Tecnologias e ferramentas utilizadas no desenvolvimento do projeto:

#### **Mobile** ( [React Native](https://reactnative.dev/) + [TypeScript](https://www.typescriptlang.org/) )

- [Axios](https://github.com/axios/axios)
- [StyledComponents](https://styled-components.com/)
- [React Query](https://tanstack.com/query/v4/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [DateTimePicker](https://github.com/react-native-datetimepicker/datetimepicker)
- [React Navigation](https://reactnavigation.org/)
- [Victory Native](https://formidable.com/open-source/victory/)

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)**
- Fontes: **Gotham**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[Prettier](https://prettier.io/)** + **[EditorConfig](https://editorconfig.org/)**
- Versionamento: **[Git](https://git-scm.com)**
- Padronização de código: **[ESLint](https://eslint.org/)**

## 🎨 Layout

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: <br />
→ [Git](https://git-scm.com);<br />
→ [Node.js](https://nodejs.org/en/);<br />

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

## 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/yourFinanceApp/mobile.git

# Vá para a pasta da aplicação Mobile
$ cd mobile

# Instale as dependências
yarn install
```

Após a instalação das dependências, atualize o arquivo httpClient com a url e porta onde o back-end esta rodando localmente.

```
class HttpClient {
  private baseURL;

  constructor(baseURL = 'url-back-end') {
    this.baseURL = baseURL;
  }
}
```

Logo após, você já pode rodar a aplicação com os comandos abaixo.

```bash
# Inicie o projeto com expo
$ yarn start

# Selecione a plataforma para inicializar o projeto
# A aplicação será inicializada na plataforma selecionada
```

## ⚙️ Executando os testes

Para rodar todos os testes no repositório, utilize:

```
yarn test
```

Caso seja necessário rodar apenas um único teste, utilize:

```
yarn test <nome-do-arquivo>.spec.tsx
```

### 🔩 Analise os testes de ponta a ponta

Os testes são construídos utilizando o Triple AAA(Arrange, Act, Assert). Esses sistema consiste em uma metodologia comumente utilizada para escrever testes unitários estruturados e bem organizados. Sendo:

- Arrange(Preparação)
  Nesta etapa você define o cenário de teste, preparando o ambiente, realizando os mocks necessários para realizar o teste, e as definições de entrada de teste.

- Act(Execução)
  Nesta etapa, você executa a ação ou o comportamento que está sendo testado. Podendo ser a chamada de uma função, interação com objeto, ou qualquer outra operação que esta sendo testada.

- Assert(Verificação)
  Nesta etapa, você verifica se o resultado obtido após a execução esta de acordo com o esperado

A metodologia triple AAA promove uma estrutura clara e organizada para os testes, tornando mais legíveis, fáceis de entender e de fácil manutenção. Garantindo uma clareza sobre o que esta sendo testado e cada etapa do teste.

```
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyComponent from './MyComponent';

test('Incrementa o contador ao pressionar o botão', () => {
  // Arrange
  const { getByText } = render(<MyComponent />);
  const incrementButton = getByText('Incrementar');
  const counterText = getByText('Contador: 0');

  // Act
  fireEvent.press(incrementButton);

  // Assert
  expect(counterText).toHaveTextContent('Contador: 1');
});
```

## 💭 Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto).

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/yourFinanceApp/mobile/blob/main/LICENSE) para detalhes.
