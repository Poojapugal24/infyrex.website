import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to start your project? Have questions about our services? 
            We're here to help and would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">
                  Let's Connect
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Choose the best way to reach us. We respond to all inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <Card className="hover:shadow-purple transition-all duration-300 bg-gradient-card border-primary/20 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                        <p className="text-muted-foreground mb-3">
                          For project inquiries and detailed discussions
                        </p>
                        <a 
                          href="mailto:infyrex.tech@gmail.com"
                          className="text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          infyrex.tech@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram */}
                <Card className="hover:shadow-pink transition-all duration-300 bg-gradient-card border-secondary/20 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Instagram className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Follow Us</h3>
                        <p className="text-muted-foreground mb-3">
                          Stay updated with our latest work and behind-the-scenes content
                        </p>
                        <a 
                          href="https://www.instagram.com/infyrex.tech/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary/80 font-medium transition-colors"
                        >
                          @infyrex.tech
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="hover:shadow-glow transition-all duration-300 bg-gradient-card border-tech-blue/20 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Clock className="w-6 h-6 text-tech-blue" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">Response Time</h3>
                        <p className="text-muted-foreground mb-3">
                          We typically respond within 24 hours
                        </p>
                        <span className="text-tech-blue font-medium">
                          Monday - Sunday, 9 AM - 10 PM
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">
                  Quick Actions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to get started? Choose the option that best fits your needs.
                </p>
              </div>

              <div className="space-y-6">
                {/* Submit Request */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Start a New Project
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Have a specific project in mind? Submit a detailed request and get a personalized quote.
                    </p>
                    <Button 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all"
                      onClick={() => window.location.href = '/request'}
                    >
                      Submit Service Request
                    </Button>
                  </CardContent>
                </Card>

                {/* View Services */}
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Browse Our Services
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Explore our full range of services to find exactly what you need.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-secondary text-secondary hover:bg-secondary/10"
                      onClick={() => window.location.href = '/services'}
                    >
                      View All Services
                    </Button>
                  </CardContent>
                </Card>

                {/* Direct Email */}
                <Card className="bg-tech-blue/5 border-tech-blue/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Send Direct Email
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Prefer email? Send us a direct message with your questions or project details.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-tech-blue text-tech-blue hover:bg-tech-blue/10"
                      onClick={() => window.location.href = 'mailto:infyrex.tech@gmail.com?subject=Project Inquiry&body=Hi Infyrex team,%0D%0A%0D%0AI am interested in your services and would like to discuss...'}
                    >
                      Open Email Client
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-poppins">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity. Simple tasks like poster design take 1-3 days, 
                  while complex projects like website building can take 7-14 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Do you offer revisions?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We include 2-3 rounds of revisions with every project to ensure you're 
                  completely satisfied with the final result.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What file formats do you deliver?
                </h3>
                <p className="text-muted-foreground">
                  We deliver in industry-standard formats: JPG/PNG for images, MP4 for videos, 
                  MP3/WAV for audio, and source files when applicable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  How do you handle payments?
                </h3>
                <p className="text-muted-foreground">
                  We discuss payment terms during project consultation. Typically, we require 
                  50% upfront and 50% upon completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;