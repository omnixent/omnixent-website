import { Box, Flex, Image, Text } from '@chakra-ui/react';

export default function FeatureBubble(props) {
  return (
    <>
      <style>{`
        @keyframes float {
          0% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translateY(0px);
          }
          50% {
            box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
            transform: translateY(-20px);
          }
          100% {
            box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
            transform: translateY(0px);
          }
        }

        .floating-bubble {
          transform: translateY(0px);
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <Flex
        bg="whiteAlpha.800"
        borderRadius="full"
        p={5}
        position="absolute"
        zIndex={1}
        className="floating-bubble"
        {...props.styles}
        style={{
          animationDelay: props.styles.animationDelay
        }}
      >
        <Image src={props.image} width={50} />
        <Box pl={5} pr={5}>
          <Text fontWeight="bold" color="gray.900" fontSize="xl">
            {props.name}
          </Text>
          <Text color="gray.700" fontSize="medium">
            {props.description}
          </Text>
        </Box>
      </Flex>
    </>
  );
}
