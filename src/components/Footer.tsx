import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary/5 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">∞</span>
              </div>
              <div className="font-poppins">
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  INFYREX
                </span>
                <p className="text-xs text-muted-foreground">YOUR TECH PARTNER</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              From Vision to Execution – We Build What You Imagine. 
              Professional tech services for all your creative and business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/request" className="block text-muted-foreground hover:text-primary transition-colors">
                Request
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:infyrex.tech@gmail.com" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>infyrex.tech@gmail.com</span>
              </a>
              <a 
                href="https://www.instagram.com/infyrex.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@infyrex.tech</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            Copyright © 2025 Infyrex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;