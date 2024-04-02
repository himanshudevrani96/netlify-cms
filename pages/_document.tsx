import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#673ab7" />
          <meta
            name="Description"
            content="an example of NextJS app with 100% accessible lighthouse score"
          />
          <link rel="apple-touch-icon" sizes="57x57" href="app-icon.png" />
          <link rel="manifest" href="/manifest.json" /> */}
          <link rel="icon" type="image/x-icon" href="/home/assets/svg/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheet()
  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collectStyles(<App {...props} />),
    })

  const initialProps = Document && await Document?.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}

export default MyDocument
