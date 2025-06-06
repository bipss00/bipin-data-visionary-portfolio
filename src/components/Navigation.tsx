
import { useState, useEffect } from 'react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({ isDarkMode, toggleDarkMode }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? `backdrop-blur-md ${isDarkMode ? 'bg-deep-blue/80' : 'bg-white/80'} shadow-lg` 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-electric-blue transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-electric-blue transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className="hover:text-electric-blue transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-electric-blue transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
