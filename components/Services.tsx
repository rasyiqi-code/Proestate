
import React, { useRef, useState, useEffect } from 'react';
import { HomeModernIcon, BuildingLibraryIcon, ChartPieIcon } from './Icons';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const servicesData: Service[] = [
  {
    icon: <HomeModernIcon className="w-8 h-8" />,
    title: 'Property Sales',
    description: 'Expert assistance in selling residential and commercial properties with maximum value optimization.',
    points: ['Market Analysis', 'Professional Photography', 'Legal Documentation', 'Negotiation Support'],
  },
  {
    icon: <BuildingLibraryIcon className="w-8 h-8" />,
    title: 'Property Rental',
    description: 'Comprehensive rental services for property owners and tenants with secure agreements.',
    points: ['Tenant Screening', 'Rental Management', 'Maintenance Coordination', 'Contract Management'],
  },
  {
    icon: <ChartPieIcon className="w-8 h-8" />,
    title: 'Investment Advisory',
    description: 'Strategic guidance for property investment decisions and portfolio development.',
    points: ['Market Research', 'ROI Analysis', 'Investment Strategy', 'Portfolio Management'],
  },
];

const ServiceCard: React.FC<Service> = ({ icon, title, description, points }) => (
  <div className="bg-white p-8 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="bg-pro-blue text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-pro-dark-blue mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-center space-x-3 text-gray-700">
          <span className="bg-pro-yellow w-2 h-2 rounded-full"></span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
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
      id="services"
      ref={sectionRef} 
      className={`bg-white py-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gray-500 bg-gray-200/60 px-3 py-1 rounded-full">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pro-dark-blue mt-2">Comprehensive Property Solutions</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From property sales and rentals to investment advisory, we provide end-to-end real estate services backed by cutting-edge technology and professional expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
