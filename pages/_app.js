import './app.scss';
import { CookiesProvider } from 'react-cookie';
import MyProvider from '../comps/context';

function MyApp({ Component, pageProps }) {
  return (
    <MyProvider>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </MyProvider>

  )

}

export default MyApp
