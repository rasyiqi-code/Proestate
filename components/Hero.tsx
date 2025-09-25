import React from 'react';
import { GlobeAltIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-pro-dark-blue text-white z-10" style={{ backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale&blur=2)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-pro-dark-blue opacity-80"></div>
      <div className="relative container mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <span className="inline-block bg-white/10 border border-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Trusted & Secure Property Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Your Trusted Property Partner
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Pro Estate specializes in transparent, secure real estate transactions with cutting-edge digital solutions. We serve global clients with professional expertise and multilingual support.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button className="bg-pro-yellow text-pro-dark-blue font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:brightness-110 transition-transform transform hover:scale-105">
              <span>Explore Properties</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-white/10 border border-white/20 text-white font-bold py-3 px-6 rounded-lg hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-16 z-10">
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-2xl shadow-lg relative">
            <img src="https://picsum.photos/800/600" alt="Modern House" className="rounded-xl w-full" />
            <div className="absolute top-8 right-8 bg-pro-yellow text-pro-dark-blue px-4 py-3 rounded-lg text-center shadow-xl">
              <p className="font-bold text-lg">1000+</p>
              <p className="text-sm">Global Clients</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-pro-dark-blue/75 backdrop-blur-sm -bottom-16">
        <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
                <GlobeAltIcon className="w-8 h-8 text-pro-yellow mb-2" />
                <h3 className="font-semibold text-lg text-white">Global Reach</h3>
            </div>
            <div className="flex flex-col items-center">
                <ShieldCheckIcon className="w-8 h-8 text-pro-yellow mb-2" />
                <h3 className="font-semibold text-lg text-white">Secure Transactions</h3>
            </div>
            <div className="flex flex-col items-center">
                <DevicePhoneMobileIcon className="w-8 h-8 text-pro-yellow mb-2" />
                <h3 className="font-semibold text-lg text-white">Digital Platform</h3>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;