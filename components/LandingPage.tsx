
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import DigitalPlatform from './DigitalPlatform';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
import { useSiteContent } from '../context/SiteContentContext';

const LandingPage: React.FC = () => {
    const { content, loading } = useSiteContent();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-2xl font-semibold text-pro-dark-blue">Loading Pro Estate...</p>
            </div>
        );
    }
    
    if (!content) {
         return (
            <div className="min-h-screen flex items-center justify-center text-center p-8">
                <div>
                    <h1 className="text-3xl font-bold text-pro-dark-blue mb-4">Welcome to Pro Estate</h1>
                    <p className="text-lg text-gray-600">
                        Content is being configured. Please log in to the dashboard to populate the website.
                    </p>
                </div>
            </div>
        );
    }


  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header content={content.header} global={content.global} />
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Services content={content.services} />
        <DigitalPlatform content={content.digitalPlatform} />
        <Team />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} global={content.global} />
    </div>
  );
};

export default LandingPage;
