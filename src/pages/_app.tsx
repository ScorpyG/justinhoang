import { ChakraBaseProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';
import TopNavbar from '../components/TopNavbar/TopNavbar';

export default function App({ Component, pageProps }: AppProps) {
  const DynamicFooter = dynamic(() => import('../components/Footer/Footer'), {
    ssr: false,
  });

  // TODO: Fix component styling with ChakraUI
  return (
    <ChakraBaseProvider>
      <Suspense fallback={null}>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="./svgs/light-logo.svg" />
        </Head>
        <main>
          <TopNavbar />
          <Component {...pageProps} />
          <DynamicFooter />
        </main>
      </Suspense>
    </ChakraBaseProvider>
  );
}
