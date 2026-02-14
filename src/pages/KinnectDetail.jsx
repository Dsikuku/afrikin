import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaRocket } from 'react-icons/fa';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Asset imports
import vol1Hero from '../assets/Kinnect1.jpg';
import vol2Hero from '../assets/Kinnect2.jpg';

const KinnectDetail = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeGallery, setActiveGallery] = useState([]);

    const events = [
        {
            title: "Kinnect Vol. 1: Link Up & Level Up",
            date: "March 2025",
            themeIcon: <FaRocket className="text-brand-primary" />,
            description: "Our socially powered networking experience designed to connect and boost your personal and professional success. We moved beyond small talk to foster genuine ecosystem growth within the diaspora.",
            image: vol1Hero,
            highlights: ["Ecosystem Mapping", "Professional Success Frameworks", "High-Value Networking"],
            gallery: [vol1Hero, vol2Hero] 
        },
        {
            title: "Kinnect Vol. 2: Cyber Security Inside Scoop",
            date: "August 2025",
            themeIcon: <FaShieldAlt className="text-brand-primary" />,
            description: "An intensive look into one of the fastest-growing careers. We explored existing roles, high demand sectors, and how to transition into the field—regardless of whether you have a tech background or not.",
            image: vol2Hero,
            highlights: ["Career Transition Roadmap", "Industry Demand Analysis", "Non-Tech Entry Points"],
            gallery: [vol2Hero, vol1Hero]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* 1. HERO SECTION */}
            <section className="bg-slate-900 pt-32 pb-24 px-6 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Link to="/initiatives" className="inline-flex items-center gap-2 text-brand-primary font-black text-[10px] uppercase tracking-[0.3em] mb-8 hover:text-white transition-colors group">
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Initiatives
                    </Link>

                    <span className="text-brand-primary uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">Professional Growth</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic">Kinnect Series<span className="text-brand-primary">.</span></h1>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
                        Curated experiences bridging the gap between social connection and professional mastery.
                    </p>
                </div>
            </section>

            {/* 2. EVENT TIMELINE SECTION */}
            <section className="max-w-7xl mx-auto py-24 px-6 space-y-48">
                {events.map((event, index) => (
                    <div key={index} className="space-y-16">
                        <div className={`flex flex-col gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            {/* Visual */}
                            <div className="w-full md:w-1/2">
                                <div className="relative group cursor-pointer" onClick={() => {
                                        setActiveGallery(event.gallery.map(src => ({ src })));
                                        setCurrentIndex(0);
                                        setOpen(true);
                                    }}>
                                    <div className="absolute -inset-2 bg-brand-primary/5 rounded-[2rem] transform rotate-1 group-hover:rotate-0 transition-transform duration-500 -z-10" />
                                    <img 
                                        src={event.image} 
                                        alt={event.title} 
                                        className="rounded-[2rem] shadow-xl h-[450px] w-full object-cover border-2 border-white grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="bg-white/90 text-slate-900 px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">View Moments</span>
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-slate-50 rounded-xl">
                                        {event.themeIcon}
                                    </div>
                                    <span className="text-brand-primary font-black tracking-widest uppercase text-[10px]">{event.date}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 italic tracking-tighter leading-[1.1]">{event.title}</h2>
                                <p className="text-slate-600 text-lg font-light leading-relaxed">{event.description}</p>
                                
                                <ul className="grid grid-cols-1 gap-3 pt-4 border-t border-slate-50">
                                    {event.highlights.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-800 font-bold text-[10px] uppercase tracking-widest">
                                            <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* 3. CTA */}
            <section className="max-w-5xl mx-auto pb-24 px-6">
                <div className="bg-slate-950 rounded-[3rem] p-12 text-center text-white">
                    <h3 className="text-3xl font-black mb-6 italic">Ready for Vol. 3?</h3>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto font-light">Join our network to be the first to know when our next professional mixer drops.</p>
                    <Link to="/contact">
                        <button className="bg-brand-primary hover:bg-white hover:text-brand-dark px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all">
                            Get Notified
                        </button>
                    </Link>
                </div>
            </section>

            <Lightbox open={open} close={() => setOpen(false)} index={currentIndex} slides={activeGallery} />
        </div>
    );
};

export default KinnectDetail;