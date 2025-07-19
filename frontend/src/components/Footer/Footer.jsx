import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-10 px-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About NetworQ</h4>
          <p className="text-sm">
            We connect brilliant minds through events designed for students, professionals, and entrepreneurs. 
            Discover opportunities, build connections, and unlock your potential.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-primary transition-colors">Events</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <Link to="/signup">
            <Button
              variant="outline"
              className="py-2 px-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Subscribe to Newsletter
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border mt-8 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} NetworQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;