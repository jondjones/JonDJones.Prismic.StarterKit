import '../styles/globals.css'
import { PrismicProvider } from '@prismicio/react'
import { client } from '../utils/prismicClient'

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider client={client}>
      <Component {...pageProps} />
    </PrismicProvider>)
}

export default MyApp
