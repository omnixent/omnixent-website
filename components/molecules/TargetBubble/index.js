import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';

export default function TargetBubble({ target, description, icon }) {
  return (
    <Flex direction={["column", "row"]} borderRadius={35} backgroundColor="gray.200" w={["100%", 200, 350, 480, 500]} p={5}>
      <Box alignSelf={["center", "auto"]} mr={5}>
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
      <Box textAlign={["center", "left"]}>
        <Text color="gray.700" fontWeight="bold" mb={2}>
          {' '}
          {target}{' '}
        </Text>
        <Text color="gray.700"> {description} </Text>
      </Box>
    </Flex>
  );
}
