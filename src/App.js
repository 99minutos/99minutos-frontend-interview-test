import React, { useState } from 'react';
import './App.css';
import CardsList from './components/CardsList';
import Detail from './components/Detail';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export default function App() {
	const client = new ApolloClient({
		uri: 'https://api.spacex.land/graphql/',
		cache: new InMemoryCache(),
	});

	const [selectedCard, setSelectedCard] = useState(false);

	const onCardSelect = (id) => {
		setSelectedCard(id);
	};

	return (
		<ApolloProvider client={client}>
			<div className="App">
				<CardsList handleCardSelect={onCardSelect} />
				<Detail selectedCard={selectedCard} />
			</div>
		</ApolloProvider>
	);
}
