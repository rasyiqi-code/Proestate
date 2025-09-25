import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import DigitalPlatform from './DigitalPlatform';
import Team from './Team';
import Contact from './Contact';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <DigitalPlatform />
      <Team />
      <Contact />
    </>
  );
};

export default LandingPage;