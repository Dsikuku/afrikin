import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaTiktok } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand & Mission Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">AfriKin Circle</h2>
          <p className="text-sm leading-relaxed">
            Every Connection Forms a Circle
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/initiatives" className="hover:text-blue-400 transition">Our Initiatives</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Location/Social Placeholder */}
        <div className="space-y-6">
          <h3 className="text-white font-semibold text-lg">Connect</h3>
          <div className="flex gap-5">
              {/* Replace '#' with your actual social links */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-black transition-all duration-300 group"
                aria-label="TikTok"
              >
                <FaTiktok className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="mailto:info@afrikin.com" 
                className="bg-slate-800 p-3 rounded-full hover:bg-blue-500 transition-all duration-300 group"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-8 mt-8 text-center space-y-4">
        <p className="text-sm text-gray-500">
          © {currentYear} AfriKin Circle. Built for Community.
        </p>
        
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <button className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </button>
          <button className="hover:text-white transition-colors duration-200">
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;