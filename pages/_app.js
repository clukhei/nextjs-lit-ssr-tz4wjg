import '../styles/globals.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return <>
  <Script
          type="module"
          id="console-components-gateway"
          src="https://dev.assets.developer.tech.gov.sg/console-components/gateway.es5.js"
        ></Script> 
  <Component {...pageProps} />
  </>
}

export default MyApp
