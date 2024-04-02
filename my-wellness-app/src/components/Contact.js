// src/components/ContactUsPage.js

import React from 'react';
import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  Badge,
  Button,
} from '@chakra-ui/react';
import { MdStar } from 'react-icons/md';
import NB from '../NB';
import Footer from '../Footer';

const Contact = () => {
  return (
    <div>
    <Center h="110vh" >
      <Box w="80%" p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg"bgGradient="linear(to-b, #A1FFCE, #FAFFD1)">
        {/* Navigation Bar */}
        <NB />

        {/* Support Section */}
        <Box textAlign="center" mb={8}>
          <Image src="https://th.bing.com/th/id/OIP.xEyfP1uXgKhFTtH7suEGBgHaFE?rs=1&pid=ImgDetMain" alt="Support Illustration" height="70px" />
          <Text fontSize="xl" fontWeight="bold" mt={4}>
            Support
          </Text>
          <Text>Get in touch, we'd love to hear from you.</Text>
          <Flex mt={4}>
            <Button variant="outline" mr={2} colorScheme="blue">
              Shopper FAQs
            </Button>
            <Button variant="outline" colorScheme="blue">Merchant FAQs</Button>
          </Flex>
        </Box>

        {/* Helpful Shopper Support Articles */}
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Helpful Shopper Support Articles
          </Text>
          <Box mt={4}>
            <Text>
              <Badge colorScheme="yellow" mr={2}>
                <MdStar />
              </Badge>
              Why was I declined for an order?
            </Text>
            <Text fontSize="sm" color="gray.600">
              If you are having trouble getting approved, please review the
              common decline reasons below and some recommendations that may
              help.
            </Text>
            <Button variant="link" mt={2}>
              Read More
            </Button>
          </Box>
          <Box height="30px" />
          <Box mt={4}>
            <Text>
              <Badge colorScheme="yellow" mr={2}>
                <MdStar />
              </Badge>
              I need to cancel my order
            </Text>
            <Text fontSize="sm" color="gray.600">
              The best way to request cancellation is to reach out to the
              merchant directly. Each merchant has their own cancellation
              policies.
            </Text>
            <Button variant="link" mt={2}>
              Read More
            </Button>
          </Box>
          <Box height="30px" />
        </Box>
        
      </Box>
  
    </Center>
       <Footer />
       </div>
  );
};

export default Contact;
