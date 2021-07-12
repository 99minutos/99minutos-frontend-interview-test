import React from 'react';
import './App.css';
import { HomeScreen } from './pages/home/HomeScreen';
// import ApolloClient from 'apollo-boost';
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri:"https://api.spacex.land/graphql/",
	cache: new InMemoryCache()
})

const App = () => {
  	return (
		<ApolloProvider client={ client }>
			<HomeScreen/>
		</ApolloProvider>

  	);
}

export default App;
