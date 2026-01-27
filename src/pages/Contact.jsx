import React from 'react';
import { FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // Replace this with your actual Formspree/Getform ID later
  const FORM_ENDPOINT = "https://formspree.io/f/your-id-here";

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="bg-slate-900 pt-32 pb-24 px-6 text-center text-white relative overflow-hidden">
        {/* Signature Brand Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-light/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-brand-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic">Connect With Us<span className="text-brand-primary">.</span></h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Have questions or want to join the circle? Reach out through our socials or drop us a line below.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Socials & Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Follow the Journey</h2>
              <div className="h-1.5 w-20 bg-brand-primary rounded-full"></div>
              <p className="text-lg text-slate-500 leading-relaxed font-light pt-4">
                Join our online community to stay in the loop for upcoming gatherings, workshops, and mutual aid projects.
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" 
                 className="flex items-center p-6 border border-slate-100 rounded-[2rem] transition-all duration-500 hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/5 group bg-white">
                <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <FaInstagram className="w-6 h-6 text-brand-dark group-hover:text-white" />
                </div>
                <div className="ml-5">
                  <h3 className="font-black text-slate-900 text-sm uppercase tracking-widest">Instagram</h3>
                  <p className="text-xs text-slate-400">@AfriKinCircle</p>
                </div>
              </a>

              <a href="https://tiktok.com" target="_blank" rel="noreferrer" 
                 className="flex items-center p-6 border border-slate-100 rounded-[2rem] transition-all duration-500 hover:border-brand-dark hover:shadow-2xl hover:shadow-brand-dark/5 group bg-white">
                <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-brand-dark group-hover:text-white transition-all duration-500">
                  <FaTiktok className="w-6 h-6 text-brand-dark group-hover:text-white" />
                </div>
                <div className="ml-5">
                  <h3 className="font-black text-slate-900 text-sm uppercase tracking-widest">TikTok</h3>
                  <p className="text-xs text-slate-400">@AfriKinCircle</p>
                </div>
              </a>
            </div>

            {/* Quick Contact Details */}
            <div className="grid grid-cols-1 gap-6 pt-10 border-t border-slate-100">
               <div className="flex items-center gap-5 text-slate-600 font-bold">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary">
                    <FaEnvelope />
                  </div>
                  <span className="tracking-tight">info@afrikin.com</span>
               </div>
               <div className="flex items-center gap-5 text-slate-600 font-bold">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary">
                    <FaMapMarkerAlt />
                  </div>
                  <span className="tracking-tight">Toronto, Ontario</span>
               </div>
            </div>
          </div>

          {/* Right Side: Refined Form */}
          <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-50 relative overflow-hidden">
            {/* Subtle Brand Strip */}
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary/20"></div>
            
            <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Send a Message</h2>
            
            <form action={FORM_ENDPOINT} method="POST" className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <input 
                  type="text" name="name" required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-brand-primary/20 outline-none transition-all font-medium placeholder:text-slate-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <input 
                  type="email" name="email" required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-brand-primary/20 outline-none transition-all font-medium placeholder:text-slate-300"
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Message</label>
                <textarea 
                  name="message" rows="4" required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-brand-primary/20 outline-none transition-all font-medium placeholder:text-slate-300 resize-none"
                  placeholder="Tell us how you'd like to get involved..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-dark text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 shadow-xl hover:bg-brand-primary transition-all active:scale-[0.98] group"
              >
                Send Message <FaPaperPlane className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;