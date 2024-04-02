import React from 'react';
import './Nb.css';
import Login from './Login'; // Import Link for routing
import { Link  } from 'react-router-dom';
import About from './components/About';

const NB = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Your navigation links */}
        <Link to="/">Home</Link> {/* Assuming your home page is at the root path */}
        <span>|</span>
        <Link to="/about">About</Link>
        <span>|</span>
        <Link to="/contact">Contact</Link>
        <span>|</span>
        <Link to="/calmhealth">Calm Health</Link>
        <span>|</span>
        <div className="navbar__right">
          <Link to="/login">Log In</Link>
          
          <button>Try Calm for Free</button>
        </div>
      </div>
      
    </nav>
  );
};

export default NB;
