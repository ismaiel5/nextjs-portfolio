// import bootstap css
import 'bootstrap/dist/css/bootstrap.min.css'

// import custom css
import '../styles/globals.scss'
import type { AppProps } from 'next/app'



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
