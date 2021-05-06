import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

const CommonSEO = () => (
  <NextSeo
    title="Omnixent - Discover what people searches on the web"
    description="Discover what people searches on the web"
    openGraph={{
      url: 'https://omnixent.com',
      site_name: 'Omnixent',
      title: 'Omnixent',
      description: 'Discover what people searches on the web',
      images: [
        {
          url: 'https://omnixent.com/meta/omx-ogimage.png',
          width: 1920,
          height: 1080,
        },
      ],
    }}
    twitter={{
      handle: '@omnixent',
      site: '@omnixent',
      cardType: 'summary_large_image',
    }}
  />
);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <CommonSEO />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
