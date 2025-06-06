
import { useEffect, useState } from 'react';

interface AboutSectionProps {
  isDarkMode: boolean;
}

const AboutSection = ({ isDarkMode }: AboutSectionProps) => {
  const [skillsVisible, setSkillsVisible] = useState(false);

  const skills = [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'Power BI', level: 88 },
    { name: 'Pandas', level: 92 },
    { name: 'Excel', level: 85 },
    { name: 'Tableau', level: 80 },
    { name: 'HTML/CSS', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Data Visualization', level: 90 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-dark-gray/50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-electric-blue">
                Passionate Data Storyteller
              </h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                With a deep passion for transforming raw data into compelling business narratives, 
                I specialize in uncovering actionable insights that drive strategic decision-making. 
                My expertise spans across advanced analytics, machine learning, and business intelligence, 
                with hands-on experience in over 35 AI tools and technologies.
              </p>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                From developing ML-powered recommendation systems to creating comprehensive dashboards 
                that visualize complex datasets, I bridge the gap between data complexity and business clarity. 
                My work at Anand Techno-Creations and Rigal Infotech has involved everything from fraud 
                detection algorithms to full-stack web applications.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Data Science', 'Business Intelligence', 'ML Engineering', 'Full Stack Development'].map((specialty) => (
                  <span 
                    key={specialty}
                    className="px-4 py-2 bg-gradient-to-r from-electric-blue/20 to-electric-green/20 rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Animation */}
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-semibold mb-8 text-electric-green">
                Technical Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-electric-blue">{skill.level}%</span>
                    </div>
                    <div className={`h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                      <div 
                        className="h-full bg-gradient-to-r from-electric-blue to-electric-green rounded-full transition-all duration-1000 ease-out transform origin-left"
                        style={{ 
                          width: skillsVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
