import React from 'react';
import './NavigationBar.css';
import Login from './Login'; // Import Link for routing
import { Link } from 'react-router-dom';
import About from './components/About';
import Calmhealth from './components/Calmhealth';
import { Button } from '@chakra-ui/react';



const NavigationBar = () => {
  return (
    <nav className="navbar" >
      <div className="navbar__container">
        {/* Your navigation links */}
        <Link to="/" className="bold-link">Home</Link> {/* Assuming your home page is at the root path */}
        <span>|</span>
        <Link to="/about" className="bold-link">About</Link>
        <span>|</span>
        <Link to="/contact" className="bold-link">Contact</Link>
        <span>|</span>
        <Link to="/calmhealth" className="bold-link">Calm Health</Link>
        <span>|</span>
        <div className="navbar__right"  id="navbar_r">
          <Link to="/login">Log In</Link>
          
          <Link to="/calmhealth" className="bold-link">
            <Button>Try Calm</Button>
          </Link>
        </div>
      </div>
      
    </nav>
  );
};

export default NavigationBar;
