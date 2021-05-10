import '../styles/globals.css'
import { AppProps } from 'next/app'
import { AppLayout } from './components/AppLayout/AppLayout'

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}