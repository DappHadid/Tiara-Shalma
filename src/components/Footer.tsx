import { Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-crisp-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-playfair font-bold mb-2">
              Tiara Shalma a Sakhra
            </h3>
            <p className="text-white/80 font-inter">
              Interior Design Student
            </p>
            <p className="text-white/60 font-inter text-sm">
              Institut Teknologi Nasional
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-8">
              <a
                href="#home"
                className="contact-link text-white hover:text-deep-red"
              >
                Home
              </a>
              <a
                href="#about"
                className="contact-link text-white hover:text-deep-red"
              >
                About
              </a>
              <a
                href="#projects"
                className="contact-link text-white hover:text-deep-red"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="contact-link text-white hover:text-deep-red"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="https://instagram.com/4lme0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-deep-red rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Follow on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:inialmeo@gmail.com"
                className="w-10 h-10 bg-white/10 hover:bg-deep-red rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/60 font-inter text-sm">
              Let's create something beautiful together
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 font-inter text-sm flex items-center justify-center">
            © 2024 Tiara Shalma a Sakhra. Made with 
            <Heart className="h-4 w-4 mx-1 text-deep-red fill-current" />
            for great design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;