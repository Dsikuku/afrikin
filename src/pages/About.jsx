import React from 'react';
import storyImg from '../assets/our_story.jpg'; 
import commitmentImg from '../assets/our_commitment.jpg';
import hopeImg from '../assets/our_hope.jpg';
import founder1 from '../assets/founder1.jpg';
import founder2 from '../assets/founder2.jpg';
import founder3 from '../assets/founder3.jpg';

const About = () => {
  const sections = [
    {
      title: "Our Story",
      content: "This Circle started from a shared love of community and connection. Our founders experienced firsthand how simple moments like BBQs, potlucks, and open-door gatherings could turn strangers into friends. Inspired by these experiences, we created AfriKin Circle—a name that blends our roots (“Afri”) with the spirit of family (“Kin”). We’re building a welcoming space where people share food, laughter, and support.",
      image: storyImg,
      reverse: false,
    },
    {
      title: "Our Commitment",
      content: "To weave circles of connection that celebrate our cultures, support our growth, and honor our voices across the diaspora.",
      image: commitmentImg,
      reverse: true,
    },
    {
      title: "Our Hope",
      content: "A future where shared learning, creativity, and collective care power a more connected and resilient community.",
      image: hopeImg,
      reverse: false,
    }
  ];

  const founders = [
    { name: "Lulu Kara", role: "Founder & Community Lead", image: founder1 },
    { name: "Damian Sikuku", role: "Co-Founder", image: founder2 },
    { name: "Nana Koomson", role: "Co-Founder", image: founder3 },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. PAGE HEADER - Adjusted for Fixed Navbar */}
      <section className="bg-slate-900 pt-32 pb-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-brand-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Our Identity</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            About AfriKin<span className="text-brand-primary">.</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            A community-led initiative dedicated to the flow of movement, care, and creativity.
          </p>
        </div>
      </section>

      {/* 2. NARRATIVE SECTIONS */}
      <section className="py-12">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 px-6 py-20 max-w-7xl mx-auto ${
              section.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-primary/5 rounded-[2rem] transform rotate-2 group-hover:rotate-0 transition-all duration-700 -z-10" />
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  {section.title}
                </h2>
                <div className="h-1.5 w-20 bg-brand-primary rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 3. MEET THE CIRCLE SECTION */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Meet the Circle</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto font-light">
              The creators and hearts behind AfriKin who shape our everyday moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8 inline-block">
                  {/* Outer Glow on Hover */}
                  <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Founder Image */}
                  <div className="relative overflow-hidden rounded-full w-56 h-56 md:w-64 md:h-64 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-8 border-white">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-1">{founder.name}</h3>
                <p className="text-brand-primary font-bold uppercase tracking-[0.2em] text-[10px]">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;