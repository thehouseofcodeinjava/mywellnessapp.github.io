import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  VStack,
  Image,
  HStack,
  Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const PricingPlan = () => {
  const bgColor = "#ededeb";
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <VStack
      w="full"
      h="100vh"
      p={10}
      spacing={5}
      align="center"
      justify="center"
      bgGradient="linear(to-b, #A1FFCE, #FAFFD1)"
    >
      <Heading as="h1" size="2xl" textAlign="center">
        Make it your year with Headspace
      </Heading>
      <Text fontSize="md">
        Free for 14 days, then ₹1499/year or ₹124.92 per month, billed annually
      </Text>
      <Text fontSize="sm">
        After your free trial, the annual subscription is ₹1499 each year.*
      </Text>
      <Text fontSize="sm">
        Are you a post-secondary or university student? Save 50%, with valid student verification, for our Student Plan
      </Text>
      <Link to="/calmhealth">
      <Button colorScheme="green" size="lg">
        Try for free
      </Button>
      </Link>
      <HStack spacing={4}>
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?fm=webp&w=1080&q=75"
          alt="St. Vincent's Playlist"
        />
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://images.ctfassets.net/v3n26e09qg2r/3Ciub8Qc1UhiOVboAfmazR/0a0737be4b3eabc7d9c9c0d00e9f94f7/Hero_Right_Image_Default-2022.png?fm=webp&w=3840&q=75"
          alt="Managing Anxiety"
        />
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?fm=webp&w=1080&q=75"
          alt="Rainday Antiques"
        />
      </HStack>
    </VStack>
  );
};

export default PricingPlan;
