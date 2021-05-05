import Image from 'next/image';
import { Text, Box, Flex, Grid } from '@chakra-ui/react';
import TargetBubble from '../../molecules/TargetBubble';

const targets = [
  {
    title: 'Improve your site SEO',
    description:
      'Increase your search engine optimization score by understanding what people search on Google, Bing, YouTube, Amazon, and many other services.',
    icon: 'startup',
  },
  {
    title: 'Marketing',
    description:
      'Keep an eye on people’s interests and unleash the best instant-marketing campaigns you’ve ever created.',
    icon: 'megaphone',
  },
  {
    title: 'Journalists',
    description:
      'Omnixent helps you understand what people are interested in by cross-searching popular queries on different search engines such as Google and Bing.',
    icon: 'broadcaster',
  },
  {
    title: 'Content creators',
    description:
      'It doesn’t matter if you’re a YouTuber, Twitch streamer, blogger, or journalist. You need to know what people care about before creating your content targeting your audience.',
    icon: 'selfie',
  },
];

export default function HomepageTargetHero() {
  return (
    <>
      <Text fontWeight="bold" color="gray.800" fontSize="5xl" textAlign="center" mt={100}>
        Target your audience
      </Text>
      <Text color="gray.500" textAlign="center" fontSize="3xl">
        Connect with your audience, by answering their questions.
      </Text>
      <Flex width={1400} maxW="90vw" justifyContent="center" alignItems="center" margin="auto">
        <Grid gridTemplateColumns={['none', 'repeat(2, 1fr)']} gap={5} mt={[20, 150]} mb={[10, 150]}>
          {targets.map((target) => (
            <TargetBubble
              key={target.title}
              target={target.title}
              description={target.description}
              icon={target.icon}
            />
          ))}
        </Grid>
      </Flex>
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
