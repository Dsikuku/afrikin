import React, { useState, useEffect } from 'react';

import slide1 from '../assets/holdinghands.jpg';
import slide2 from '../assets/community.jpg';
import slide3 from '../assets/commitment.jpg';
import bgSocialize from '../assets/we_socialize.png';
import bgLearn from '../assets/we_learn.jpg';
import bgMove from '../assets/we_move.png';
import bgCreate from '../assets/we_create.png';
import bgCare from '../assets/we_care.png';

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const slides = [
        {url: slide1, caption: "Community Gathering"},
        {url: slide2, caption: "Art Workshop"},
        {url: slide3, caption: "Wellness Session"}
    ];
    const elements = [
        {
            title: "We Socialize",
            desc: "Joyful gatherings that build friendships",
            bgImage: bgSocialize
        },
        {
            title: "We Learn",
            desc: "Dialogues, panels, workshops, skill sharing",
            bgImage: bgLearn
        },
        {
            title: "We Move",
            desc: "Wellness, embodiment, mindfullness",
            bgImage: bgMove
        },
        {
            title: "We Create",
            desc: "Expression, imagination, art, stories",
            bgImage: bgCreate
        },
        {
            title: "We Care",
            desc: "Collectivce care, Community support",
            bgImage: bgCare
        }
    ];

    const communityRoles = [
        {
            role: "Creators",
            desc: "The visionaries behind this Circle.",
            style: "border-purple-200 bg-purple-50",
            accent: "text-purple-700"
        },
        {
            role: "Volunteers",
            desc: "The hands and hearts of AfriKin.",
            style: "border-blue-200 bg-blue-50",
            accent: "text-blue-700"
        },
        {
            role: "Supporter",
            desc: "The people & organizations who amplify our impact.",
            style: "border-purple-200 bg-purple-50",
            accent: "text-purple-700"
        },
    ];

    // Logic to auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentImage((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

  return (
    <main className="min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.url}
              alt={slide.caption}
              className="w-full h-full object-cover scale-105 transition-transform duration-[5000ms] ease-linear"
              style={{ transform: index === currentImage ? 'scale(1.1)' : 'scale(1)' }}
            />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Find Your <span className="text-blue-400">People.</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Build Your <span className="text-blue-400">Community.</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Your Circle Starts <span className="text-blue-400">Here.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
            A grassroots initiative dedicated to sustainability, social equity, and community growth.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50">
              Let's Socialize
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 z-30 flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 w-8 rounded-full transition-all ${i === currentImage ? "bg-blue-500 w-12" : "bg-white/50"}`}
            />
          ))}
        </div>
      </section>

        {/* Elements Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Elements</h2>
            <p className="text-gray-500 mt-4">The five pillars of the AfriKin community.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {elements.map((element, index) => (
                <div 
                key={index} 
                className="relative h-80 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500"
                >
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${element.bgImage})` }}
                />
                
                {/* Gradient Overlay (Makes text readable) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative h-full z-10 p-6 flex flex-col justify-end items-center text-center">
                    <div className="text-3xl mb-3 transform transition-transform group-hover:-translate-y-2">
                    {element.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{element.title}</h3>
                    <p className="text-gray-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {element.desc}
                    </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* NEW: Community Highlights Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Community</h2>
              <p className="text-gray-600">
                AfrikIn Circle isn't an organization,it's a collection of passionate people. 
                Whether you have a minute, a dollar, or a masterpiece to share, there's a place for you.
              </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {communityRoles.map((item, index) => (
                <div key={index} className={`p-6 rounded-2xl border-2 ${item.style} transition-transform hover:-translate-y-2`}>
                  <h3 className={`text-xl font-bold mb-2 ${item.accent}`}>{item.role}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto">
        <div className="text-center p-6 border rounded-xl shadow-sm">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">200+</h3>
          <p className="text-gray-500 uppercase tracking-wide">Event Attendees</p>
        </div>
        <div className="text-center p-6 border rounded-xl shadow-sm">
          <h3 className="text-4xl font-bold text-blue-600 mb-2">3</h3>
          <p className="text-gray-500 uppercase tracking-wide">Community Support</p>
        </div>
      </section>
    </main>
  );
};

export default Home;