import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-brand-light/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* The "Broken Circle" Visual */}
        <div className="relative mb-12">
          <h1 className="text-[12rem] md:text-[16rem] font-black text-slate-900/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 border-[12px] md:border-[16px] border-brand-primary border-t-transparent rounded-full animate-spin-slow"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <FaSearch className="text-4xl md:text-6xl text-brand-dark animate-pulse" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Outside the Circle.
        </h2>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed font-light">
          It looks like this path lead somewhere we haven't built yet. 
          Don't worry—the circle is always open, and home is just a click away.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-primary transition-all shadow-xl shadow-brand-dark/10 group"
          >
            <FaHome /> Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-gray-100 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all"
          >
            <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform" /> Go Back
          </button>
        </div>

        {/* Brand Touch */}
        <div className="mt-20 flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-dark"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-light"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;