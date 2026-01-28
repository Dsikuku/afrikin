import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft, FaCheckCircle, FaUsers, FaLightbulb } from 'react-icons/fa';

// This would ideally move to a separate 'data' file later
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
  "networking-mixer": {
    title: "Networking Mixer",
    tagline: "Where creators and leaders collide.",
    description: "Our mixers are designed to break the ice of traditional networking. We bring together young professionals, digital creators, and community leaders in an environment that prioritizes authentic relationship-building over business card swaps.",
    goal: "To spark collaborations that lead to new businesses, art projects, and mentorship pairings within our community.",
    impact: ["Hosted 2 sold-out networking events", "Facilitated 10+ professional partnerships", "Average 80% attendee 'new connection' rate"],
    cta: "Join the Next Mixer"
  },
  "book-club": {
    title: "Book Club",
    tagline: "Connecting one page at a time.",
    description: "The AfriKin Book Club is more than a reading group; it's a sanctuary for dialogue. we explore diverse stories from the African diaspora and beyond, using literature as a springboard for meaningful conversations about our own lives.",
    goal: "To foster a culture of lifelong learning and provide a safe space for vulnerable, intellectual, and cultural exchange.",
    impact: ["Completed 3 books by Black authors", "Grown to 10+ active monthly members", "Launched a community 'Little Library' project"],
    cta: "Join the Reading List"
  }
};

const InitiativeDetail = () => {
  const { id } = useParams();
  const data = initiativeData[id];

  if (!data) return <div className="py-40 text-center">Initiative not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/initiatives" className="text-brand-primary flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-8 hover:gap-4 transition-all">
            <FaChevronLeft /> Back to Initiatives
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic mb-6">
            {data.title}<span className="text-brand-primary">.</span>
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
            {data.tagline}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Detailed Breakdown */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
                <FaLightbulb className="text-brand-primary" /> The Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {data.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
                <FaUsers className="text-brand-primary" /> The Goal
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {data.goal}
              </p>
            </div>
          </div>

          {/* Sidebar: Impact/Stats */}
          <div className="bg-slate-50 rounded-[2rem] p-8 h-fit border border-slate-100">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Current Impact</h3>
            <ul className="space-y-4">
              {data.impact.map((stat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                  <FaCheckCircle className="text-brand-primary mt-1 flex-shrink-0" />
                  {stat}
                </li>
              ))}
            </ul>
            <Link to="/contact">
                <button className="w-full mt-10 bg-brand-dark text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary transition-colors">
                {data.cta}
                </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InitiativeDetail;