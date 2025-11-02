import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DevForge
            </h3>
            <p className="text-muted-foreground mb-4">
              Building tomorrow's software today. We transform ideas into exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center group">
                <Github className="text-foreground group-hover:text-primary-foreground transition-colors" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center group">
                <Linkedin className="text-foreground group-hover:text-primary-foreground transition-colors" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center group">
                <Twitter className="text-foreground group-hover:text-primary-foreground transition-colors" size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-colors flex items-center justify-center group">
                <Mail className="text-foreground group-hover:text-primary-foreground transition-colors" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>contact@devforge.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Street</li>
              <li>San Francisco, CA 94103</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;