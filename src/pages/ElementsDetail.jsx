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
import s2 from '../assets/s2.JPG'; // Note: Keep an eye on .JPG vs .jpg
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
            <section className="bg-slate-900 py-16 md:py-24 px-6 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Our Elements</h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                    Explore how we build, grow, and sustain our community in Toronto.
                </p>
            </section>

            {/* Details Section Container */}
            <section className="max-w-7xl mx-auto py-12 md:py-24 px-4 sm:px-6 space-y-24 md:space-y-44">
                {details.map((item, index) => (
                    <div key={index} className="space-y-12 md:space-y-16">
                        
                        {/* 1. Main Content: Stacks Image on top for Mobile, Zig-Zag for Desktop */}
                        <div className={`flex flex-col gap-10 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            
                            {/* Image Side */}
                            <div className="w-full md:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-blue-100 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300 -z-10" />
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="rounded-2xl md:rounded-3xl shadow-xl h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover" 
                                    />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                                <span className="inline-block text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm bg-blue-50 px-3 py-1 rounded-full">
                                    {item.subtitle}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                                    {item.title}
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                                
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
                                    {item.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-3 text-gray-700 font-medium">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 2. Responsive Gallery Grid */}
                        <div className="pt-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-gray-200 flex-grow"></div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    {item.title} Highlights
                                </h4>
                                <div className="h-px bg-gray-200 flex-grow"></div>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5">
                                {item.gallery.map((img, imgIndex) => (
                                    <div 
                                        key={imgIndex} 
                                        className="overflow-hidden rounded-xl h-36 sm:h-44 md:h-56 group relative cursor-pointer shadow-sm hover:shadow-xl transition-all"
                                        onClick={() => {
                                            setActiveGallery(item.gallery.map(src => ({ src })));
                                            setCurrentIndex(imgIndex);
                                            setOpen(true);
                                        }}
                                    >
                                        <img 
                                            src={img} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            alt={`${item.title} moment`} 
                                        />
                                        <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white text-xs font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">View</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {index !== details.length - 1 && (
                            <div className="pt-20 md:pt-32 flex justify-center">
                                <div className="w-24 h-1 bg-gray-100 rounded-full"></div>
                            </div>
                        )}
                    </div>
                ))}
            </section>

            {/* Lightbox Integration */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={currentIndex}
                slides={activeGallery}
                controller={{ closeOnBackdropClick: true, closeOnPullDown: true }}
                on={{ click: () => setOpen(false) }}
                animation={{ fade: 300 }}
            />
        </div>
    );
};

export default ElementsDetail;