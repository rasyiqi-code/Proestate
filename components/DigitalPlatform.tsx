
import React, { useRef, useState, useEffect } from 'react';
import { ShieldCheckIcon, LanguageIcon, DevicePhoneMobileIcon } from './Icons';

interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-pro-yellow/10 text-pro-yellow rounded-full p-3 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg text-pro-dark-blue">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


const DigitalPlatform: React.FC = () => {
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
      ref={sectionRef}
      className={`bg-pro-light-gray py-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-gray-500 bg-gray-200/60 px-3 py-1 rounded-full">Digital Innovation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pro-dark-blue mt-2 mb-6">Advanced Digital Platform</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our proprietary digital platform revolutionizes property transactions with advanced security features, real-time verification, and comprehensive reporting systems.
          </p>
          <div className="space-y-8">
            <FeatureHighlight 
              icon={<ShieldCheckIcon className="w-6 h-6" />}
              title="Property Verification"
              description="Advanced verification systems ensuring property authenticity and legal compliance."
            />
            <FeatureHighlight 
              icon={<LanguageIcon className="w-6 h-6" />}
              title="Multilingual Support"
              description="Expert assistance in Mandarin Chinese and English for international clients."
            />
            <FeatureHighlight 
              icon={<DevicePhoneMobileIcon className="w-6 h-6" />}
              title="Digital Platform"
              description="Cutting-edge mobile and web applications for seamless property transactions."
            />
          </div>
        </div>
        <div className="relative">
          <img src="https://picsum.photos/seed/tablet/800/600" alt="Digital Platform on Tablet" className="rounded-xl shadow-2xl w-full" />
           <div className="absolute -bottom-6 -left-6 bg-pro-blue text-white px-6 py-4 rounded-lg text-center shadow-xl">
              <p className="font-medium text-sm">Digital Transactions</p>
              <p className="text-2xl font-bold text-pro-yellow">100%</p>
              <p className="text-sm">Secure & Verified</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPlatform;
