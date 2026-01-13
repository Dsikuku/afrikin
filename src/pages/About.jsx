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
      content: "This Circle started from a shared love of community and connection. Our founders experienced firsthand how simple moments like BBQs, potlucks, game nights, and open-door gatherings, could turn strangers into friends and create lasting bonds. Inspired by these experiences, we created AfriKin Circle, a name that blends our roots (“Afri”) with the spirit of family (“Kin”). We’re building a welcoming space a home away from home where people come together to share food, laughter, and support in a vibrant city full of possibilities.",
      image: storyImg,
      reverse: false,
    },
    {
      title: "Our Commitment",
      content: "To weave circles of connection that celebrate our cultures, support our growth, and honor our voices.",
      image: commitmentImg,
      reverse: true, // This will flip the image to the other side
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
        role: "Co-Founder & Community Lead",
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
      <section className="bg-slate-900 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About AfriKin</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A community-led initiative dedicated to the flow of movement, care, and creativity.
        </p>
      </section>

      {/* Narrative Sections */}
      <section className="py-12">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-12 px-6 py-16 max-w-7xl mx-auto ${
              section.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-300 -z-10" />
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">
                {section.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* MEET THE CIRCLE SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Circle</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Get to know the creators, volunteers, and supporters who shape our projects, events, and everyday moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 inline-block">
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 border-2 border-blue-600 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Founder Image */}
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                <p className="text-blue-600 font-medium mb-4 uppercase tracking-wider text-sm">{founder.role}</p>
                
                {/* Social Placeholder 
                <div className="mt-6 flex justify-center gap-4 text-gray-400">
                  <span className="hover:text-blue-600 cursor-pointer transition">LinkedIn</span>
                  <span className="hover:text-pink-600 cursor-pointer transition">Instagram</span>
                </div>
                */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;