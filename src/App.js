import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// Routes
import AppRouter from "AppRouter";

// Global Styles
import GlobalStyle, { Container } from "globalStyles";

const App = () => {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
  });

  return (
    <ApolloProvider client={client}>
      <Container>
        <GlobalStyle />
        <AppRouter />
      </Container>
    </ApolloProvider>
  );
};

export default App;
