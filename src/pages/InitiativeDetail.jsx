import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft, FaCheckCircle, FaUsers, FaLightbulb } from 'react-icons/fa';

const initiativeData = {
  "resource-hub": {
    title: "Resource Hub",
    tagline: "Empowering the next generation of leaders.",
    description: "Our Resource Hub is a living, breathing directory designed to bridge the gap for newcomers and Black youth in Toronto. We provide vetted links to housing, mental health support, career mentorship, and cultural integration services.",
    goal: "To reduce the barriers to entry for youth entering the professional workforce and provide a robust safety net for those navigating a new city.",
    impact: ["Connected 50+ youth to industry mentors", "Vetted 10+ local community services", "Launched monthly career development panels"],
    cta: "Become a Contributor"
  },
  "community-love": {
    title: "Community Love",
    tagline: "Small acts, collective impact.",
    description: "Through clothing drives, food bank support, and mutual aid, we turn compassion into tangible action. We believe that 'care' is a verb that requires consistent movement and community participation.",
    goal: "To create a self-sustaining mutual aid network within the Black diaspora in the GTA, ensuring no one in our circle goes without essentials.",
    impact: ["Collected 50+ items for winter clothing drives", "Partnered with 3 local emergency shelters", "Organized 5 community-led clean-up days"],
    cta: "Donate to the Cause"
  },
  "book-club": {
    title: "Book Club",
    tagline: "Connecting one page at a time.",
    description: "The AfriKin Book Club is more than a reading group; it's a sanctuary for dialogue. We explore diverse stories from the African diaspora and beyond, using literature as a springboard for meaningful conversations about our own lives.",
    goal: "To foster a culture of lifelong learning and provide a safe space for vulnerable, intellectual, and cultural exchange.",
    impact: ["Completed 3 books by Black authors", "Grown to 10+ active monthly members", "Launched a community 'Little Library' project"],
    cta: "Join the Reading List"
  }
};

const InitiativeDetail = () => {
  const { id } = useParams();
  const data = initiativeData[id];

  if (!data) return (
    <div className="py-40 text-center flex flex-col items-center gap-6">
      <h2 className="text-2xl font-black italic">Initiative not found.</h2>
      <Link to="/initiatives" className="bg-brand-primary text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">
        Return to Initiatives
      </Link>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-slate-900 pt-32 md:pt-48 pb-20 md:pb-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/initiatives" className="text-brand-primary flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] mb-8 hover:gap-4 transition-all">
            <FaChevronLeft /> Back to Initiatives
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic mb-6 leading-[0.9]">
            {data.title}<span className="text-brand-primary">.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-light max-w-xl leading-relaxed">
            {data.tagline}
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="max-w-7xl mx-auto py-16 md:py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          
          <div className="lg:col-span-7 space-y-16">
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4 italic">
                <FaLightbulb className="text-brand-primary text-xl" /> The Vision
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                {data.description}
              </p>
            </div>

            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4 italic">
                <FaUsers className="text-brand-primary text-xl" /> The Goal
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                {data.goal}
              </p>
            </div>
          </div>

          {/* Right Side: Impact Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-slate-50 rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-sm">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 border-b pb-4">Project Metrics</h3>
              <ul className="space-y-6 mb-10">
                {data.impact.map((stat, i) => (
                  <li key={i} className="flex items-start gap-4 text-base md:text-lg font-bold text-slate-800 tracking-tight leading-tight">
                    <FaCheckCircle className="text-brand-primary mt-1 flex-shrink-0" />
                    {stat}
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <button className="w-full bg-slate-950 text-white py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-primary transition-all shadow-xl active:scale-95">
                  {data.cta}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FINAL MINI CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto border-t border-slate-100 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-900 font-black italic text-2xl tracking-tighter">Next: Discover Socials</p>
          <Link to="/socials" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">
            Visit our circle <div className="w-12 h-[1px] bg-brand-primary group-hover:w-16 transition-all"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InitiativeDetail;