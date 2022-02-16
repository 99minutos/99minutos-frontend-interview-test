import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, HttpLink , InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://api.spacex.land/graphql/'
    })
})



ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
        document.getElementById('root'));
