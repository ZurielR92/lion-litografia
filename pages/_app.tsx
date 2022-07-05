import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UIProvider } from '../context/ui'
import { LayoutMain } from '../components/layout/LayoutMain'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <UIProvider>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </UIProvider>
  )
}

export default MyApp
