
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection = ({ isDarkMode }: HeroSectionProps) => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transforming Data into Actionable Intelligence';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  const downloadResume = () => {
    console.log('Resume download initiated');
  };

  const downloadPortfolio = () => {
    console.log('Portfolio PDF download initiated');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-electric-green/10 animate-gradient-x"></div>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${isDarkMode ? 'bg-electric-blue/30' : 'bg-electric-blue/50'} rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="relative mx-auto w-48 h-48 mb-8 animate-scale-in">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-electric-blue to-electric-green p-1 animate-pulse-glow">
              <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-deep-blue' : 'bg-white'} flex items-center justify-center text-6xl`}>
                👨‍💻
              </div>
            </div>
          </div>

          {/* Animated Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-electric-blue via-electric-green to-electric-yellow bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="animate-blink">|</span>
          </h1>

          {/* Bio with Bullet Points */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
            <p className="text-xl mb-4 opacity-90">
              Data Analyst & AI Specialist passionate about turning raw data into business value
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {['35+ AI Tools', 'Data Visualization', 'ML-Driven Decisions', 'Business Intelligence'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-electric-blue/20 rounded-full backdrop-blur-sm animate-scale-in"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-right" style={{ animationDelay: '1s' }}>
            <Button 
              onClick={downloadResume}
              className="bg-gradient-to-r from-electric-blue to-electric-green hover:from-electric-green hover:to-electric-blue text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              View Resume
            </Button>
            <Button 
              onClick={downloadPortfolio}
              variant="outline"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              Download Portfolio PDF
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="ghost"
              className="text-electric-green hover:bg-electric-green/20 px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
