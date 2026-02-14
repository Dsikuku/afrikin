import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 px-6 relative overflow-hidden">
      {/* 1. BRAND GLOW ACCENTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        
        {/* Brand & Mission */}
        <div className="md:col-span-1 space-y-6">
          <Link to="/" className="inline-block group">
            <h2 className="text-white text-3xl font-black tracking-tighter transition-transform group-hover:scale-105">
              AfriKin<span className="text-brand-primary">.</span>
            </h2>
          </Link>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] font-black text-slate-500 italic">
              "Every Connection Forms a Circle"
            </p>
            <p className="text-sm leading-relaxed font-light max-w-xs opacity-70">
              A grassroots community based in Toronto dedicated to social, creative, and professional connection.
            </p>
          </div>
        </div>

        {/* Explore Links */}
        <div className="space-y-8">
          <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Explore</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/" className="hover:text-brand-primary transition-all hover:pl-2">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-all hover:pl-2">About Us</Link></li>
            <li><Link to="/elements" className="hover:text-brand-primary transition-all hover:pl-2">Our Elements</Link></li>
            <li><Link to="/initiatives" className="hover:text-brand-primary transition-all hover:pl-2">Initiatives</Link></li>
          </ul>
        </div>

        {/* Community Links */}
        <div className="space-y-8">
          <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Community</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/socials" className="hover:text-brand-primary transition-all hover:pl-2">Events & Socials</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-all hover:pl-2">Join the Circle</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-all hover:pl-2">Collaborate</Link></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="space-y-8">
          <h3 className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Connect</h3>
          <div className="flex gap-3">
            <a 
              href="https://www.instagram.com/afrikin_circle/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 p-4 rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-500 group"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:scale-110" />
            </a>
            <a 
              href="https://www.tiktok.com/@afrikin.circle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 p-4 rounded-2xl hover:bg-brand-dark hover:text-white transition-all duration-500 group"
              aria-label="TikTok"
            >
              <FaTiktok className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:scale-110" />
            </a>
            <a 
              href="mailto:info@afrikin.com" 
              className="bg-white/5 p-4 rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-500 group"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:scale-110" />
            </a>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Location</p>
            <p className="text-xs text-slate-400">Toronto, Ontario • Canada</p>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM BAR */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-12 mt-20 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <p className="text-[9px] uppercase tracking-[0.4em] font-black text-slate-600">
          © {currentYear} AfriKin Circle<span className="mx-2 md:mx-4 opacity-30">|</span>Built for Community
        </p>
        
        <div className="flex gap-10 text-[9px] uppercase tracking-[0.4em] font-black text-slate-600">
          <button className="hover:text-brand-primary transition-colors">Privacy</button>
          <button className="hover:text-brand-primary transition-colors">Terms</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;