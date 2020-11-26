import './app.scss';
import MyProvider from '../comps/context';

function MyApp({ Component, pageProps }) {
  return (
  <MyProvider>
  <Component {...pageProps} />
  </MyProvider>
  )
}

export default MyApp
