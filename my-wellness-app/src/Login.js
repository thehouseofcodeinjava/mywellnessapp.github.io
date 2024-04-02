import React, { useState } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import NB from './NB';
import Footer from './Footer';
import { Link  } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., send data to backend API)
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
    <Flex width="100%" height="90vh" alignItems="center" justifyContent="center" pos="relative"> 
    <NB/>
      <Box bg="#f9faf7" p={8} rounded="lg" shadow="md">
        <Heading as="h2" size="xl" textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mt={4}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>
          <Button mt={4} type="submit" colorScheme="blue">
            Login
          </Button>
        </form>
        <Text mt={4} textAlign="center">
          Don't have an account? <Link to="/SignUp">Sign Up</Link>
        </Text>
      </Box>
     
    </Flex>
     <Footer />
     </div>
  );
};

export default Login;
