import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  Heading,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900'); // Adjust based on your color mode

  return (
    <Box bg={bgColor} pt={10} pb={4} pos="relative" bottom="0" w="100%" >
      <Flex justifyContent="space-between" flexWrap="wrap" mx="auto" maxW="7xl" px={4} flexDirection= "row">
        {/* Company Section */}
        <GridItem as={Box} w="auto" md={{ span: 6, offset:3}} mb={6}>
          <Heading size="md" mb={2}>
            Company
          </Heading>
          <Stack spacing={2}>
            <Link href="#">About Us</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Press</Link>
            <Link href="#">Blog</Link>
          </Stack>
        </GridItem>

        {/* Offers Section */}
        <GridItem as={Box} w="auto" md={{ span: 6, offset: 3}} mb={6}>
          <Heading size="md" mb={2}>
            Offers
          </Heading>
          <Stack spacing={2}>
            <Link href="#">Subscription</Link>
            <Link href="#"> Plans</Link>
            <Link href="#">Discounts</Link>
          </Stack>
        </GridItem>

        {/* Help Section */}
        <GridItem as={Box} w="auto" md={{ span: 6, offset: 3}} mb={6}>
          <Heading size="md" mb={2}>
            Help
          </Heading>
          <Stack spacing={2}>
            <Link href="#">FAQ</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy Policy</Link>
          </Stack>
        </GridItem>

        {/* Stay Connected Section */}
        <GridItem as={Box} w="auto" md={{ span: 6, offset: 3 }} mb={6}>
          <Heading size="md" mb={2}>
            Stay Connected
          </Heading>
          <Stack spacing={2}>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
          </Stack>
        </GridItem>
      </Flex>

      {/* Copyright Section */}
      <Flex
        borderTop="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')} // Adjust based on your color mode
        justifyContent="center"
        pt={4}
        pb={2}
      >
        <Text fontSize="sm">
          © 2024 Company Name. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
