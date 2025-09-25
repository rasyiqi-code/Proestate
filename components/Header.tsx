
import React from 'react';
import { PhoneIcon, EnvelopeIcon } from './Icons';
import { useAuth } from '../auth/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Logo = ({ global }: { global: any }) => (
  <div className="flex items-center space-x-2">
    <div className="bg-pro-blue text-white p-2 rounded-md">
     {global?.logoUrl ? <img src={global.logoUrl} alt="Logo" className="h-6 w-6"/> :
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      }
    </div>
    <div className="font-bold text-xl text-pro-blue">
      {global?.companyName || 'PRO ESTATE'}
      <p className="text-xs font-normal text-gray-500 -mt-1">{global?.tagline || 'Your Trusted Property Partner'}</p>
    </div>
  </div>
);

const Header = ({ content, global }: { content: any, global: any }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };
  
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/"><Logo global={global} /></Link>
        <nav className="hidden lg:flex items-center space-x-8">
          {content?.navLinks?.map((item: any) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-pro-blue transition-colors duration-300 font-medium">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a href={`tel:${content?.phone}`} className="flex items-center space-x-2 text-gray-600 hover:text-pro-blue transition-colors duration-300">
            <PhoneIcon className="w-5 h-5" />
            <span className="font-medium">Call Us</span>
          </a>
          
          {currentUser ? (
             <>
                <Link to="/dashboard" className="bg-pro-yellow text-pro-dark-blue px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                  Logout
                </button>
             </>
          ) : (
            <Link to="/login" className="bg-pro-blue text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-300 flex items-center space-x-2">
              <EnvelopeIcon className="w-5 h-5" />
              <span>Login</span>
            </Link>
          )}

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
