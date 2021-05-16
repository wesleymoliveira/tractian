import { Provider as AuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider session={pageProps.session}>
        <Head>
          <title> Tractian - Frontend</title>
          <link rel="shortcut icon" href="/img/favicon-ia.png" />
          <link rel="apple-touch-icon" href="/img/favicon-ia.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="Tractian" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
