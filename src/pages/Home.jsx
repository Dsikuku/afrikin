import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router

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
        { title: "We Learn", desc: "Dialogues, panels, workshops, skill sharing", bgImage: bgLearn},
        { title: "We Move", desc: "Wellness, embodiment, mindfullness", bgImage: bgMove },
        { title: "We Create", desc: "Expression, imagination, art, stories", bgImage: bgCreate },
        { title: "We Care", desc: "Collective care, Community support", bgImage: bgCare }
    ];

    const communityRoles = [
        { role: "Creators", desc: "The visionaries behind this Circle.", style: "border-brand-primary/20 bg-brand-light/5", accent: "text-brand-primary" },
        { role: "Volunteers", desc: "The hands and hearts of AfriKin.", style: "border-brand-dark/20 bg-brand-dark/5", accent: "text-brand-dark" },
        { role: "Supporters", desc: "The people & organizations who amplify our impact.", style: "border-brand-primary/20 bg-brand-light/5", accent: "text-brand-primary" },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <main className="min-h-screen">
            {/* Dynamic Hero Section */}
            <section className="relative h-[85vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"}`}
                    >
                        <div className="absolute inset-0 bg-black/60 z-10" />
                        <img
                            src={slide.url}
                            alt={slide.caption}
                            className="w-full h-full object-cover transition-transform duration-[5000ms] ease-linear"
                            style={{ transform: index === currentImage ? 'scale(1.1)' : 'scale(1)' }}
                        />
                    </div>
                ))}

                <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-2 drop-shadow-lg leading-tight">
                        Find Your <span className="text-brand-primary">People.</span>
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-2 drop-shadow-lg leading-tight">
                        Build Your <span className="text-brand-primary">Community.</span>
                    </h1>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
                        Your Circle Starts <span className="text-brand-primary">Here.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md font-light">
                        A grassroots initiative dedicated to sustainability, social equity, and community growth.
                    </p>
                    <Link to="/socials">
                        <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all shadow-xl hover:shadow-brand-primary/30">
                            Let's Socialize
                        </button>
                    </Link>
                </div>

                <div className="absolute bottom-8 z-30 flex gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentImage ? "bg-brand-primary w-10" : "bg-white/40 w-6"}`} />
                    ))}
                </div>
            </section>

            {/* Elements Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Elements</h2>
                        <div className="w-16 h-1 bg-brand-primary mx-auto mt-4 rounded-full"></div>
                        <p className="text-gray-500 mt-4 text-base md:text-lg">The five pillars of the AfriKin community.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                        {elements.map((element, index) => (
                            <div key={index} className="relative h-72 sm:h-80 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${element.bgImage})` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                <div className="relative h-full z-10 p-6 flex flex-col justify-end items-center text-center">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{element.title}</h3>
                                    <p className="text-gray-200 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {element.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/3 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Community</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                AfriKin Circle isn't just an organization—it's a collection of passionate people. 
                                There's a place for you to share your time, resources, or talents.
                            </p>
                        </div>
                        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {communityRoles.map((item, index) => (
                                <div key={index} className={`p-8 rounded-2xl border ${item.style} transition-all hover:-translate-y-2 hover:shadow-lg hover:border-brand-primary/50`}>
                                    <h3 className={`text-xl font-bold mb-3 ${item.accent}`}>{item.role}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="text-center p-10 border border-gray-100 rounded-3xl shadow-sm bg-white transition-all hover:shadow-xl hover:border-brand-primary/20 group">
                        <h3 className="text-5xl font-extrabold text-brand-dark mb-2 group-hover:scale-110 transition-transform">200+</h3>
                        <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm">Event Attendees</p>
                    </div>
                    <div className="text-center p-10 border border-gray-100 rounded-3xl shadow-sm bg-white transition-all hover:shadow-xl hover:border-brand-primary/20 group">
                        <h3 className="text-5xl font-extrabold text-brand-dark mb-2 group-hover:scale-110 transition-transform">3</h3>
                        <p className="text-gray-400 font-semibold uppercase tracking-widest text-sm">Community Pillars</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;