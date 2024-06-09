import React from 'react';
import './Hero.css';

const Hero = ({ children }) => {
  return (
        <div className='hero-content'>
            <h1 className='heading-primary'>
                Find your <span> restaurant </span> with us
            </h1>
            <p className='heading-secondary'>
                Find online or call <span className='special-word'>(424)123-4567</span>
            </p>
            {children} 
        </div>
  )
}

export default Hero
