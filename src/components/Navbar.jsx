import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Elements', path: '/elements' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Socials', path: '/socials' },
  ];

  const darkHeaderPages = ['/about', '/elements', '/socials', '/initiatives'];
  const isDarkPage = darkHeaderPages.includes(location.pathname) || location.pathname.startsWith('/initiatives/');
  const useWhiteText = isOpen || (!scrolled && (isDarkPage || location.pathname === '/'));

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        
        {/* LOGO */}
        <Link to="/" className="relative z-[110]">
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
            useWhiteText ? 'text-white' : 'text-slate-900'
          }`}>
            AfriKin<span className="text-brand-primary">.</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-primary ${
                useWhiteText ? 'text-white/90' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <button className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
              useWhiteText 
                ? 'bg-white text-slate-900 hover:bg-brand-primary hover:text-white' 
                : 'bg-brand-dark text-white hover:bg-brand-primary'
            }`}>
              Join Circle
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden relative z-[110] p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="text-white w-6 h-6" />
          ) : (
            <FaBars className={`${useWhiteText ? 'text-white' : 'text-slate-900'} w-6 h-6`} />
          )}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-slate-950 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        } md:hidden z-[100] h-[100dvh] w-screen`}>
          
          {/* Decorative Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]"></div>
          
          {/* THE ACTUAL LINKS (Now Restored) */}
          <div className="h-full w-full flex flex-col justify-center items-center px-6 relative z-10">
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-4xl font-black text-white italic tracking-tighter hover:text-brand-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="mt-4 bg-brand-primary text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                  Join the Circle
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;