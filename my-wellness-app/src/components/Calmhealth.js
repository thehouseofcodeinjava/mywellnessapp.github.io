
import React from 'react';
import { Box, Text, Button, Image } from '@chakra-ui/react';
import NB from '../NB';
import Footer from '../Footer';
import PricingPlan from '../PricingPlan';
import   EvidenceBasedOutcomes from '../EventOutcome';
import { Link } from 'react-router-dom';
const Calmhealth = () => {
  return (
    <div>
         <NB />
         
    <Box
      backgroundImage="url('https://mindworks.org/app/uploads/2023/06/6-techniques-for-stress-web.jpg.webp')"
      backgroundSize="cover"
      backgroundPosition="center"
      p={8}    
      borderRadius="md"
      textAlign="center"
      color="white"
    >
      <Box height="30px" />
      <Text fontSize="2xl" fontWeight="bold" mb={60}>
      <Box height="50px" />
        Because mind and body are connected
      </Text>
      <Link to="/contact">
      <Button colorScheme="blue" size="lg">
        Request Information
      </Button>
      </Link>
    </Box>
    <Box height="60px" />
    <PricingPlan />
    <Box height="60px" />
    <EvidenceBasedOutcomes />
    <Box height="60px" />
    <Footer />
    </div>
  );
};

export default Calmhealth;
