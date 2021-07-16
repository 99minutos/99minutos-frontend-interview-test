import { ApolloClient, InMemoryCache } from '@apollo/client';

const GraphqlURI: string = 'https://api.spacex.land/graphql';

const clientConfiguration: any = {
  uri: GraphqlURI,
  cache: new InMemoryCache()
}

const client = new ApolloClient(clientConfiguration);

export default client;