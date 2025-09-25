
import React, { useRef, useState, useEffect } from 'react';
import { EnvelopeIcon, UserCircleIcon, AcademicCapIcon, UserGroupIcon, BuildingOfficeIcon } from './Icons';

interface TeamMember {
  icon: React.ReactNode;
  name: string;
  title: string;
  company: string;
  description: string;
  email: string;
}

const executiveTeam: TeamMember[] = [
  { icon: <BuildingOfficeIcon className="w-8 h-8" />, name: 'Zaen Afton', title: 'Founder & Marketing Lead', company: 'PT. Retas Lintas Batas', description: 'Visionary entrepreneur with expertise in digital marketing and web development solutions.', email: 'zaen@proestate.id' },
  { icon: <UserCircleIcon className="w-8 h-8" />, name: 'Achmad Rifkha Yusuf', title: 'Founder', company: 'A.R.Y Property', description: 'Property industry leader with legal expertise and Sufi literature author.', email: 'achmad@proestate.id' },
  { icon: <UserCircleIcon className="w-8 h-8" />, name: 'Reni Munggarani', title: 'Chief Executive Officer', company: 'Pro Estate', description: 'Versatile CEO with expertise in business leadership, translation, and literature.', email: 'reni@proestate.id' },
  { icon: <AcademicCapIcon className="w-8 h-8" />, name: 'Syabrina Rahma Ayu', title: 'Director', company: 'Pro Estate', description: 'Dynamic pharmacy student and organizational leader with entrepreneurial vision.', email: 'syabrina@proestate.id' },
];

const managementTeam: TeamMember[] = [
  { icon: <UserGroupIcon className="w-8 h-8" />, name: 'Nana Nurhana', title: 'General Manager', company: 'Pro Estate', description: 'Operations excellence and strategic management expertise.', email: 'nana@proestate.id' }
];

const TeamMemberCard: React.FC<TeamMember> = ({ icon, name, title, company, description, email }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-pro-blue text-white w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-lg text-pro-dark-blue">{name}</h4>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-sm text-pro-blue font-medium">{company}</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
    <a href={`mailto:${email}`} className="flex items-center space-x-2 text-pro-blue hover:underline text-sm font-medium">
      <EnvelopeIcon className="w-4 h-4" />
      <span>Contact</span>
    </a>
  </div>
);

const Team: React.FC = () => {
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
      id="team"
      ref={sectionRef}
      className={`bg-white py-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gray-500 bg-gray-200/60 px-3 py-1 rounded-full">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-pro-dark-blue mt-2">Expert Leadership Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders and experienced professionals driving Pro Estate's mission to revolutionize the property industry with innovation and integrity.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-lg grid md:grid-cols-2 gap-8 items-center mb-16">
          <img src="https://picsum.photos/seed/team/600/400" alt="Team meeting" className="rounded-xl w-full h-full object-cover" />
          <div>
            <h3 className="text-2xl font-bold text-pro-dark-blue mb-4">Collaborative Excellence</h3>
            <p className="text-gray-600 mb-6">
              Our diverse team brings together expertise in property law, digital technology, international business, and customer service to deliver exceptional results for our clients.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-100 text-pro-blue p-4 rounded-lg text-center flex-1">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm">Years Combined Experience</p>
              </div>
              <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center flex-1">
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm">Languages Supported</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center text-pro-dark-blue mb-8">Executive Leadership</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {executiveTeam.map((member, index) => <TeamMemberCard key={index} {...member} />)}
          </div>

          <h3 className="text-2xl font-semibold text-center text-pro-dark-blue mb-8">Management Team</h3>
          <div className="max-w-md mx-auto">
             {managementTeam.map((member, index) => <TeamMemberCard key={index} {...member} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
