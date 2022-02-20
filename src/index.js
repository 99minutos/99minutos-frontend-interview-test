import { ApolloProvider } from '@apollo/client';
import { Client } from './Client'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <App />
    </ApolloProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
