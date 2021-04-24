import Image from 'next/image';
import { Text, Box, Flex, Button } from '@chakra-ui/react';

const Styles = () => (
  <style jsx>{`
    .integration-bg {
      height: 500px;
      z-index: 1;
    }
  `}</style>
);

export default function HomepageIntegration() {
  return (
    <Box minH={1000} position="relative" zIndex={-1}>
      <Styles />
      <Image
        className="integration-bg"
        src="/imgs/star-sky.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Box
        bgColor="gray.900"
        zIndex={1}
        position="absolute"
        width="100%"
        minH={1000}
        bg="linear-gradient(0deg, rgba(74, 85, 104, 0.24) 0%, rgba(0, 0, 0, 0) 2.66%), linear-gradient(0deg, rgba(247, 37, 133, 0.24) 0%, rgba(0, 0, 0, 0.24) 64.83%, rgba(0, 0, 0, 0.56) 100%), linear-gradient(0deg, rgba(140, 115, 238, 0.3), rgba(140, 115, 238, 0.3))">
        <Box justifyContent="center" alignItems="center" p={100} zIndex={1}>
          <Text color="gray.50" fontWeight="bold" fontSize="5xl" textAlign="center">
            Integrate with ease
          </Text>
          <Text color="gray.300" fontSize="3xl" textAlign="center" mt={25} lineHeight="shorter">
            Directly query
            <Text as="span" color="gray.50">
              Omnixent API
            </Text>
            and <br />
            show results in your application in no time.
          </Text>
          <Flex mt={75} justifyContent="center">
            <Button size="lg" backgroundColor="pink.500" color="white" mr={25}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" color="white">
              Learn More
            </Button>
          </Flex>
          <Flex justifyContent="center" mt={100} zIndex={1}>
            <Image
              src="/illustrations/meditation.png"
              width="1000"
              height="600"
              objectFit="contain"
              layout="intrinsic"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
