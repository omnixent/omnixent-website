import Image from 'next/image';
import { Text, Box, Flex } from '@chakra-ui/react';

export default function HomepageTargetHero() {
  return (
    <>
      <Text fontWeight="bold" color="gray.800" fontSize="5xl" textAlign="center" mt={100}>
        Target your audience
      </Text>
      <Text color="gray.500" textAlign="center" fontSize="3xl">
        Connect with your audience, by answering their questions.
      </Text>
      <Box>
        <Flex justifyContent="center" mt={100}>
          <Image
            src="/illustrations/explorer.png"
            width="800"
            height="343"
            objectFit="contain"
            layout="intrinsic"
            quality={90}
          />
        </Flex>
      </Box>
    </>
  );
}
