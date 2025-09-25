
import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from './Icons';

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="bg-white text-pro-blue p-2 rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </div>
    <div className="font-bold text-xl text-white">
      PRO ESTATE
      <p className="text-xs font-normal text-gray-400 -mt-1">Your Trusted Property Partner</p>
    </div>
  </div>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-300 hover:text-pro-yellow transition-colors duration-200">
        {children}
    </a>
)

const Footer: React.FC = () => {
  return (
    <footer className="bg-pro-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400">
              Building trust and creating value through transparent, secure, and innovative property solutions.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#services">Property Sales</FooterLink></li>
              <li><FooterLink href="#services">Property Rental</FooterLink></li>
              <li><FooterLink href="#services">Investment Advisory</FooterLink></li>
              <li><FooterLink href="#">Digital Platform</FooterLink></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                    <PhoneIcon className="w-5 h-5 mt-1 text-pro-yellow flex-shrink-0" />
                    <span>+62 838 7606 9743</span>
                </li>
                 <li className="flex items-start space-x-3">
                    <EnvelopeIcon className="w-5 h-5 mt-1 text-pro-yellow flex-shrink-0" />
                    <span>ContactUs@ProEstate.id</span>
                </li>
                 <li className="flex items-start space-x-3">
                    <MapPinIcon className="w-5 h-5 mt-1 text-pro-yellow flex-shrink-0" />
                    <span>Sumenep, East Java & Depok, West Java</span>
                </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
             <ul className="space-y-2">
              <li><FooterLink href="#about">About Us</FooterLink></li>
              <li><FooterLink href="#services">Services</FooterLink></li>
              <li><FooterLink href="#team">Our Team</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pro Estate. All rights reserved. | Building Trust, Creating Value</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
