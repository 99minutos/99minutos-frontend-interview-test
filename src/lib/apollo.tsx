import React from 'react';
import Head from 'next/head';
import {
    AppContextType,
    AppInitialProps,
    AppTreeType,
    NextComponentType,
    NextPageContext,
} from 'next/dist/next-server/lib/utils';

import {ApolloClientOptions} from "apollo-client/ApolloClient";
import {NextRouter} from "next/dist/next-server/lib/router/router";

import {ApolloClient} from 'apollo-client';
import {setContext} from 'apollo-link-context';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {ApolloProvider} from '@apollo/react-hooks';
import {IncomingMessage} from 'http';
import cookie from 'cookie';
import fetch from 'isomorphic-unfetch';
import {w3cwebsocket} from 'websocket';
import {isSSR} from './isBrowser';
import {getMainDefinition} from "apollo-utilities";
import {config} from '../common/utils/config';
import {WebSocketLink} from "apollo-link-ws";

export declare type CustomAppContextType<R extends NextRouter = NextRouter> = {
    Component: NextComponentType<ApolloNextPageContext>;
    AppTree: AppTreeType;
    ctx: ApolloNextPageContext;
    router: R;
};

interface ApolloNextPageContext extends NextPageContext {
    apolloClient: ApolloClientOptions<any>
}

/**
 * Get the user token from cookie
 */
const getToken = (req?: IncomingMessage, options = {}) => {
    const cookies = cookie.parse(
        req?.headers?.cookie ?? document.cookie,
        options,
    );

    return cookies.token;
};

export const withApollo = (
    App: NextComponentType<AppContextType, AppInitialProps, any>,
    {ssr = true} = {},
) => {
    const WithApollo = ({apolloClient, apolloState, ...appProps}: any) => {
        const client = apolloClient || initApolloClient(apolloState, {getToken});
        console.log("HERE", client)
        return (
            <ApolloProvider client={client}>
                <App {...appProps} />
            </ApolloProvider>
        );
    };

    if (process.env.NODE_ENV !== 'production') {
        // Set correct display name for devtools
        WithApollo.displayName = `withApollo(${App.displayName})`;
    }

    WithApollo.getInitialProps = async (ctx: CustomAppContextType) => {
        const {
            Component,
            router,
            ctx: {req, res},
        } = ctx;

        const apolloClient = (ctx.ctx.apolloClient = initApolloClient({}, {
            getToken: () => getToken(req),
        }));
        const appProps = App.getInitialProps ? await App.getInitialProps(ctx) : {};

        if (res && res.finished) {
            // When redirecting, the response is finished.
            // No point in continuing to render
            return {};
        }

        if (ssr) {
            // Run all graphql queries in the component tree
            // and extract the resulting data
            try {
                const {getDataFromTree} = await import('@apollo/react-ssr');

                // Run all GraphQL queries
                await getDataFromTree(
                    // @ts-ignore
                    <ApolloProvider client={apolloClient}>
                        <App {...appProps} Component={Component} router={router}/>
                    </ApolloProvider>,
                );
            } catch (error) {
                // Prevent Apollo Client GraphQL errors from crashing SSR.
                // Handle them in components via the data.error prop:
                // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                // console.error('Error while running `getDataFromTree`', error);
            }

            // getDataFromTree does not call componentWillUnmount
            // head side effect therefore need to be cleared manually
        }

        // Extract query data from the Apollo's store
        const apolloState = apolloClient.cache.extract();

        return {
            ...appProps,
            apolloState,
        };
    };

    return WithApollo;
};

type InitApolloClientOptions = [{}, { getToken: typeof getToken }];

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */
const initApolloClient = (...args: InitApolloClientOptions) => {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (typeof window === 'undefined') {
        // @ts-ignore
        return createApolloClient(...args);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = createApolloClient(...args);
    }

    return apolloClient;
};

/**
 * Creates and configures the ApolloClient
 */
const createApolloClient = (initialState = {}, {getToken}: any) => {
    const fetchOptions = {
        agent: null,
    };

    // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
    // 'https-proxy-agent' is required here because it's a sever-side only module
    if (typeof window === 'undefined') {
        if (process.env.https_proxy) {
            fetchOptions.agent = new (require('https-proxy-agent'))(
                process.env.https_proxy,
            );
        }
    }

    const httpLink = new HttpLink({
        uri: config.graphql, // Server URL (must be absolute)
        credentials: 'same-origin',
        fetch,
        fetchOptions,
    });

    const authLink = setContext((_request, {headers}) => {
        const token = getToken();

        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            },
        };
    });
    // const wsLink = new WebSocketLink({
    //     uri: config.ws,
    //     options: {
    //         reconnect: true,
    //     },
    //     webSocketImpl: w3cwebsocket
    // });

    const link = authLink.split(
        // split based on operation type
        ({query}) => {
            const definition = getMainDefinition(query)
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            )
        },
        // @ts-ignore
        //wsLink,
        httpLink
    )


    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new ApolloClient({
        connectToDevTools: isSSR(),
        ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
        // @ts-ignore
        link,
        cache: new InMemoryCache().restore(initialState),
    });
};

