import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

export default function HomepageOSS() {
  return (
    <Box backgroundColor="gray.500" pt={[50, 100]}>
      <Flex w={1400} maxW="90vw" margin="auto">
        <Box display={['none', 'block']}>
          <Image
            src="/illustrations/climber.png"
            width="600"
            height="800"
            layout="intrinsic"
            q={95}
          />
        </Box>
        <Flex pt={0} ml={25} flexDir="column" justifyContent="center">
          <Text fontSize="5xl" fontWeight="bold" color="gray.200" lineHeight="1" pb="5">
            {' '}
            Omnixent is open-source{' '}
          </Text>
          <Text color="gray.50">
            {' '}
            Omnixent is a community effort to build a better and more interesting web. <br /> Its
            source code is available for free on GitHub and can be cloned and self-hosted for
            private usage.{' '}
          </Text>
          <Box>
            <Button
              mt={5}
              mb={10}
              colorScheme="blackAlpha"
              as="a"
              href="https://github.com/omnixent/omnixent"
              target="_blank">
              Browse source code
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
