
interface ExperienceSectionProps {
  isDarkMode: boolean;
}

const ExperienceSection = ({ isDarkMode }: ExperienceSectionProps) => {
  const experiences = [
    {
      company: 'Anand Techno-Creations',
      role: 'Senior Data Analyst',
      duration: '2022 - Present',
      location: 'Mumbai, India',
      achievements: [
        'Led development of 5+ ML models improving business decision accuracy by 40%',
        'Created interactive dashboards serving 50+ stakeholders daily',
        'Implemented automated data pipelines reducing manual work by 60%',
        'Mentored junior analysts in advanced Python and ML techniques'
      ],
      icon: '🚀'
    },
    {
      company: 'Rigal Infotech',
      role: 'Data Analyst',
      duration: '2021 - 2022',
      location: 'Pune, India',
      achievements: [
        'Developed fraud detection system with 95% accuracy using ensemble methods',
        'Built real-time analytics dashboard for e-commerce platform',
        'Optimized SQL queries improving data retrieval speed by 3x',
        'Collaborated with cross-functional teams on 10+ data-driven projects'
      ],
      icon: '📊'
    },
    {
      company: 'Freelance Projects',
      role: 'Data Science Consultant',
      duration: '2020 - 2021',
      location: 'Remote',
      achievements: [
        'Completed 15+ independent data analysis projects',
        'Specialized in retail analytics and customer segmentation',
        'Developed custom visualization solutions for small businesses',
        'Built recommendation systems for e-commerce clients'
      ],
      icon: '💼'
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-dark-gray/50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue to-electric-green"></div>

            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className="relative flex items-start mb-12 group animate-fade-in-left"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-electric-blue to-electric-green rounded-full flex items-center justify-center text-white text-2xl font-bold mr-8 group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${isDarkMode ? 'bg-deep-blue' : 'bg-gray-50'} rounded-lg p-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-electric-blue/20 transition-all duration-300 transform group-hover:-translate-y-1`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-electric-blue">{exp.role}</h3>
                      <h4 className="text-lg font-semibold opacity-90">{exp.company}</h4>
                    </div>
                    <div className="text-sm opacity-70 md:text-right">
                      <div>{exp.duration}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className="flex items-start text-sm opacity-80 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="text-electric-green mr-2 font-bold">▸</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
