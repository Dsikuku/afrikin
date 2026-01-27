import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on window resize if open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Elements', path: '/elements' },
    { name: 'Socials', path: '/socials' },
    { name: 'Initiatives', path: '/initiatives' }, 
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo with Brand Dot */}
        <Link to="/" className="text-2xl font-black text-slate-900 tracking-tighter">
          AfriKin<span className="text-brand-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 hover:text-brand-dark ${
                  isActive ? 'text-brand-dark' : 'text-gray-400'
                }`}
              >
                {link.name}
                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full"></span>
                )}
              </Link>
            );
          })}
          
          {/* Featured Contact Button */}
          <Link 
            to="/contact" 
            className="ml-4 bg-brand-dark text-white px-6 py-2.5 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-brand-primary transition-all shadow-lg shadow-brand-dark/10 active:scale-95"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-900 focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-lg font-bold tracking-tight ${
                location.pathname === link.path ? 'text-brand-primary' : 'text-slate-900'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="mt-2 bg-brand-dark text-white text-center py-4 rounded-2xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;