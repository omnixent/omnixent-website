import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/organisms/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
