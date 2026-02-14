import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaShieldAlt, FaLock, FaUserCheck } from 'react-icons/fa';

const Privacy = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="bg-slate-900 pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="text-brand-primary flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8 hover:text-white transition-colors">
            <FaChevronLeft /> Back Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">Privacy Policy<span className="text-brand-primary">.</span></h1>
          <p className="text-slate-400 mt-4 font-light uppercase tracking-widest text-xs">Last Updated: February 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1">
              <FaShieldAlt className="text-brand-primary text-2xl" />
            </div>
            <div className="md:col-span-11">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Accountability & Consent</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                In accordance with Canadian privacy standards (PIPEDA), <strong>AfriKin Circle</strong> is responsible for the personal information under our control. By providing your contact details for our <strong>Kinnect Series</strong> or joining our mailing list, you consent to the collection and use of your information specifically for community updates and event coordination.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1">
              <FaLock className="text-brand-primary text-2xl" />
            </div>
            <div className="md:col-span-11">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Information Usage</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                We only collect information necessary for community engagement. Your data is stored securely and is never sold or shared with third-party marketers. We use your email solely to keep the "Circle" connected and informed about upcoming initiatives.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1">
              <FaUserCheck className="text-brand-primary text-2xl" />
            </div>
            <div className="md:col-span-11">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Your Rights</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                As a member of our Toronto community, you have the right to access the personal information we hold. You may request to be removed from our database or update your preferences at any time by contacting <strong>info@afrikin.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;