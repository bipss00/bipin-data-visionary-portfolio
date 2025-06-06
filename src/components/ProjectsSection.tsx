
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

const ProjectsSection = ({ isDarkMode }: ProjectsSectionProps) => {
  const projects = [
    {
      title: 'Zomato Sales Analysis',
      description: 'Comprehensive analysis of Zomato sales data using Python and advanced visualization techniques. Identified key trends and customer behavior patterns.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      image: '📊',
      link: '#',
      github: '#'
    },
    {
      title: 'Swiggy Dashboard (Power BI)',
      description: 'Interactive Power BI dashboard for Swiggy delivery analytics, featuring real-time metrics, geographic visualizations, and performance KPIs.',
      tech: ['Power BI', 'DAX', 'SQL', 'Excel'],
      image: '📈',
      link: '#',
      github: '#'
    },
    {
      title: 'Furry Friends ML Recommendation',
      description: 'Machine learning-powered pet recommendation system using collaborative filtering and content-based algorithms to match pets with potential owners.',
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Flask'],
      image: '🐕',
      link: '#',
      github: '#'
    },
    {
      title: 'E-Medistore Full Stack App',
      description: 'Complete e-commerce platform for medical supplies with user authentication, payment integration, and inventory management system.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '🏥',
      link: '#',
      github: '#'
    },
    {
      title: 'Banking Fraud Detection',
      description: 'Advanced ML model for detecting fraudulent banking transactions using anomaly detection and ensemble methods with 95% accuracy.',
      tech: ['Python', 'XGBoost', 'Scikit-learn', 'Jupyter'],
      image: '🔒',
      link: '#',
      github: '#'
    },
    {
      title: 'IoT Data Analytics Platform',
      description: 'Real-time analytics platform for IoT sensor data using Arduino and Raspberry Pi, with cloud-based data processing and visualization.',
      tech: ['Arduino', 'Raspberry Pi', 'Python', 'MongoDB'],
      image: '🌐',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-deep-blue' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`group hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? 'bg-dark-gray border-gray-700' : 'bg-white border-gray-200'
                } hover:shadow-2xl hover:shadow-electric-blue/20 animate-scale-in cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-sm opacity-80">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs bg-electric-blue/20 text-electric-blue rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-electric-blue to-electric-green hover:from-electric-green hover:to-electric-blue text-white flex-1"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      View Project
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-gradient-to-r from-electric-blue to-electric-green hover:from-electric-green hover:to-electric-blue text-white px-8 py-3"
              onClick={() => window.open('#', '_blank')}
            >
              View All Projects on Portfolio Drive
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
