import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Asset Imports
import bgSocialize from '../assets/we_socialize.png';
import bgLearn from '../assets/we_learn.jpg';
import bgMove from '../assets/we_move.png';
import bgCreate from '../assets/we_create.png';
import bgCare from '../assets/we_care.png';

// Gallery Imports
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.JPG'; 
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import l1 from '../assets/l1.JPG';
import l2 from '../assets/l2.jpg';
import l3 from '../assets/l3.jpg';
import l4 from '../assets/l4.JPG';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpeg';
import c3 from '../assets/c3.JPG';
import c4 from '../assets/c4.JPG';
import m1 from '../assets/m1.JPG';
import m2 from '../assets/m2.JPG';  
import m3 from '../assets/m3.JPG';

const ElementsDetail = () => {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeGallery, setActiveGallery] = useState([]);
    
    const details = [
        {
            title: "We Socialize",
            subtitle: "Community begins with presence",
            description: "We gather through shared food, conversation, laughter, and those little moments that remind us: we’re not alone. Our social mixers are AfriKin’s core spaces to make friends, unwind, and feel connected.",
            image: bgSocialize,
            features: ["Game Nights", "Potlucks & BBQ's", "Community Mixers", "Movie Nights"],
            gallery: [s1, s2, s3, s4]
        },
        {
            title: "We Learn",
            subtitle: "Knowledge when shared, is power",
            description: "Through our Kinnect Series we gather to exchange ideas and explore the intersections of culture, identity, and opportunity. From career panels to storytelling workshops, learning at AfriKin is rooted in lived experience.",
            image: bgLearn,
            features: ["Skills Workshops", "Guest Speaker Panels", "Community Library"],
            gallery: [l1, l2, l3, l4]
        },
        {
            title: "We Move",
            subtitle: "Our bodies deserve joy too",
            description: "This pillar invites us to recharge, release and reconnect with ourselves through movement and flow. We support one another in finding grounding and rhythm through stretching, dancing, and sports.",
            image: bgMove,
            features: ["Field Days/Hikes", "Chai & Chill", "Dance Workshops", "Nyama Choma Nights"],
            gallery: [m1, m2, m3, s2]
        },
        {
            title: "We Create",
            subtitle: "Expression keeps our stories alive",
            description: "Here, we use our voices, hands, and hearts to imagine and shape the world around us. Through art, words, and shared creativity, we honour our cultures and dream up new possibilities together.",
            image: bgCreate,
            features: ["Book Club", "Art Showcases", "Creative Collabs", "Open Mic Nights"],
            gallery: [c1, c2, c3, c4]
        },
        {
            title: "We Care",
            subtitle: "Care is Action",
            description: "We show up for our community through acts of kindness, mutual aid, and tending to the environment. From our Community Garden to donation drives, this is where compassion meets action.",
            image: bgCare,
            features: ["Community Garden", "Donation Drives", "Mutual Aid", "Clean up Days"],
            gallery: [s1, l1, s2, l2]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 py-20 md:py-32 px-6 text-center text-white relative">
                <div className="absolute inset-0 bg-brand-dark/5 pointer-events-none"></div>
                <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight relative z-10">Our Elements</h1>
                <p className="text-lg md:text-2xl opacity-80 max-w-2xl mx-auto font-light relative z-10">
                    Explore how we build, grow, and sustain our community in Toronto.
                </p>
                <div className="mt-8 h-1.5 w-24 bg-brand-primary mx-auto rounded-full"></div>
            </section>

            {/* Details Section Container */}
            <section className="max-w-7xl mx-auto py-16 md:py-32 px-4 sm:px-6 space-y-32 md:space-y-56">
                {details.map((item, index) => (
                    <div key={index} className="space-y-16">
                        
                        {/* 1. Main Content: Zig-Zag for Desktop */}
                        <div className={`flex flex-col gap-12 md:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            
                            {/* Image Side */}
                            <div className="w-full md:w-1/2">
                                <div className="relative group">
                                    {/* Decorative Brand Accent - Rotates opposite of the index for visual variety */}
                                    <div className={`absolute -inset-4 bg-brand-light/10 rounded-3xl transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} group-hover:rotate-0 transition-transform duration-500 -z-10`} />
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="rounded-3xl shadow-2xl h-[350px] sm:h-[450px] md:h-[550px] w-full object-cover border-4 border-white" 
                                    />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                                <div className="space-y-4">
                                    <span className="inline-block text-brand-dark font-bold tracking-widest uppercase text-xs md:text-sm bg-brand-primary/10 px-4 py-1.5 rounded-full">
                                        {item.subtitle}
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                                        {item.title}
                                    </h2>
                                </div>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                                    {item.description}
                                </p>
                                
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 text-left">
                                    {item.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-4 text-gray-800 font-semibold group/item">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/20 text-brand-dark flex items-center justify-center text-sm group-hover/item:bg-brand-primary group-hover/item:text-white transition-colors">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 2. Responsive Gallery Grid */}
                        <div className="pt-12">
                            <div className="flex items-center gap-6 mb-10">
                                <h4 className="flex-shrink-0 text-sm font-black text-gray-300 uppercase tracking-[0.3em]">
                                    {item.title} Highlights
                                </h4>
                                <div className="h-px bg-gray-100 flex-grow"></div>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                                {item.gallery.map((img, imgIndex) => (
                                    <div 
                                        key={imgIndex} 
                                        className="overflow-hidden rounded-2xl h-40 sm:h-48 md:h-64 group relative cursor-pointer shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1"
                                        onClick={() => {
                                            setActiveGallery(item.gallery.map(src => ({ src })));
                                            setCurrentIndex(imgIndex);
                                            setOpen(true);
                                        }}
                                    >
                                        <img 
                                            src={img} 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                            alt={`${item.title} moment`} 
                                        />
                                        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white text-sm font-bold bg-brand-primary/80 px-4 py-2 rounded-full backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform">View Moment</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Lightbox Integration */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={currentIndex}
                slides={activeGallery}
                controller={{ closeOnBackdropClick: true }}
                animation={{ fade: 400 }}
            />
        </div>
    );
};

export default ElementsDetail;