
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection = ({ isDarkMode }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('bipin.chauhan@email.com');
    toast({
      title: "Email Copied!",
      description: "bipin.chauhan@email.com has been copied to your clipboard.",
    });
  };

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-dark-gray/50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-semibold mb-8 text-electric-blue">
                Ready to turn your data into insights?
              </h3>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about the latest trends in data science and AI. Let's connect and explore 
                how we can create value through data-driven solutions.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 group cursor-pointer" onClick={copyEmail}>
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-electric-green rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-electric-blue transition-colors">
                      bipin.chauhan@email.com
                    </p>
                    <p className="text-sm opacity-70">Click to copy</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div 
                  className="flex items-center space-x-4 group cursor-pointer"
                  onClick={() => window.open('https://linkedin.com/in/bipin-chauhan', '_blank')}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-electric-green rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    💼
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-electric-blue transition-colors">
                      LinkedIn Profile
                    </p>
                    <p className="text-sm opacity-70">Professional network</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-electric-green rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Mumbai, India</p>
                    <p className="text-sm opacity-70">Open to remote opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className={`${isDarkMode ? 'bg-deep-blue border-gray-700' : 'bg-gray-50 border-gray-200'} animate-fade-in-right`}>
              <CardHeader>
                <CardTitle className="text-xl text-electric-green">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`${isDarkMode ? 'bg-dark-gray border-gray-600' : 'bg-white border-gray-300'} focus:border-electric-blue`}
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`${isDarkMode ? 'bg-dark-gray border-gray-600' : 'bg-white border-gray-300'} focus:border-electric-blue`}
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`${isDarkMode ? 'bg-dark-gray border-gray-600' : 'bg-white border-gray-300'} focus:border-electric-blue`}
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`${isDarkMode ? 'bg-dark-gray border-gray-600' : 'bg-white border-gray-300'} focus:border-electric-blue resize-none`}
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-electric-blue to-electric-green hover:from-electric-green hover:to-electric-blue text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 mt-20 pt-8">
        <div className="text-center">
          <p className="opacity-70">
            © 2024 Bipin Chauhan. Crafted with passion for data and innovation.
          </p>
          <p className="text-sm opacity-50 mt-2">
            Transforming data into actionable intelligence, one insight at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
