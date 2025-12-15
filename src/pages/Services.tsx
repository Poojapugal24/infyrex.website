import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import appDevelopmentImg from "@/assets/appDevelopment.jpg";
import heroImage from "@/assets/hero-bg.jpg"; // Capital D, no hyphen
import websiteImg from "@/assets/website-mockup.jpg";
import posterVideoImg from "@/assets/poster-video.jpg";
import securityImg from "@/assets/security-shield.jpg";
import bootcampImg from "@/assets/bootcamp.jpg";
import voiceImg from "@/assets/voice-recording.jpg";



const Services = () => {
  const services = [
    {
      title: "Application Development",
      description: "Build custom web and mobile applications with modern technologies, scalable architecture, and optimal user experience.",
      userInputs: "Project requirements, target platform (web/mobile), features list, design preferences, timeline",
      delivery: "Fully functional application with source code, deployment setup, documentation, and maintenance support.",
      image: heroImage
    },
    {
      title: "Website Building",
      description: "Complete responsive website development from concept to launch with modern design and functionality.",
      userInputs: "Content, logo, layout preferences, color scheme, functionality requirements",
      delivery: "Fully responsive website with optional admin access, hosting setup, and maintenance guide",
      image: websiteImg
    },
    {
      title: "Poster Design & Video Works",
      description: "Eye-catching poster designs and engaging video content for social media and marketing campaigns.",
      userInputs: "Event/product details, format specifications, target platform, brand guidelines",
      delivery: "HD posters in JPEG format & Professional video ads in MP4 with multiple size variants",
      image: posterVideoImg
    },
    {
      title: "Account Help & Safety",
      description: "Expert assistance with account recovery, security setup, and protection against online threats.",
      userInputs: "Issue type description, screenshots of problems, platform details, security concerns",
      delivery: "Step-by-step recovery guide, security audit report, and ongoing protection tips",
      image: securityImg
    },
    {
      title: "Voice Work & Recording",
      description: "Professional voice-over services for commercials, audiobooks, presentations, and multimedia content.",
      userInputs: "Script content, preferred language, tone requirements, delivery timeline",
      delivery: "High-quality voice-over files in MP3/WAV format with multiple takes and editing options",
      image: voiceImg
    },
    {
      title: "Technical Guest Lectures",
      description: "Expert-led technical sessions tailored for both technical and non-technical audiences. We bridge the gap between complex technology and practical business understanding.",
      userInputs: "Audience type, industry, topics of interest, technical level",
      delivery: "Customized lecture, interactive Q&A, reference materials, follow-up support",
      image: bootcampImg
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section with heroImage background - just like Home.tsx */}
      <section 
        className="relative py-16 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Our Professional Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive tech and creative solutions tailored to your needs. 
            From simple tasks to complex projects, we deliver excellence every time.
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all font-semibold"
            asChild
          >
            <Link to="/request">
              Request a Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  userInputs={service.userInputs}
                  delivery={service.delivery}
                  image={service.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't see exactly what you're looking for? We create custom solutions for unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all" asChild>
              <Link to="/request">Submit Custom Request</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;