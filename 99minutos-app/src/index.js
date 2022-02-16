import * as React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';


const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}> 
    <App />, 
  </ApolloProvider>,
 document.getElementById('root')
);
reportWebVitals();
