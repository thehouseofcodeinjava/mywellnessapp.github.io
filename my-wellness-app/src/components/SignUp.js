import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Select,
  Image,
  Center,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const SignUp = () => {
  // State variables for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fluentEnglish, setFluentEnglish] = useState('Yes');
  const [newsletter, setNewsletter] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       
      });

      if (response.ok) {
        console.log('User created successfully!');
        // Redirect to a success page or perform other actions
      } else {
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <Box
   bgGradient="linear(to-b, #A1FFCE, #FAFFD1)">
      <Flex align="center" justify="center" minHeight="100vh">
      
 <Box p={8} borderWidth={1} borderRadius="md" boxShadow="md" width="400px" marginTop="2%" marginBottom="2%" backgroundImage="url('https://img.freepik.com/free-vector/yellow-orange-gradient-abstract-background_53876-62624.jpg?w=740&t=st=1711899366~exp=1711899966~hmac=32cdda53c46aa6fbbfe4e0825240f5461b1ec92dead0592a41a0f1a197b867e5')">
        <Heading size="lg" mb={4}>Sign up</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>Full name</FormLabel>
            <Input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}  placeholder="John Doe"/>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="johndoe@gmail.com"/>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="*****"/>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Fluent in English?</FormLabel>
            <Select value={fluentEnglish} onChange={(e) => setFluentEnglish(e.target.value)}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
          </FormControl>
          <Checkbox mb={4} isChecked={newsletter} onChange={() => setNewsletter(!newsletter)}>
            Receive newsletters
          </Checkbox>
          <Checkbox mb={4} isChecked={termsAgreed} onChange={() => setTermsAgreed(!termsAgreed)}>
            I agree to the Terms & Conditions and acknowledge the Privacy Policy
          </Checkbox>
          <Center>
          <Button type="submit" colorScheme="blue" isFullWidth>
            Create an account
          </Button></Center>
        </form>
        <Text mt={4} textAlign="center">
          Already have an account? <a href="login">Log in</a>.
        </Text>
      </Box>
     
      </Flex>
      </Box>
    </div>
  );
};

export default SignUp;
