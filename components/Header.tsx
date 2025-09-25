
import React from 'react';
import { PhoneIcon, EnvelopeIcon } from './Icons';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="bg-pro-blue text-white p-2 rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <div className="font-bold text-xl text-pro-blue">
      PRO ESTATE
      <p className="text-xs font-normal text-gray-500 -mt-1">Your Trusted Property Partner</p>
    </div>
  </div>
);

const Header: React.FC = () => {
  const navItems = ['About', 'Services', 'Team', 'Contact'];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-pro-blue transition-colors duration-300 font-medium">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:1000" className="flex items-center space-x-2 text-gray-600 hover:text-pro-blue transition-colors duration-300">
            <PhoneIcon className="w-5 h-5" />
            <span className="font-medium">Call Us</span>
          </a>
          <a href="#contact" className="bg-pro-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300 flex items-center space-x-2">
            <EnvelopeIcon className="w-5 h-5" />
            <span>Contact</span>
          </a>
        </div>
        <div className="lg:hidden">
          <button className="text-pro-blue">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
