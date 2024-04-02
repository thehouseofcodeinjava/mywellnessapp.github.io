import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  Heading,
  useBreakpointValue,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// Sample data for the carousel
const blogPosts = [
  {
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/902870bf-8426-4f4b-9d67-3e1ba617e596/breast-cancer-anxiety?format=1500w',
    title: 'Unroll Your Mat and Unwind',
    description: 'The Benefits of Yoga for Stress Relief .',
  },
  {
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/0b090d14-03a5-42b3-b0a9-78234f4e0393/unemployment-depression?format=1500w',
    title: 'Embrace the Simple Things',
    description: 'Finding Joy in Everyday Moments',
  },
  {
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/aab9725e-e4f6-47d9-bdff-147f679ff73a/abundance-mindset?format=1500w',
    title: 'Sleep Your Way to Success',
    description: ' The Importance of Restful Sleep',
  },
  {
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/b13d12bb-6d30-4614-b5f1-82722abdb01f/signs-of-burnout?format=1500w',
    title: 'From Frazzled to Focused',
    description: 'Effective Stress-Busting Techniques .',
  },
  {
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/656f4e4dababbd7c042c4946/a6d6a5a9-9079-4710-bc73-bd8b7e5f0cb2/benefits-of-full-body-workouts-3x2.jpg?format=1500w',
    title: 'The Relaxation Revolution',
    description: 'How to Find Calm in a Chaotic World',
  }
  // ... more blog posts
];

const BlogCarousel = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const slidesToShow = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const slideWidth = 100 / slidesToShow;

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <Flex direction="column" align="center" mt="20">
      <Box width="full" overflow="hidden">
      <Heading as="h2" size="xl" textAlign="center" mb="8">
        Check Our Blogs
      </Heading>
        <Flex
          transform={`translateX(-${sliderValue * slideWidth}%)`}
          transition="transform 0.6s ease-in-out"
        >
          {blogPosts.map((post, index) => (
            <Box key={index} flex="none" width={`${slideWidth}%`} p="2">
              <Image src={post.imageUrl} alt={post.title} />
              <Text fontSize="lg" fontWeight="bold" mt="2">
                {post.title}
              </Text>
              <Text fontSize="md">{post.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
      <Slider
        aria-label="carousel-slider"
        value={sliderValue}
        min={0}
        max={blogPosts.length - slidesToShow}
        step={1}
        onChange={handleSliderChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      <IconButton
        aria-label="previous-slide"
        icon={<ChevronLeftIcon />}
        onClick={() => setSliderValue(sliderValue - 1)}
        isDisabled={sliderValue === 0}
      />
      <IconButton
        aria-label="next-slide"
        icon={<ChevronRightIcon />}
        onClick={() => setSliderValue(sliderValue + 1)}
        isDisabled={sliderValue === blogPosts.length - slidesToShow}
      />
    </Flex>
  );
};

// In your LandingPage.js, render the Carousel component below the FAQ section
export default BlogCarousel;
