import { AppProvider } from '../Hooks/useAppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
       <Component {...pageProps} />
    </AppProvider>
  )
 
}

export default MyApp