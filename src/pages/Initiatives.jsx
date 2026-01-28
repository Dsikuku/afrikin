import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Resource Hub",
    category: "Social Support",
    description: "Newcomer + Youth: A curated list of services and organizations for housing, education, job opportunities, mental health, and cultural integration.",
    status: "Ongoing"
  },
  {
    id: 2,
    title: "Community Love",
    category: "Community",
    description: "Our clothing drives & donation campaigns are making an impact in our communities. Join us in spreading love and support where it’s needed most!",
    status: "Ongoing"
  },
  {
    id: 3,
    title: "Networking Mixer",
    category: "Networking",
    description: "Our newest initiative brings together young professionals, creators, and community leaders to exchange ideas, collaborate, and grow.",
    status: "In Progress"
  },
  {
    id: 4,
    title: "Book Club",
    category: "Culture",
    description: "Our book club is a place to come together, explore diverse stories, and engage in meaningful conversations. We learn and grow, one page at a time.",
    status: "Ongoing"
  }
];

const Initiatives = () => {
  const createSlug = (text) => text.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HEADER SECTION - Adjusted pt for mobile navbar clearance */}
      <section className="bg-slate-900 pt-32 md:pt-48 pb-20 md:pb-32 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48 opacity-50 md:opacity-100"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>

        <div className="relative z-10">
          <span className="text-brand-primary uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">Our Impact</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Initiatives<span className="text-brand-primary">.</span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed px-4">
            At AfriKin Circle, we believe in building impactful projects that foster community empowerment and lasting change.
          </p>
        </div>
      </section>

      {/* 2. GRID SECTION - Responsive Padding and Gap */}
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6 -mt-8 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between bg-white relative hover:-translate-y-2 active:scale-[0.98] md:active:scale-100"
            >
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary bg-brand-primary/5 px-4 py-1.5 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-6 md:mt-8 mb-4 tracking-tight group-hover:text-brand-dark transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-50">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    project.status === 'Ongoing' ? 'bg-brand-primary animate-pulse' : 'bg-slate-300'
                  }`}></span>
                  {project.status}
                </span>
                
                <Link 
                  to={`/initiatives/${createSlug(project.title)}`} 
                  className="flex items-center gap-2 text-brand-dark font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all group/btn"
                >
                  Learn More 
                  <FaArrowRight className="text-brand-primary transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SUGGESTION CTA - Rounded corners and text scaling */}
      <section className="max-w-6xl mx-auto mb-20 md:mb-32 px-4 md:px-6">
        <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/5 blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter italic leading-none">
              Have a project <br className="md:hidden" /> in mind?
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto font-light leading-relaxed text-sm md:text-lg">
              AfriKin is built on the creativity of its members. If you see a gap in the community, let's build the solution together.
            </p>
            <Link to="/contact">
              <button className="bg-brand-primary text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-brand-dark transition-all shadow-xl active:scale-95">
                Submit a Proposal
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;