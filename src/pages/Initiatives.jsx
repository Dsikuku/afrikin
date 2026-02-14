import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Book Club",
    category: "Culture",
    description: "A sanctuary for dialogue. We explore diverse stories that challenge perspectives and strengthen identity.",
    status: "Ongoing",
    isReady: true 
  },
  {
    id: 2,
    title: "Kinnect Series",
    category: "Networking",
    description: "Bringing together young professionals and community leaders to exchange ideas, collaborate, and grow.",
    status: "Ongoing",
    isReady: true 
  },
  {
    id: 3,
    title: "Resource Hub",
    category: "Social Support",
    description: "Newcomer + Youth: A curated list of services and organizations for housing, education, and cultural integration.",
    status: "In Progress",
    isReady: false 
  },
  {
    id: 4,
    title: "Community Love",
    category: "Community",
    description: "Our clothing drives & donation campaigns are making an impact. Join us in spreading love and support!",
    status: "In Progress",
    isReady: false 
  } 
];

const Initiatives = () => {
  const createSlug = (text) => text.toLowerCase().trim().replace(/\s+/g, '-');

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-slate-900 pt-32 pb-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -ml-48 -mt-48"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-brand-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block animate-pulse">Our Methodology</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Our Initiatives<span className="text-brand-primary">.</span></h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            Building impactful projects that foster community empowerment and lasting change.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`group border rounded-[2rem] p-8 transition-all duration-500 flex flex-col justify-between relative
                ${project.isReady 
                  ? 'border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1' 
                  : 'border-dashed border-slate-200 bg-slate-50/50'
                }`}
            >
              <div>
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                  project.isReady ? 'text-brand-primary bg-brand-primary/5' : 'text-slate-400 bg-slate-100'
                }`}>
                  {project.category}
                </span>
                <h3 className={`text-2xl font-black mt-6 mb-3 tracking-tight transition-colors ${
                  project.isReady ? 'text-slate-900 group-hover:text-brand-primary' : 'text-slate-300'
                }`}>
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-50">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    project.status === 'Ongoing' ? 'bg-brand-primary animate-pulse' : 'bg-amber-400'
                  }`}></span>
                  {project.status}
                </span>
                
                {project.isReady ? (
                  <Link 
                    to={project.title === "Kinnect Series" ? "/initiatives/kinnect-series" : `/initiatives/${createSlug(project.title)}`} 
                    className="flex items-center gap-2 text-brand-dark font-black text-[9px] uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Learn More <FaArrowRight className="text-brand-primary" />
                  </Link>
                ) : (
                  <Link to="/contact" className="text-slate-400 font-bold text-[9px] uppercase tracking-widest hover:text-brand-primary transition-colors">
                    Partner
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Initiatives;