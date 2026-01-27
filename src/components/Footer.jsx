import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400 py-16 px-6 relative overflow-hidden">
      {/* Subtle background texture/accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand & Mission Section */}
        <div className="md:col-span-1">
          <h2 className="text-white text-2xl font-black mb-4 tracking-tighter">
            AfriKin<span className="text-brand-primary">.</span>
          </h2>
          <p className="text-sm leading-relaxed italic opacity-80">
            "Every Connection Forms a Circle"
          </p>
          <p className="mt-4 text-xs leading-relaxed max-w-xs">
            A grassroots community based in Toronto dedicated to social, creative, and professional connection.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
            <li><Link to="/elements" className="hover:text-brand-primary transition-colors">Our Elements</Link></li>
            <li><Link to="/initiatives" className="hover:text-brand-primary transition-colors">Initiatives</Link></li>
          </ul>
        </div>

        {/* Community Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Community</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/socials" className="hover:text-brand-primary transition-colors">Events & Socials</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Join the Circle</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Collaborate</Link></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="space-y-6">
          <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h3>
          <div className="flex gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 p-3 rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 group"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 p-3 rounded-xl hover:bg-brand-dark hover:text-white transition-all duration-300 group"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
            <a 
              href="mailto:info@afrikin.com" 
              className="bg-white/5 p-3 rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 group"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5 text-gray-400 group-hover:text-white" />
            </a>
          </div>
          <div className="pt-4">
            <p className="text-xs text-gray-500 font-medium">Toronto, Ontario</p>
            <p className="text-xs text-gray-500">Canada</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-10 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-600">
          © {currentYear} AfriKin Circle. Built for Community.
        </p>
        
        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-600">
          <button className="hover:text-brand-primary transition-colors duration-200">
            Privacy Policy
          </button>
          <button className="hover:text-brand-primary transition-colors duration-200">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;