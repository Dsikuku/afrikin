import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
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

  // Logic to determine if navbar should be dark or light based on scroll and page
  const isHomePage = location.pathname === "/";
  const navBgClass = isScrolled || !isHomePage 
    ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm" 
    : "bg-transparent py-5 border-transparent";
  
  const textClass = isScrolled || !isHomePage 
    ? "text-slate-900" 
    : "text-white";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className={`text-xl font-black tracking-tighter transition-colors ${textClass}`}>
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
                className={`relative text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-brand-primary ${
                  isActive 
                    ? (isScrolled || !isHomePage ? 'text-brand-dark' : 'text-brand-primary') 
                    : (isScrolled || !isHomePage ? 'text-slate-500' : 'text-white/80')
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full"></span>
                )}
              </Link>
            );
          })}
          
          <Link 
            to="/contact" 
            className={`ml-4 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 ${
              isScrolled || !isHomePage 
                ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/10 hover:bg-brand-primary" 
                : "bg-white text-brand-dark hover:bg-brand-primary hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden focus:outline-none p-2 ${textClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-4 flex flex-col justify-between relative">
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-white h-screen transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-2xl font-black text-slate-900 tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="mt-4 bg-brand-dark text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs"
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