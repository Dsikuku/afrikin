import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaHandshake, FaCamera, FaBalanceScale } from 'react-icons/fa';

const Terms = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <section className="bg-slate-900 pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -ml-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/" className="text-brand-primary flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8 hover:text-white transition-colors">
            <FaChevronLeft /> Back Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">Terms of Service<span className="text-brand-primary">.</span></h1>
          <p className="text-slate-400 mt-4 font-light uppercase tracking-widest text-xs">AfriKin Community Guidelines</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1">
              <FaHandshake className="text-brand-primary text-2xl" />
            </div>
            <div className="md:col-span-11">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Community Sanctuary Code</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                AfriKin is a sanctuary for professional and creative exchange. By attending our <strong>Book Club</strong> or <strong>Kinnect Series</strong>, you agree to engage with respect. We maintain a zero-tolerance policy for harassment or discrimination. We reserve the right to restrict access to anyone who disrupts the safety of our "Circle."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1">
              <FaCamera className="text-brand-primary text-2xl" />
            </div>
            <div className="md:col-span-11">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Media & Photography</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                Our events are often documented for community archives. By participating, you acknowledge that your image may appear in our digital galleries. If you prefer not to be photographed, please inform our team at the start of any event.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-1">
              <FaBalanceScale className="text-brand-primary text-2xl" />
            </div>
            <div className="md:col-span-11">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">Governing Law</h2>
              <p className="text-slate-600 font-light leading-relaxed">
                These terms are governed by the laws of the <strong>Province of Ontario</strong> and the federal laws of Canada. Any disputes arising from community participation will be handled within this jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;