import React from 'react';
import { FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // Replace this with your actual Formspree/Getform ID later
  const FORM_ENDPOINT = "https://formspree.io/f/your-id-here";

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-6 text-center text-white relative overflow-hidden">
        {/* Decorative Brand Blurs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-light/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight relative z-10">Connect With Us</h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light relative z-10 leading-relaxed">
          Have questions or want to join the circle? Reach out through our socials or drop us a line below.
        </p>
        <div className="mt-8 h-1.5 w-24 bg-brand-primary mx-auto rounded-full relative z-10"></div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Socials & Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Follow the Journey</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Join our online community to stay in the loop for upcoming gatherings, workshops, and mutual aid projects.
              </p>
            </div>

            {/* Social Links Styled with Brand Colors */}
            <div className="grid grid-cols-1 gap-5">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" 
                 className="flex items-center p-6 border border-gray-100 rounded-3xl transition-all duration-300 hover:border-brand-primary hover:shadow-xl hover:shadow-brand-primary/5 group">
                <div className="bg-brand-primary/10 p-4 rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <FaInstagram className="w-6 h-6 text-brand-dark group-hover:text-white" />
                </div>
                <div className="ml-5">
                  <h3 className="font-bold text-gray-900">Instagram</h3>
                  <p className="text-sm text-gray-500">@AfriKinCircle</p>
                </div>
              </a>

              <a href="https://tiktok.com" target="_blank" rel="noreferrer" 
                 className="flex items-center p-6 border border-gray-100 rounded-3xl transition-all duration-300 hover:border-brand-dark hover:shadow-xl hover:shadow-brand-dark/5 group">
                <div className="bg-brand-light/10 p-4 rounded-2xl group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                  <FaTiktok className="w-6 h-6 text-brand-dark group-hover:text-white" />
                </div>
                <div className="ml-5">
                  <h3 className="font-bold text-gray-900">TikTok</h3>
                  <p className="text-sm text-gray-500">@AfriKinCircle</p>
                </div>
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 pt-8 border-t border-gray-100">
               <div className="flex items-center gap-5 text-gray-700 font-medium text-lg">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                    <FaEnvelope className="text-brand-primary" />
                  </div>
                  <span>info@afrikin.com</span>
               </div>
               <div className="flex items-center gap-5 text-gray-700 font-medium text-lg">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-brand-primary" />
                  </div>
                  <span>Toronto, Ontario</span>
               </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-gray-50 relative">
            {/* Subtle card accent */}
            <div className="absolute top-0 right-12 w-16 h-2 bg-brand-primary rounded-b-full"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
            <form action={FORM_ENDPOINT} method="POST" className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" name="name" required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" name="email" required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  name="message" rows="5" required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can you join the circle?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-dark text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg hover:bg-brand-primary transition-all transform active:scale-[0.98] group"
              >
                Send Message <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;