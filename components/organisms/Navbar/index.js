import Link from 'next/link';
import { Box, Button, Flex, Image } from '@chakra-ui/react';

const navbarLinks = [
  {
    label: 'Demo',
    href: '/demo',
  },
  {
    label: 'Features',
    href: '/features',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Open-Source',
    href: '/open-source',
  },
  {
    label: 'Documentation',
    href: 'https://omnixent.github.io/docs',
    isExternal: true,
  },
];

export default function Navbar() {
  return (
    <Flex p={5} w={1400} maxW={["100vw", "90vw"]} margin="auto" justifyContent="space-between" mt={5}>
      <Image src="/logo/omx-logo-extended.svg" width={250} />
      <Flex display={["none", "block"]} alignSelf="center">
        {navbarLinks.map((link) => (
          <Link key={link.href} href={link.href} passHref>
            <Box as="a" ml={5}>
              {link.label}
            </Box>
          </Link>
        ))}
        <Button
          size="xs"
          variant="outline"
          colorScheme="blue"
          ml={5}
          as="a"
          href="https://cloud.omnixent.com">
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
}
