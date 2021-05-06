import Image from 'next/image';
import { Text, Box, Flex, Button } from '@chakra-ui/react';
import FeatureBubble from '../../molecules/FeatureBubble';

export default function HomepageIntegration() {
  return (
    <Box minH={[1600, 1000]} zIndex={-1}>
      <Box w={1400} maxW={'90vw'} m="auto">
        <FeatureBubble
          name="REST API"
          description="Request any resource 🌎"
          image="/icons/processing.svg"
          styles={{ mt: {base: 1000, md: 450, lg: 450, xl: 125}, animationDelay: '1s' }}
        />
        <FeatureBubble
          name="WordPress Plugin"
          description="No code required 🙌"
          image="/icons/wordpress.svg"
          styles={{ mt: {base: 1150, md: 650, lg: 650, xl: 450}, left: {base: 20, md: 50, lg: 150, xl: 200}, animationDelay: '3s' }}
        />
        <FeatureBubble
          name="GraphQL"
          description="Unleash the full power 🚀"
          image="/icons/graphql.svg"
          styles={{ mt: {base: 1300, md: 450, lg: 450, xl: 250}, right: {base: 75, md: 25}, animationDelay: '2s' }}
        />
        <FeatureBubble
          name="Webhooks"
          description="Get notified in real-time ⚡️"
          image="/icons/webhooks.svg"
          styles={{ mt: {base: 1450, md: 650, lg: 650, xl: 550}, right: {base: 5, md: 50, lg: 150, xl: 155}, animationDelay: '0.5s' }}
        />
      </Box>
      <Box
        bgColor="gray.900"
        zIndex={0}
        position="absolute"
        width="100%"
        minH={[1600, 1000]}
        h={[1600, 1000]}
        bg="linear-gradient(0deg, rgba(74, 85, 104, 0.24) 0%, rgba(0, 0, 0, 0) 2.66%), linear-gradient(0deg, rgba(247, 37, 133, 0.24) 0%, rgba(0, 0, 0, 0.24) 64.83%, rgba(0, 0, 0, 0.56) 100%), linear-gradient(0deg, rgba(140, 115, 238, 0.3), rgba(140, 115, 238, 0.3)),url(/_next/image?url=%2Fimgs%2Fstar-sky.jpg&w=1920&h=1000&q=75&fit=crop)">
        <Box
          justifyContent="center"
          alignItems="center"
          zIndex={1}
          position="absolute"
          width="100%">
          <Text mt={100} color="gray.50" fontWeight="bold" fontSize="5xl" textAlign="center">
            Integrate with ease
          </Text>
          <Text color="gray.300" fontSize="3xl" textAlign="center" mt={25} lineHeight="shorter">
            Directly query&nbsp;
            <Text as="span" color="gray.50">
              Omnixent API
            </Text>
            &nbsp;and <br />
            show results in your application in no time.
          </Text>
          <Flex mt={55} justifyContent="center">
            <Button
              size="lg"
              backgroundColor="pink.500"
              _hover={{
                background: 'pink.700',
                color: 'white',
              }}
              color="white"
              mr={25}>
              Get Started
            </Button>
            <Button
              size="lg"
              variant="link"
              color="white"
              _hover={{
                color: 'gray.300',
              }}>
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
