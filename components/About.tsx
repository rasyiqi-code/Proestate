
import React, { useRef, useState, useEffect } from 'react';
import { BuildingOffice2Icon, UsersIcon, GlobeEuropeAfricaIcon, ClockIcon } from './Icons';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
    <div className="text-pro-blue mb-3">{icon}</div>
    <p className="text-3xl font-bold text-pro-dark-blue">{value}</p>
    <p className="text-gray-500">{label}</p>
  </div>
);

const About: React.FC = () => {
  const stats = [
    { icon: <BuildingOffice2Icon className="w-10 h-10" />, value: "500+", label: "Verified Properties" },
    { icon: <UsersIcon className="w-10 h-10" />, value: "1000+", label: "Happy Clients" },
    { icon: <GlobeEuropeAfricaIcon className="w-10 h-10" />, value: "Global", label: "International Reach" },
    { icon: <ClockIcon className="w-10 h-10" />, value: "5+", label: "Years Experience" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className={`bg-pro-light-gray pt-32 pb-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gray-500 bg-gray-200/60 px-3 py-1 rounded-full">About Pro Estate</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pro-dark-blue mt-2">Building Trust, Creating Value</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Pro Estate is a property company specializing in the sale, rental, and purchase of real estate, founded with the vision to build a transparent, secure, and reliable property transaction ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 text-gray-700 space-y-4">
            <h3 className="text-2xl font-semibold text-pro-dark-blue">Our Mission</h3>
            <p>
              We serve both individual and corporate clients, positioning ourselves as a strategic partner for every property need — from private residences to long-term investments. Our digital property trading application prioritizes security, convenience, and transparency.
            </p>
            <p>
              With a global outlook, we provide multilingual support to ensure smooth communication and negotiation processes for international stakeholders in the Indonesian property market.
            </p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
