import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
