import React from 'react';
import './Hero.css'; // Importing the CSS file for the Hero component

const Hero = ({ children }) => {
  return (
    <div className='hero-content'>

      {/* Main heading for the Hero section */}
      <h1 className='heading-primary'>
        Find your<span> Dine </span> with us
      </h1>

      {/* Subheading for the Hero section */}
      <p className='heading-secondary'>
        Find online or call <span className='special-word'>(424)123-4567</span>
      </p>
      
      {children}   {/* Rendering any children passed to the Hero component */}
    </div>
  );
}

export default Hero;
