import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

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
    description: "Our book club is a place to come together, explore diverse stories, and engage in meaningful conversations. We create a space to learn, grow, and connect one page at a time.",
    status: "Ongoing"
  }
];

const Initiatives = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 py-24 px-6 text-white text-center relative overflow-hidden">
        {/* Brand Accent Blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 relative z-10 tracking-tight">Our Initiatives</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80 font-light relative z-10 leading-relaxed">
          At AfriKin Circle, we believe in building impactful projects that foster community, empowerment, and change. Explore what’s in progress and what’s on the horizon.
        </p>
        <div className="mt-8 h-1.5 w-24 bg-brand-primary mx-auto rounded-full"></div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between bg-white relative hover:-translate-y-2"
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark bg-brand-primary/10 px-4 py-1.5 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4 group-hover:text-brand-dark transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex justify-between items-center mt-4 pt-6 border-t border-gray-50">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full animate-pulse ${
                    project.status === 'Ongoing' ? 'bg-brand-primary' : 'bg-brand-light'
                  }`}></span>
                  {project.status}
                </span>
                
                <button className="flex items-center gap-2 text-brand-dark font-bold text-sm hover:gap-3 transition-all">
                  Get Involved <FaArrowRight className="text-brand-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggestion CTA */}
      <section className="max-w-5xl mx-auto mb-20 px-6">
        <div className="bg-slate-50 rounded-[3rem] p-12 text-center border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have an idea for a project?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            AfriKin is built on the creativity of its members. If you see a gap in the community you want to fill, let's talk.
          </p>
          <button className="bg-brand-dark text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-primary transition-all shadow-lg hover:shadow-brand-primary/20">
            Submit a Proposal
          </button>
        </div>
      </section>
    </div>
  );
};

export default Initiatives;