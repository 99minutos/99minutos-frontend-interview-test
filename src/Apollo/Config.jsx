import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
});

export default function Config({children}){
    return(
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}