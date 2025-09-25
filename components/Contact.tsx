
import React, { useRef, useState, useEffect } from 'react';
import { PhoneIcon, EnvelopeIcon, GlobeAltIcon, MapPinIcon } from './Icons';

interface ContactInfo {
  iconName: string;
  title: string;
  details: string[];
  note?: string;
}

const ContactCard: React.FC<ContactInfo> = ({ iconName, title, details, note }) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        Phone: <PhoneIcon className="w-8 h-8" />,
        Envelope: <EnvelopeIcon className="w-8 h-8" />,
        Globe: <GlobeAltIcon className="w-8 h-8" />,
        MapPin: <MapPinIcon className="w-8 h-8" />,
    };

    return (
      <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm text-center flex flex-col items-center">
        <div className="bg-pro-blue/10 text-pro-blue w-16 h-16 rounded-lg flex items-center justify-center mb-4">
          {iconMap[iconName]}
        </div>
        <h4 className="font-bold text-lg text-pro-dark-blue mb-2">{title}</h4>
        {details.map((detail, i) => <p key={i} className="text-gray-600">{detail}</p>)}
        {note && <p className="text-xs text-gray-400 mt-2">{note}</p>}
      </div>
    );
};

const Contact = ({ content }: { content: any }) => {
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
      id="contact" 
      ref={sectionRef}
      className={`bg-pro-light-gray py-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center">
          <span className="text-sm font-semibold text-gray-500 bg-gray-200/60 px-3 py-1 rounded-full">{content?.badge || 'Contact Us'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pro-dark-blue mt-2">{content?.title || 'Get in Touch'}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {content?.subtitle || "Ready to start your property journey? Contact our expert team for personalized assistance with your real estate needs. We're here to help you every step of the way."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {content?.contactCards?.map((info: any, i: number) => <ContactCard key={i} {...info} />)}
        </div>
         <div className="grid sm:grid-cols-2 gap-6 my-12">
            {content?.officeCards?.map((info: any, i: number) => <ContactCard key={i} {...info} />)}
        </div>

        <div className="bg-white text-center p-10 rounded-2xl border border-gray-200/80 shadow-lg mt-16">
          <h3 className="text-2xl font-bold text-pro-dark-blue">{content?.cta?.title || 'Ready to Start Your Property Journey?'}</h3>
          <p className="text-gray-600 mt-2 mb-6 max-w-2xl mx-auto">
            {content?.cta?.subtitle || 'Join thousands of satisfied clients who trust Pro Estate for their property needs. Contact us today for a free consultation and discover how we can help you achieve your real estate goals.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pro-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
              {content?.cta?.button1Text || 'Start WhatsApp Chat'}
            </button>
            <button className="bg-pro-yellow text-pro-dark-blue font-semibold py-3 px-6 rounded-lg hover:brightness-110 transition-colors duration-300 flex items-center justify-center space-x-2">
              <EnvelopeIcon className="w-5 h-5" />
              <span>{content?.cta?.button2Text || 'Send Email'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
