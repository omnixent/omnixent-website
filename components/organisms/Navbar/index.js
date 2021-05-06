import Link from 'next/link';
import { Box, Button, Collapse, Flex, IconButton, Image, Stack, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex p={5} w={1400} maxW={{base: "100vw", lg: "90vw"}} margin="auto" justifyContent="space-between" mt={5}>
        <Image src="/logo/omx-logo-extended.svg" width={250} />
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: !isOpen ? 'none' : 'inherit' }}
          onClick={isOpen ? onClose : onOpen}
        />
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
      <Collapse in={isOpen} animateOpacity>
        <Stack
          borderTop={1}
          borderStyle={'solid'}
          borderColor={'gray.100'}
          textAlign="center">
          {navbarLinks.map((link) => (
              <Link key={link.href} href={link.href} passHref>
                <Box
                  borderBottom={1}
                  borderStyle={'solid'}
                  borderColor={'gray.100'}
                  fontWeight={'bold'}
                  display="block"
                  py="1.5"
                  as="a">
                  {link.label}
                </Box>
              </Link>
            ))}
        </Stack>
      </Collapse>
    </>
  );
}
