import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Innovation First",
      description: "Cutting-edge solutions using the latest technologies"
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Client-Focused",
      description: "Your vision is our mission - complete satisfaction guaranteed"
    },
    {
      icon: <Award className="w-6 h-6 text-tech-blue" />,
      title: "Premium Quality",
      description: "Professional-grade deliverables that exceed expectations"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins animate-fade-in">
            From Vision to Execution —
            <br />
            <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
              We Build What You Imagine
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Professional tech services including website building, design work, voice recording, 
            and career training. Your one-stop solution for all creative and technical needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all font-semibold"
              asChild
            >
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
             size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all font-semibold"
              asChild
            >
              <Link to="/request">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Why Choose Infyrex?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine creativity, technology, and expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-purple transition-all duration-300 bg-gradient-card border-primary/20 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of satisfied clients who trust Infyrex for their tech and creative needs
          </p>
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all font-semibold"
            asChild
          >
            <Link to="/request">
              Start Your Project Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;