import NextNprogress from 'nextjs-progressbar'
import { Provider as AuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from '../context/ModalContext'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
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
          <NextNprogress
            color="#1890ff"
            startPosition={0.3}
            stopDelayMs={200}
            height={5}
          />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </ModalProvider>
  )
}

export default App
