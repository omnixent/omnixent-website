import Image from 'next/image';
import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';

export default function HomepageHero() {
  return (
    <Box width="100%" mt={75}>
      <Box
        background="linear-gradient(111.52deg, rgba(255, 189, 128, 0.182) 4.65%, rgba(255, 128, 136, 0.4628) 97.16%)"
        borderRadius="0px 72px 72px 0px"
        boxShadow="xl"
        h={[380, 600]}
        width={["95vw", "85vw", "70vw"]}
        position="absolute"
        left={0}
        zIndex={-1}
      />

      <Box zIndex={1} w={[480, 768, "100%", "100%", 1400]} m="auto" pt={[10, 30, 50, 50, 120]} px={[5]}>
        <Flex justifyContent="space-between">
          <Box w={["85vw", "75vw", "70vw"]}>
            <Heading color="purple.900" fontSize={["2xl", "3xl", "5xl", "6xl"]} lineHeight="short">
              Discover what people <br />
              search on the web.
            </Heading>
            <Text color="purple.800" fontSize="20" mt={25}>
              Answer your audience questions, reach more people, improve your SEO. <br />
              Omnixent is <b>open-source</b> and <b>free to use</b>.
            </Text>
            <Box mt={35}>
              <Button colorScheme="telegram" mr={25}>
                Try now
              </Button>
              <Button>Learn more</Button>
            </Box>
          </Box>
          <Box w="100%" alignSelf={["center", "center", "center", "flex-end", "flex-start"]} display={["none", "block"]} mt={-150}>
            <Image
              src="/illustrations/rocket.png"
              layout="intrinsic"
              width="700"
              height="700"
              quality={95}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
