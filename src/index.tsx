import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/client';

import client from './graphql';
import GlobalStyles from './assets/styles/GlobalStyles';
import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);