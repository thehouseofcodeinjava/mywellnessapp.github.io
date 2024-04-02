import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Center,
  Image,
  Stack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import NavigationBar from '../NavigationBar'; // Import your NavigationBar component
import Footer from '../Footer';
import Login from '../Login';
import { Routes , Route ,Link  } from 'react-router-dom';
import BlogCarousel from '../BlogCarousel';
import PricingPlan from '../PricingPlan';
import About from './About';
import { Switch } from 'react-router-dom';
import mountain from '../images/mountain.png';
    
const Home = () => {
    return (
      
      <div className="landing-page" bgGradient="linear(to-b, #A1FFCE, #FAFFD1)">
        <NavigationBar /> {/* Add your NavigationBar component here */}
        
        <Routes>
       
          <Route path="/login" element={<Login />} />  {/* Login page at /login path */}
          <Route path="/about" element={<About />} />
        
        </Routes>
        
        <Flex
          as="section"
          bgImage={mountain} 
          bgSize="cover"
          bgPosition="center"
          w="full"
          h="80vh"
        >
     
         <Flex
          
          justifyContent="center"
          alignItems="center"
          p={250}
          mt={270}
          
        >
          <Center>
            <Heading as="h1" fontSize="5xl" color="#1A3E6F" fontWeight="extra bold" Align="center" >
               Calm Your Mind. Change Your Life.
            </Heading>
            </Center>
          </Flex>
        </Flex>
  
        <Flex as="section" bg="white" p={8} mt={40}>
          <Stack spacing={8}>
            {/* Trusted By Section */}
            <Flex justifyContent="center" >
              <Text fontSize="2xl" fontWeight="bold" justifyContent="center">
                Trusted by the best in the business
              </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center" mb={4}>
              <Grid templateColumns="repeat(6, 1fr)" gap={4}>
                <GridItem as="img" src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Flogo-nyt.webp&w=1920&q=75" alt="New York Times Logo" />
                <GridItem as="img" src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Flogo-wsj.webp&w=1920&q=75" alt="WSJ Logo" />
                <GridItem as="img" src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Flogo-fortune.webp&w=1920&q=75" alt="Fortune Logo" />
                <GridItem as="img" src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Flogo-today.webp&w=1920&q=75" alt="Today Show Logo" />
                <GridItem as="img" src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Flogo-cnn.webp&w=1920&q=75" alt="CNN Logo" />
                <GridItem as="img" src="https://www.calm.com/_next/image?url=%2F_n%2Fimages%2Fhomepage%2Flogo-usatoday.webp&w=1920&q=75" alt="USA Today Logo" />
              </Grid>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Text>Over 2 million 5-star reviews</Text>
            </Flex>
          </Stack>
        </Flex>
        {/* FAQ Section */}
  <Box as="section" bg="gray.100" p={8} mt={10} >
    <Heading as="h2" size="xl" textAlign="center" mb={6}>
      Frequently Asked Questions
    </Heading>
    <Accordion allowToggle>
      <AccordionItem>
      <h1>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={'xl'} fontWeight={'bold'}>
              Calm
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is Calm?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Calm is a mental fitness app designed to help you manage stress, sleep better and live a happier, healthier life.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is Cool Plan ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Calm is a mental fitness app designed to help you manage stress, sleep better and live a happier, healthier life.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What's included in a Calm subscription?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        A Calm subscription unlocks our full library of meditations, Sleep Stories, music, and other features. The subscription includes:
  
  Multiple original daily offerings from a range of teachers to give your day a dose of wisdom, gratitude and encouragement
  Hours of guided meditations covering sleep, anxiety, stress, gratitude, and much more
  Our entire library of more than 250+ Sleep Stories, with new stories added every week
  Exclusive music tracks for focus, relaxation, and sleep
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Where should I get started once I download the app?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        If you have come to Calm to learn relaxation techniques and improve aspects of your mental health, we recommend beginning with the 7 Days of Calm, our introductory program that offers the basics of meditation, and then move on to the 21 Days of Calm. With that foundation, you can explore our library of sessions and programs, which address themes such as anxiety, sleep, focus, and gratitude. Additionally, for moments of acute stress or anxiety, we offer in-the-moment calming exercises via our Panic SOS, Body Scan, and breathing exercise features.
  
  If you have come to Calm to improve your sleep, we have a collection of over 250 Sleep Stories to help you drift off to restful sleep, ranging from classic literature to nature essays, children's tales, scientific articles, and more. We update our Sleep Stories selection with new options to listen to every week. We also have a collection of soothing Sleep Music.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What devices support the Calm app?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Calm is available on iOS, Android, Web, in addition to Apple TV, Apple Watch, Amazon Alexa, Google Home, Google WearOS, Samsung Health, Samsung TV and Sonos.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What is meditation?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and release them without judgment. Studies show that a long-term meditation practice can actually help shift your nervous system out of fight or flight and into the relaxed parasympathetic mode producing a wide array of benefits*
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What is mindfulness?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Mindfulness is a practice that involves intentionally bringing one's attention and awareness to the present moment without judgment. It's about being fully present and engaged in the here and now, rather than dwelling on the past or worrying about the future. Mindfulness encourages a non-judgmental attitude towards one's thoughts, emotions and sensations, allowing them to arise and pass without any added stress. By cultivating mindfulness, people often develop a greater sense of clarity, calmness and overall wellbeing, as well as enhance their ability to respond skillfully to the challenges of life.
        </AccordionPanel>
      </AccordionItem>
      {/* Repeat for other FAQ items */}
      <Box height="20px" /> {/* Adjust the height as needed to create more or less space */}
      <AccordionItem>
      <h1>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={'xl'} fontWeight={'bold'}>
              Mindfulness
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is Calm?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Calm is a mental fitness app designed to help you manage stress, sleep better and live a happier, healthier life.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is Cool Plan ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Calm is a mental fitness app designed to help you manage stress, sleep better and live a happier, healthier life.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What's included in a Calm subscription?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        A Calm subscription unlocks our full library of meditations, Sleep Stories, music, and other features. The subscription includes:
  
  Multiple original daily offerings from a range of teachers to give your day a dose of wisdom, gratitude and encouragement
  Hours of guided meditations covering sleep, anxiety, stress, gratitude, and much more
  Our entire library of more than 250+ Sleep Stories, with new stories added every week
  Exclusive music tracks for focus, relaxation, and sleep
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            Where should I get started once I download the app?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        If you have come to Calm to learn relaxation techniques and improve aspects of your mental health, we recommend beginning with the 7 Days of Calm, our introductory program that offers the basics of meditation, and then move on to the 21 Days of Calm. With that foundation, you can explore our library of sessions and programs, which address themes such as anxiety, sleep, focus, and gratitude. Additionally, for moments of acute stress or anxiety, we offer in-the-moment calming exercises via our Panic SOS, Body Scan, and breathing exercise features.
  
  If you have come to Calm to improve your sleep, we have a collection of over 250 Sleep Stories to help you drift off to restful sleep, ranging from classic literature to nature essays, children's tales, scientific articles, and more. We update our Sleep Stories selection with new options to listen to every week. We also have a collection of soothing Sleep Music.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What devices support the Calm app?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Calm is available on iOS, Android, Web, in addition to Apple TV, Apple Watch, Amazon Alexa, Google Home, Google WearOS, Samsung Health, Samsung TV and Sonos.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What is meditation?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and release them without judgment. Studies show that a long-term meditation practice can actually help shift your nervous system out of fight or flight and into the relaxed parasympathetic mode producing a wide array of benefits*
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What is mindfulness?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Mindfulness is a practice that involves intentionally bringing one's attention and awareness to the present moment without judgment. It's about being fully present and engaged in the here and now, rather than dwelling on the past or worrying about the future. Mindfulness encourages a non-judgmental attitude towards one's thoughts, emotions and sensations, allowing them to arise and pass without any added stress. By cultivating mindfulness, people often develop a greater sense of clarity, calmness and overall wellbeing, as well as enhance their ability to respond skillfully to the challenges of life.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
      <h1>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontSize={'xl'} fontWeight={'bold'}>
              Stress
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h1>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is Stress?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Calm is a mental fitness app designed to help you manage stress, sleep better and live a happier, healthier life.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              What is Anti-Stress Plan ?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Calm is a mental fitness app designed to help you manage stress, sleep better and live a happier, healthier life.
        </AccordionPanel>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
            What's included in a Anti-Stress subscription?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        A Calm subscription unlocks our full library of meditations, Sleep Stories, music, and other features. The subscription includes:
  
  Multiple original daily offerings from a range of teachers to give your day a dose of wisdom, gratitude and encouragement
  Hours of guided meditations covering sleep, anxiety, stress, gratitude, and much more
  Our entire library of more than 250+ Sleep Stories, with new stories added every week
  Exclusive music tracks for focus, relaxation, and sleep
        </AccordionPanel>
        </AccordionItem>
    </Accordion>
  </Box>
  <Flex>
  <Box height="100px" /> {/* Adjust the height as needed to create more or less space */}
  
  </Flex>
  <BlogCarousel /> {/* Place the BlogCarousel component here */}
  <Box height="20px" /> {/* Adjust the height as needed to create more or less space */}
  <PricingPlan />
  <Box height="100px" /> {/* Adjust the height as needed to create more or less space */}
        <Footer />
        {/* Rest of your LandingPage content (optional) */}
      </div>
      
    );
  };
  
  
export default Home;
