
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DigitalPlatform from './components/DigitalPlatform';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <DigitalPlatform />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
