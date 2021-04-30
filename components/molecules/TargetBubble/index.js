import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';

export default function TargetBubble({ target, description, icon }) {
  return (
    <Flex borderRadius={35} backgroundColor="gray.200" w={500} p={5}>
      <Box mr={5}>
        <Flex
          backgroundColor="white"
          borderRadius="full"
          justifyContent="center"
          alignItems="center"
          w={115}
          h={115}>
          <Image src={`/featuresIcons/${icon}.svg`} w={75} h={75} />
        </Flex>
      </Box>
      <Box>
        <Text color="gray.700" fontWeight="bold" mb={2}>
          {' '}
          {target}{' '}
        </Text>
        <Text color="gray.700"> {description} </Text>
      </Box>
    </Flex>
  );
}
