
import { useState } from 'react';

interface CertificationsSectionProps {
  isDarkMode: boolean;
}

const CertificationsSection = ({ isDarkMode }: CertificationsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certifications = [
    {
      title: 'Microsoft Power BI Certification',
      issuer: 'Microsoft',
      date: '2023',
      icon: '📊',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      date: '2023',
      icon: '🤖',
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Data Visualization with Python',
      issuer: 'IBM',
      date: '2022',
      icon: '🐍',
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Advanced SQL for Data Science',
      issuer: 'Google',
      date: '2022',
      icon: '🗄️',
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Supply Chain Management',
      issuer: 'MIT',
      date: '2021',
      icon: '📦',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      title: 'Neural Networks & Deep Learning',
      issuer: 'deeplearning.ai',
      date: '2021',
      icon: '🧠',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  return (
    <section className={`py-20 ${isDarkMode ? 'bg-deep-blue' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className={`${isDarkMode ? 'bg-dark-gray' : 'bg-white'} rounded-xl p-8 shadow-lg text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/20`}>
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-electric-blue transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-electric-green font-semibold mb-2">{cert.issuer}</p>
                    <p className="text-sm opacity-70">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-electric-blue/20 hover:bg-electric-blue/40 rounded-full p-3 transition-colors"
              disabled={activeIndex === 0}
            >
              ←
            </button>
            <button 
              onClick={() => setActiveIndex(Math.min(certifications.length - 1, activeIndex + 1))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-electric-blue/20 hover:bg-electric-blue/40 rounded-full p-3 transition-colors"
              disabled={activeIndex === certifications.length - 1}
            >
              →
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {certifications.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-electric-blue' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Grid View for larger screens */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className={`${isDarkMode ? 'bg-dark-gray' : 'bg-white'} rounded-xl p-6 shadow-lg text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-electric-blue/20 animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-electric-blue transition-colors">
                  {cert.title}
                </h3>
                <p className="text-electric-green font-semibold mb-1 text-sm">{cert.issuer}</p>
                <p className="text-xs opacity-70">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
