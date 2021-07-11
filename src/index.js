import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Store from './redux/Store';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';

import './index.css';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
