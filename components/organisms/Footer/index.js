import Link from 'next/link';
import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { ImTwitter } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function Footer() {
  return (
    <Box backgroundColor="gray.800" color="gray.100">
      <Box width={1400} maxWidth="90vw" margin="auto" pt={20} pb={20}>
        <Grid gridTemplateColumns="repeat(3, 1fr)">
          <GridItem>
            <Box>
              <Image src="/logo/omx-extended-light.svg" w={250} />
            </Box>
          </GridItem>
          <GridItem>
            <Stack fontSize="large">
              <Link href="/features"> Features </Link>
              <Link href="/pricing"> Pricing </Link>
              <Link href="https://github.com/omnixent/omnixent"> Open-source </Link>
              <Link href="https://omnixent.github.io/docs"> Documentation </Link>
            </Stack>
          </GridItem>
          <GridItem>
            <Stack fontSize="large">
              <Link href="mailto:info@omnixent.com"> Help </Link>
              <Link href="mailto:info@omnixent.com"> Contacts </Link>
            </Stack>
          </GridItem>
        </Grid>
        <Flex mt={55} justifyContent="space-between" w="full">
          <Box>Copyright ©2021 Omnixent</Box>
          <Flex>
            <IconButton
              size="lg"
              icon={<Icon as={SiGithub} />}
              variant="link"
              color="white"
              as="a"
              target="_blank"
              href="https://github.com/omnixent"
            />
            <IconButton
              size="lg"
              icon={<Icon as={ImTwitter} />}
              variant="link"
              color="white"
              as="a"
              target="_blank"
              href="https://twitter.com/omnixent"
            />
            <IconButton
              size="lg"
              icon={<Icon as={AiFillInstagram} />}
              variant="link"
              color="white"
              as="a"
              target="_blank"
              href="https://instagram.com/omnixent"
            />
            <IconButton
              size="lg"
              icon={<Icon as={SiLinkedin} />}
              variant="link"
              color="white"
              as="a"
              target="_blank"
              href="https://linkedin.com/company/omnixent"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
