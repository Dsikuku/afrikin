import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Add this
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation(); // Get current path

  // --- NEW: AUTOMATIC RESET ON PAGE CHANGE ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 
  // -------------------------------------------

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[120]"> {/* Increased z-index to stay above Footer */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          flex items-center justify-center
          w-14 h-14 rounded-2xl bg-brand-dark text-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] 
          transition-all duration-500 ease-in-out border border-white/10
          hover:bg-brand-primary hover:-translate-y-3 hover:shadow-brand-primary/20
          active:scale-90 focus:outline-none focus:ring-2 focus:ring-brand-primary
          ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-50 pointer-events-none'}
        `}
        aria-label="Back to top"
      >
        <div className="relative">
          <FaArrowUp className="text-xl" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;