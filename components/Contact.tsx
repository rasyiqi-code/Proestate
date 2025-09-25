
import React, { useRef, useState, useEffect } from 'react';
import { PhoneIcon, EnvelopeIcon, GlobeAltIcon, MapPinIcon } from './Icons';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  note?: string;
}

const contactData: ContactInfo[] = [
  {
    icon: <PhoneIcon className="w-8 h-8" />,
    title: 'Phone Support',
    details: ['+62 838 7606 9743', '+62 852 1136 2207'],
    note: 'Available for WhatsApp and calls'
  },
  {
    icon: <EnvelopeIcon className="w-8 h-8" />,
    title: 'Email Support',
    details: ['ContactUs@ProEstate.id'],
    note: '24/7 email support'
  },
  {
    icon: <GlobeAltIcon className="w-8 h-8" />,
    title: 'Website',
    details: ['www.ProEstate.id'],
    note: 'Online property portal'
  }
];

const officeData: ContactInfo[] = [
    {
        icon: <MapPinIcon className="w-8 h-8" />,
        title: 'Head Office',
        details: ['RT 011 / RW 005, Pandian Hamlet, Paberasan Village, Kota Sumenep District, Sumenep Regency, East Java, Indonesia']
    },
    {
        icon: <MapPinIcon className="w-8 h-8" />,
        title: 'Branch Office',
        details: ['Jl. Juragan Sinda III No. 17, RT 006 / RW 001, Kukusan, Beji, Depok 16425, West Java, Indonesia']
    }
];

const ContactCard: React.FC<ContactInfo> = ({ icon, title, details, note }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm text-center flex flex-col items-center">
    <div className="bg-pro-blue/10 text-pro-blue w-16 h-16 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-pro-dark-blue mb-2">{title}</h4>
    {details.map((detail, i) => <p key={i} className="text-gray-600">{detail}</p>)}
    {note && <p className="text-xs text-gray-400 mt-2">{note}</p>}
  </div>
);


const Contact: React.FC = () => {
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
          <span className="text-sm font-semibold text-gray-500 bg-gray-200/60 px-3 py-1 rounded-full">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pro-dark-blue mt-2">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your property journey? Contact our expert team for personalized assistance with your real estate needs. We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {contactData.map((info, i) => <ContactCard key={i} {...info} />)}
        </div>
         <div className="grid sm:grid-cols-2 gap-6 my-12">
            {officeData.map((info, i) => <ContactCard key={i} {...info} />)}
        </div>

        <div className="bg-white text-center p-10 rounded-2xl border border-gray-200/80 shadow-lg mt-16">
          <h3 className="text-2xl font-bold text-pro-dark-blue">Ready to Start Your Property Journey?</h3>
          <p className="text-gray-600 mt-2 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Pro Estate for their property needs. Contact us today for a free consultation and discover how we can help you achieve your real estate goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pro-blue text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
              Start WhatsApp Chat
            </button>
            <button className="bg-pro-yellow text-pro-dark-blue font-semibold py-3 px-6 rounded-lg hover:brightness-110 transition-colors duration-300 flex items-center justify-center space-x-2">
              <EnvelopeIcon className="w-5 h-5" />
              <span>Send Email</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
