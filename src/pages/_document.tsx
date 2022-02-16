import React from 'react';
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/styles';
import {AppInitialProps} from "next/app";
import {Fragment} from 'react';

const AppDocument = ({...initialProps}: Document & AppInitialProps) => {

  return (
    <Html>
      <Head>
        <meta charSet="utf-8"/>
        <meta charSet="utf-8"/>
        <meta property="og:title" content="SEO"/>
        <meta property="og:description" content="SEO"/>
        <link rel="shortcut icon" href="favicon.ico"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}

AppDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      (
        <Fragment key={0}>
          {initialProps.styles}
          {sheets.getStyleElement()}
        </Fragment>
      ),
    ],
  };
};

AppDocument.renderDocument = Document.renderDocument;

export default AppDocument
