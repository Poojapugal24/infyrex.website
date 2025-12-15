import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Target, Zap, Heart, ArrowRight, GraduationCap, Code, Lightbulb, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Expert-Led Education",
      description: "Industry professionals delivering practical, real-world knowledge that bridges the gap between theory and practice."
    },
    {
      icon: <Code className="w-8 h-8 text-tech-blue" />,
      title: "Hands-On Learning",
      description: "Interactive sessions with live demonstrations and practical exercises that ensure skill development."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Innovation Focus",
      description: "Cutting-edge content covering emerging technologies and industry trends that drive business success."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous content review and continuous improvement to deliver exceptional learning experiences."
    }
  ];

  const stats = [
    { number: "100+", label: "Sessions Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "25+", label: "Expert Instructors" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  const services = [
    "App Development",
    "Website Building",
    "Poster Design & Video Works",
    "Account Help & Safety",
    "Voice Work & Recording",
    "Technical Guest Lectures"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            About Infyrex
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Your partner in bridging technology and education. We deliver expert-led technical sessions 
            and comprehensive digital solutions that empower organizations with cutting-edge knowledge and skills.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Infyrex, we believe that knowledge is the foundation of innovation. Our mission is to 
                democratize access to expert technical knowledge through engaging guest lectures and 
                comprehensive digital solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We specialize in translating complex technical concepts into understandable, actionable 
                insights for both technical and non-technical audiences, fostering continuous learning 
                and skill development across organizations.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-card border-primary/20 shadow-purple">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-foreground mb-4">
                    "Empowering Teams Through Expert Technical Education"
                  </blockquote>
                  <p className="text-muted-foreground">
                    We transform technical complexity into accessible knowledge, enabling organizations 
                    to stay ahead in today's rapidly evolving digital landscape.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Educational Philosophy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our approach combines industry expertise with pedagogical excellence to deliver 
              transformative learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-purple transition-all duration-300 bg-background border-primary/20 group"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Services & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of technical education and digital services designed to 
              meet the evolving needs of modern organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-purple transition-all duration-300 bg-gradient-card border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Professional solutions tailored to your specific technical and educational needs
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
            Ready to Elevate Your Team's Skills?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join organizations that have enhanced their technical capabilities through our expert-led 
            sessions and comprehensive digital services. Let's build knowledge together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all font-semibold"
              asChild
            >
              <Link to="/request">
                Schedule a Session
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all font-semibold"
              asChild
            >
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;