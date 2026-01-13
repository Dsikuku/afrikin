import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Elements', path: '/elements' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          AfriKin Circle
        </Link>

        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-gray-600 hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Hidden on desktop) */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar/Dropdown */}
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;