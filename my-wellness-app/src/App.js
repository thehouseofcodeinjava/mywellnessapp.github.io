import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import About from './components/About';
import Contact from './components/Contact'
import Calmhealth from './components/Calmhealth';
import Login from './Login';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calmhealth" element={<Calmhealth />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
