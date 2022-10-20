import Head from 'next/head'
import { Container, ThemeProvider } from '@mui/material'
import TopBar from '../components/topbar'
import '../styles/globals.css'

import theme from '../themes/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>X</title>
        <meta name="description"
          content="Technical portfolio, blog, and resume for Xavier Collantes." />
        <meta content="text/html; charset=utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <TopBar></TopBar>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  )
}
