import React from 'react';
import { Box, Heading, Text, Stack, Image , Center,Flex} from '@chakra-ui/react';
import Footer from '../Footer';
import NavigationBar from '../NavigationBar';
import   EvidenceBasedOutcomes from '../EventOutcome';
import BlogCarousel from '../BlogCarousel';
const About = () => {
  return (
    <div>
        <NavigationBar />
        <Box height="11px" /> 
      <Box p={4} bg="yellow.300" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Stack spacing={18} direction={['column', 'row', 'row']}>
          <Box flex={1}>
            <Stack spacing={17} alignItems="center">
            <Box height="10px" /> 
              <Heading as="h1" size="lg">
                About Us
              </Heading>
              <Text fontSize="xl" style={{ textAlign: 'justify' }}>
                Our mission is to provide everyone with access to lifelong mental health support.
              </Text>
            
            </Stack>
          </Box>
          <Box flex={0.5}>
            <Image
              height="300px" // Updated property (original was boxSize)
              objectFit="cover"
              src="https://images.ctfassets.net/v3n26e09qg2r/6JXKo2cWVVNRTdOynAc6Dq/1f5d6b98c35a2a8760c3bb050ad273d9/About-Us-Hero-Image-594x500px_2x.png?fm=webp&w=1200&q=75"
              alt="Smiley face illustration"
            />
          </Box>
        </Stack>
      </Box>
      <Box height="30px" /> {/* Adjust the height as needed to create more or less space */}
      <Box bgGradient="linear-gradient(to bottom, #E0EAFC, #EFF6FC)">
        <Stack spacing={10} direction={['column', 'row', 'row']}>
          <Box flex={3}>
            <Stack spacing={4} alignItems="center">
              <Heading as="h2" size="lg">
                Who we are
              </Heading>
              <Text fontSize="xl" style={{ textAlign: 'justify' }}>
                Think of Headspace as your lifelong guide to better mental health.Through our flagship Headspace app, we provide mindfulness tools for everyday life, including meditations, sleepcasts, mindful movement and focus exercises. We're here for you whenever you need us, find joy in every day.
              </Text>
            </Stack>
          </Box>

          <Box flex={3}>
            <Stack spacing={4} alignItems="center">
              <Heading as="h2" size="lg">
                What we do
              </Heading>
              <Text fontSize="xl" style={{ textAlign: 'justify' }}>
                Our four values inform our decisions and how we operate day-to-day: put members first;Through our flagship Headspace app, we provide mindfulness tools for everyday life, including meditations, sleepcasts, mindful movement and focus exercises. bring a beginner's mind; seek truth, speak truth; embrace ownership.
              </Text>
            </Stack>
          </Box>
          <Box flex={3}>
            <Stack spacing={4} alignItems="center">
              <Heading as="h2" size="lg">
               Our Vision
              </Heading>
              <Text fontSize="xl" style={{ textAlign: 'justify' }}>
                 We're here for you whenever you need us, wherever you are, helping you get through tough times and find joy in every day.Through our flagship Headspace app, we provide mindfulness tools for everyday life, including meditations, sleepcasts, mindful movement and focus exercises.
              </Text>
            </Stack>
          </Box>
        </Stack>
        
      </Box>
      <Box height="09x" /> 
      <Center h="110vh" w="100%">
      <Flex maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image height="300px" src="https://images.ctfassets.net/v3n26e09qg2r/5bY1VhupBiTA8CniZXceXh/012e67e281b20a8d7accbfb7d0cf7cf0/visual-dotcom_category_page_hero_desktop-meditation-202000806-kh.svg?fm=&w=640&q=75" alt="" />
        <Box p={6}>
          <Text fontSize="2xl" fontWeight="bold">
            Headspace
          </Text>
          <Text mt={4}>
            We make mental health support accessible to everyone, no matter their background or experience. Through our flagship Headspace app,
            we provide mindfulness tools for everyday life, including meditations, sleepcasts, mindful movement and focus exercises.
            Our enterprise offerings combine this experience with a human-centered model of care,
            with coaching, therapy, psychiatry and EAP services under one roof.
            Our team of experts ranges from mental health clinicians.
          </Text>
        </Box>
      </Flex>
    </Center>
    <EvidenceBasedOutcomes />
    <Box height="30px" />
    <BlogCarousel />
    <Box height="30px" />
        <Footer/>
    </div>
  );
};

export default About;
