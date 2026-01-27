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
      content: "This Circle started from a shared love of community and connection. Our founders experienced firsthand how simple moments like BBQs, potlucks, game nights, and open-door gatherings, could turn strangers into friends and create lasting bonds. Inspired by these experiences, we created AfriKin Circle, a name that blends our roots (“Afri”) with the spirit of family (“Kin”). We’re building a welcoming space—a home away from home—where people come together to share food, laughter, and support in a vibrant city full of possibilities.",
      image: storyImg,
      reverse: false,
    },
    {
      title: "Our Commitment",
      content: "To weave circles of connection that celebrate our cultures, support our growth, and honor our voices.",
      image: commitmentImg,
      reverse: true,
    },
    {
      title: "Our Hope",
      content: "A future where shared learning, creativity, and care power a more connected and resilient Black diaspora.",
      image: hopeImg,
      reverse: false,
    }
  ];

  const founders = [
    {
        name: "Lulu Kara",
        role: "Founder & Community Lead",
        image: founder1
    },
    {
        name: "Damian Sikuku",
        role: "Co-Founder",
        image: founder2
    },
    {
        name: "Nana Koomson",
        role: "Co-Founder",
        image: founder3
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 py-24 px-6 text-center text-white relative overflow-hidden">
        {/* Subtle Brand Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">About AfriKin</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light relative z-10">
          A community-led initiative dedicated to the flow of movement, care, and creativity.
        </p>
      </section>

      {/* Narrative Sections */}
      <section className="py-12 overflow-hidden">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-16 px-6 py-20 max-w-7xl mx-auto ${
              section.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                {/* Decorative Brand Accent (Changed from blue-100 to brand-primary/10) */}
                <div className="absolute -inset-4 bg-brand-primary/10 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-all duration-500 -z-10" />
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-[450px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 border-l-8 border-brand-primary pl-6">
                {section.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* MEET THE CIRCLE SECTION */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet the Circle</h2>
            <div className="h-2 w-24 bg-brand-primary mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get to know the creators, volunteers, and supporters who shape our projects, events, and everyday moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {founders.map((founder, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8 inline-block">
                  {/* Decorative Brand Ring */}
                  <div className="absolute inset-0 border-4 border-brand-primary rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
                  
                  {/* Founder Image */}
                  <div className="overflow-hidden rounded-full w-48 h-48 md:w-60 md:h-60 shadow-2xl border-4 border-white">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                <p className="text-brand-dark font-bold uppercase tracking-widest text-sm">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;