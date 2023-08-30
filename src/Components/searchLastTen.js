import React from 'react'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import LastTenQuery from "./lastTenQuery"

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
})

export default function searchLastTen () {
    return (
      <>
       <div className="font-bold text-xl mb-2">Front-End Challenge🚀</div>
        <ApolloProvider client={client}>
        <div>
          <LastTenQuery />
        </div>
       </ApolloProvider>
      </>
    )
}