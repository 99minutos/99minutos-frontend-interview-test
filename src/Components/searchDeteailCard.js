import React from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import Mission from "./findOneQuery"

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
})

export default function searchResults ({ id }) {
    return (
        <ApolloProvider client={client}>
        <div className="result-container">
          <Mission
            id={id}
          />
        </div>
      </ApolloProvider>
    )
}