import React from 'react'
import {AppContext, AppProps} from 'next/app';
import Head from 'next/head'
import {ThemeProvider} from '@material-ui/styles'
import {CssBaseline} from '@material-ui/core'
import {theme} from '../lib'
import {wrapper} from "@/store";
// @ts-ignore
import ironStore from 'iron-store';
import CustomerLayout from "@/layouts/customer";
import {withApollo} from "@/lib/apollo";
import { ApolloProvider } from '@apollo/react-hooks';

const FontFaceObserver = require('fontfaceobserver')

require('typeface-roboto')

export const initializeFonts = () => {
  const roboto = new FontFaceObserver('Roboto')

  // non-blocking loading fonts
  roboto.load().then(() => {
    document.documentElement.classList.add('roboto')
  })
}
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});


const MyApp = ({Component, pageProps}: any) => {
  // componentDidMount() {
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if (jssStyles) {
  //     jssStyles.parentNode!.removeChild(jssStyles)
  //   }
  // }
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
        <link rel="apple-touch-icon" href="/images/icon.png"/>
        <link rel="icon" type="image/png" href="/images/icon.png"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ApolloProvider client={client}>
        <CustomerLayout>
          <Component {...pageProps} />
        </CustomerLayout>
        </ApolloProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.getInitialProps = async ({Component, ctx}: AppContext) => {
  let cookies;
  let token = '';
  if (ctx.req) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (ctx.req.cookies) {
      cookies = await ironStore({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sealed: ctx.req.cookies.session,
        password: `a68AS-W8rtQ-57asQ-poe2d-m81Q9-AS817-5aWq9`,
        ttl: 15 * 24 * 3600 * 1000,
      });
      const session = cookies.get(`session`);
      if (session) {
        token = session.token;
        ctx.store.dispatch({
          type: `LOGIN`,
          payload: {token: session.token, auth: session.auth},
        });
      }
    }
  }
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return {
    pageProps,
  };
};
export default wrapper.withRedux(MyApp);
