// _app.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '../utils/analytics'; // Import the utility file

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    
    // Initialize Google Analytics
    ga.initGA();

    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
