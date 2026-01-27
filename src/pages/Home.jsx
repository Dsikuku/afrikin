import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        { title: "We Socialize", desc: "Joyful gatherings that build friendships", bgImage: bgSocialize },
        { title: "We Learn", desc: "Dialogues, workshops, skill sharing", bgImage: bgLearn},
        { title: "We Move", desc: "Wellness, embodiment, mindfullness", bgImage: bgMove },
        { title: "We Create", desc: "Expression, imagination, art, stories", bgImage: bgCreate },
        { title: "We Care", desc: "Collective care, Community support", bgImage: bgCare }
    ];

    const communityRoles = [
        { role: "Creators", desc: "The visionaries behind this Circle.", style: "border-gray-200 bg-white", accent: "text-brand-primary" },
        { role: "Volunteers", desc: "The hands and hearts of AfriKin.", style: "border-gray-200 bg-white", accent: "text-brand-dark" },
        { role: "Supporters", desc: "Organizations who amplify our impact.", style: "border-gray-200 bg-white", accent: "text-brand-primary" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <main className="min-h-screen font-sans antialiased text-slate-900">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-900">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="absolute inset-0 bg-black/40 z-10" />
                        <img 
                            src={slide.url} 
                            alt={slide.caption} 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                ))}

                <div className="relative z-20 text-center px-6 max-w-4xl">
                    <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                        Find Your <span className="text-brand-primary">People.</span> <br />
                        Build Your <span className="text-brand-primary">Community.</span> <br />
                        Your Circle Starts <span className="text-brand-primary">Here.</span> 
                    </h1>
                    
                    <p className="text-base md:text-lg text-gray-200 mb-10 max-w-xl mx-auto font-light leading-relaxed">
                        A grassroots initiative dedicated to sustainability, social equity, and community growth.
                    </p>
                    
                    <Link to="/socials">
                        <button className="bg-brand-primary text-white px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-brand-dark transition-all shadow-xl active:scale-95">
                            Let's Socialize
                        </button>
                    </Link>
                </div>

                <div className="absolute bottom-8 z-30 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-brand-primary to-transparent animate-pulse" />
                </div>
            </section>

            {/* 2. ELEMENTS SECTION */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold border-brand-primary md:border-l-4 md:pl-4">Our Elements</h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        {elements.map((element, index) => (
                            <div key={index} className="relative h-64 rounded-2xl overflow-hidden group shadow-sm">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                                    style={{ backgroundImage: `url(${element.bgImage})` }} 
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                                <div className="relative h-full z-10 p-5 flex flex-col justify-end">
                                    <h3 className="text-lg font-bold text-white">{element.title}</h3>
                                    <p className="text-gray-200 text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {element.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. COMMUNITY SECTION - Button now at the bottom */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Community</h2>
                        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
                            AfriKin Circle isn't just an organization, it's a collection of passionate people. 
                            There's a place for you to share your time, resources, or talents.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                        {communityRoles.map((item, index) => (
                            <div key={index} className="p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-shadow">
                                <h3 className={`text-xl font-bold mb-3 ${item.accent}`}>{item.role}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* About Button - Positioned Under Cards */}
                    <div className="flex justify-center">
                        <Link to="/about">
                            <button className="inline-flex items-center gap-2 text-brand-dark border-2 border-brand-dark/20 px-10 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all group">
                                Our Story & Mission
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. STATS & IMPACT SECTION */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-5xl mx-auto relative">
                    {/* Subtle Decorative Background Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
                        
                        {/* Stat 1 */}
                        <div className="text-center group">
                            <div className="mb-2">
                                <span className="text-5xl md:text-6xl font-black text-brand-dark tracking-tighter transition-transform duration-500 group-hover:scale-110 inline-block">
                                    200<span className="text-brand-primary">+</span>
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-2">Global Community</span>
                                <p className="text-xs text-slate-500 max-w-[150px] leading-relaxed">Active attendees participating in our monthly circles.</p>
                            </div>
                        </div>

                        {/* Divider (Hidden on Mobile) */}
                        <div className="hidden md:block h-16 w-px bg-slate-100 mx-auto" />

                        {/* Stat 2 */}
                        <div className="text-center group">
                            <div className="mb-2">
                                <span className="text-5xl md:text-6xl font-black text-brand-dark tracking-tighter transition-transform duration-500 group-hover:scale-110 inline-block">
                                    3
                                </span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold mb-2">Core Pillars</span>
                                <p className="text-xs text-slate-500 max-w-[150px] leading-relaxed">Sustainability, Social Equity, and Collective Care.</p>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Tagline */}
                    <div className="mt-16 text-center">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-brand-primary font-black opacity-60">
                            Growing together since 2023
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;