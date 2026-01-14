import React from 'react';
import { FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // Replace this with your actual Formspree/Getform ID later
  const FORM_ENDPOINT = "https://formspree.io/f/your-id-here";

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 py-16 md:py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Connect With Us</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto font-light">
          Have questions or want to join the circle? Reach out through our socials or drop us a line below.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Socials & Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow the Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Join our online community to stay in the loop for upcoming gatherings and mutual aid projects.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <a href="https://instagram.com" className="flex items-center p-5 border border-gray-100 rounded-2xl transition-all hover:bg-pink-600 hover:text-white group">
                <div className="bg-pink-50 p-3 rounded-lg group-hover:bg-white/20"><FaInstagram className="w-6 h-6 text-pink-600 group-hover:text-white" /></div>
                <div className="ml-4"><h3 className="font-bold">Instagram</h3><p className="text-sm opacity-70">@AfriKinCircle</p></div>
              </a>
              <a href="https://tiktok.com" className="flex items-center p-5 border border-gray-100 rounded-2xl transition-all hover:bg-black hover:text-white group">
                <div className="bg-gray-50 p-3 rounded-lg group-hover:bg-white/20"><FaTiktok className="w-6 h-6 text-gray-900 group-hover:text-white" /></div>
                <div className="ml-4"><h3 className="font-bold">TikTok</h3><p className="text-sm opacity-70">@AfriKinCircle</p></div>
              </a>
            </div>

            <div className="space-y-6 pt-6">
               <div className="flex items-center gap-4 text-gray-600">
                  <FaEnvelope className="text-brand-primary" /> <span>info@afrikin.com</span>
               </div>
               <div className="flex items-center gap-4 text-gray-600">
                  <FaMapMarkerAlt className="text-brand-primary" /> <span>Toronto, Ontario</span>
               </div>
            </div>
          </div>

          {/* Right Side: Simple Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form action={FORM_ENDPOINT} method="POST" className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" name="name" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" name="email" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message" rows="4" required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can you join the circle?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all transform active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;