import React, { useState, Fragment } from "react";
import './sass/container.scss';
import Container from "./components/container";
import {
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink, 
  from,
} from '@apollo/client' ;
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors, networkError}) =>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path}) =>{
      console.log(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: "https://api.spacex.land/graphql/"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

function App() {
  return (
    <ApolloProvider client = {client}>
      {" "}
      <Container/>
    </ApolloProvider>
  );
}

export default App;
