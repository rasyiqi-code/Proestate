
import React, { useRef, useState, useEffect } from 'react';
import { ShieldCheckIcon, LanguageIcon, DevicePhoneMobileIcon } from './Icons';

interface FeatureHighlightProps {
  iconName: string;
  title: string;
  description: string;
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ iconName, title, description }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        Shield: <ShieldCheckIcon className="w-6 h-6" />,
        Language: <LanguageIcon className="w-6 h-6" />,
        Device: <DevicePhoneMobileIcon className="w-6 h-6" />,
    };

    return (
      <div className="flex items-start space-x-4">
        <div className="bg-pro-yellow/10 text-pro-yellow rounded-full p-3 flex-shrink-0">
          {iconMap[iconName]}
        </div>
        <div>
          <h4 className="font-bold text-lg text-pro-dark-blue">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
};


const DigitalPlatform = ({ content }: { content: any }) => {
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
      id="digital-platform"
      ref={sectionRef}
      className={`bg-pro-light-gray py-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-gray-500 bg-gray-200/60 px-3 py-1 rounded-full">{content?.badge || 'Digital Innovation'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pro-dark-blue mt-2 mb-6">{content?.title || 'Advanced Digital Platform'}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {content?.subtitle || 'Our proprietary digital platform revolutionizes property transactions with advanced security features, real-time verification, and comprehensive reporting systems.'}
          </p>
          <div className="space-y-8">
            {content?.features?.map((feature: any, index: number) => (
                <FeatureHighlight 
                    key={index}
                    iconName={feature.iconName}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={content?.imageUrl || "https://picsum.photos/seed/tablet/800/600"} alt="Digital Platform on Tablet" className="rounded-xl shadow-2xl w-full" />
           <div className="absolute -bottom-6 -left-6 bg-pro-blue text-white px-6 py-4 rounded-lg text-center shadow-xl">
              <p className="font-medium text-sm">{content?.imageBadge?.line1 || 'Digital Transactions'}</p>
              <p className="text-2xl font-bold text-pro-yellow">{content?.imageBadge?.line2 || '100%'}</p>
              <p className="text-sm">{content?.imageBadge?.line3 || 'Secure & Verified'}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPlatform;
