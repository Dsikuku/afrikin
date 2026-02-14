import React, { useState } from 'react';
import { FaCalendarAlt, FaHistory, FaArrowRight, FaMapMarkerAlt, FaClock, FaInstagram, FaPlus } from 'react-icons/fa';
import Lightbox from "yet-another-react-lightbox"; 
import "yet-another-react-lightbox/styles.css";

// Asset imports
import ChaiChill from '../assets/events/Chai_Chill.jpg';
import CocktailMixology from '../assets/events/Mixology.png';
import AfroHouseSipPaint from '../assets/events/Sip&Paint.png';
import KinnectSeriesLinkUp from '../assets/events/Kinnect1.jpg';
import AfriKinFieldDay from '../assets/events/FieldDay.jpg';
import NyamaChomaNight from '../assets/events/NyamaChoma1.jpg';
import KinReadsBookClub from '../assets/events/KinReadsBookclub.jpg';
import MovieNight from '../assets/events/MovieNight.jpg';
import YogaSession from '../assets/events/Yoga.jpg';
import NyamaChomaDancehall from '../assets/events/NyamaChoma2.jpg';
import KinnectSeries from '../assets/events/Kinnect2.jpg';
import g1 from '../assets/gallery/g1.jpg';
import g2 from '../assets/gallery/g2.jpg';
import g3 from '../assets/gallery/g3.jpg'; 
import g4 from '../assets/gallery/g4.jpg';
import g5 from '../assets/gallery/g5.jpg';
import g6 from '../assets/gallery/g6.jpg';
import g7 from '../assets/gallery/g7.jpg';
import g8 from '../assets/gallery/g8.jpg';
import g9 from '../assets/gallery/g9.jpg';

const Socials = () => {
  const [view, setView] = useState('upcoming');
  const [index, setIndex] = useState(-1);
  const [visibleRows, setVisibleRows] = useState(1); // Controls how many rows of 3 are shown

  const events = {
    upcoming: [
      {
        title: "Community Potluck",
        date: "Feb 15, 2026",
        time: "2:00 PM - 6:00 PM",
        location: "TBA - Toronto",
        desc: "Bring a dish and your favorite lawn chair. A casual afternoon to connect and socialize.",
        tag: "We Socialize"
      },
      {
        title: "Coffee Night & Open Mic",
        date: "March 02, 2026",
        time: "7:00 PM",
        location: "Distillery District Studio",
        desc: "A night of expression and warmth. Share a poem or a song with the circle.",
        tag: "We Create"
      },
      {
        title: "AfriKin Wellness Morning",
        date: "April 12, 2026",
        time: "9:00 AM",
        location: "High Park",
        desc: "A guided meditation and light yoga session to ground the community.",
        tag: "We Heal"
      }
    ],
    past: [
      { title: "Cocktail & Mixology", date: "Nov 14, 2025", summary: "A cozy evening of cocktail making and kinnection.", image: CocktailMixology, stats: "45+ Attendees" },
      { title: "AfroHouse Sip & Paint", date: "Nov 09, 2025", summary: "An afternoon of color, connection & calm.", image: AfroHouseSipPaint, stats: "60+ Attendees" },
      { title: "Kinnect Series 2", date: "Nov 09, 2025", summary: "Thinking about a career in Cybersecurity.", image: KinnectSeries, stats: "20+ Attendees" },
      { title: "AfriKin Field Day", date: "Aug 09, 2025", summary: "Outdoor games. Sunshine, Good company.", image: AfriKinFieldDay, stats: "20+ Attendees" },
      { title: "Nyama Choma Night", date: "Jun 06, 2025", summary: "Afrobeat Edition ft. Grills & Vibes.", image: NyamaChomaNight, stats: "35+ Attendees" },
      { title: "KinReads Book Club", date: "May 31, 2025", summary: "Annual community grill and chill session.", image: KinReadsBookClub, stats: "5+ Attendees" },
    ]
  };

  // Full Gallery Array
  const archiveGallery = [
    { src: g1, title: "Unity" }, { src: g2, title: "Laughter" }, { src: g3, title: "Culture" },
    { src: g4, title: "Circle" }, { src: g5, title: "Joy" }, { src: g6, title: "Growth" },
    { src: g7, title: "Spirit" }, { src: g8, title: "Vibe" }, { src: g9, title: "Kinnect" },
  ];

  const itemsToShow = visibleRows * 3;

  const handleLoadMore = () => {
    setVisibleRows(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white pb-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-900 py-32 px-6 text-center text-white relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative z-10">
          <span className="text-brand-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block animate-pulse">Our Work</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Socials<span className="text-brand-primary">.</span></h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">The heartbeat of AfriKin. Explore our journey through connection and community.</p>
        </div>
      </section>

      {/* 2. NAVIGATION TOGGLE */}
      <div className="max-w-7xl mx-auto px-6 -translate-y-10 flex justify-center z-20 relative">
        <div className="inline-flex p-1.5 bg-white border border-gray-100 shadow-2xl rounded-3xl">
          <button onClick={() => setView('upcoming')} className={`flex items-center gap-2 px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 ${view === 'upcoming' ? 'bg-brand-dark text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}><FaCalendarAlt size={12} /> Upcoming</button>
          <button onClick={() => setView('past')} className={`flex items-center gap-2 px-8 py-3.5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all duration-300 ${view === 'past' ? 'bg-brand-dark text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50'}`}><FaHistory size={12} /> Memories</button>
        </div>
      </div>

      {/* 3. EVENTS GRID */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {(view === 'upcoming' ? events.upcoming : events.past).map((event, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
              {view === 'past' && (
                <div className="h-72 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
              <div className="p-10 flex flex-col flex-grow">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-dark bg-brand-primary/10 px-4 py-1.5 rounded-full w-fit mb-6">{event.tag || event.date}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">{event.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">{event.desc || event.summary}</p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-brand-dark font-black text-[11px] uppercase tracking-widest">{event.stats || event.time}</span>
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-brand-primary transition-colors"><FaArrowRight size={12} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DYNAMIC ARCHIVE GRID (LOAD MORE) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">The Archive<span className="text-brand-primary">.</span></h2>
            <p className="text-gray-400 font-light italic">Captured moments from our circle.</p>
          </div>
          <div className="hidden md:block h-px bg-gray-100 flex-grow mx-10"></div>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Showing {Math.min(itemsToShow, archiveGallery.length)} of {archiveGallery.length}</div>
        </div>

        {/* Row logic: Grid with fixed 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 transition-all duration-700">
          {archiveGallery.slice(0, itemsToShow).map((img, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group cursor-zoom-in animate-fade-in"
              onClick={() => setIndex(idx)}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8">
                <h4 className="text-white font-bold text-xl">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {itemsToShow < archiveGallery.length && (
          <div className="mt-20 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="group flex items-center gap-4 bg-white border-2 border-slate-900 text-slate-900 px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-900 hover:text-white transition-all shadow-xl active:scale-95"
            >
              <FaPlus className="group-hover:rotate-180 transition-transform duration-500" />
              Load More Moments
            </button>
          </div>
        )}
      </section>

      {/* LIGHTBOX */}
      <Lightbox slides={archiveGallery.map(img => ({ src: img.src }))} open={index >= 0} index={index} close={() => setIndex(-1)} styles={{ container: { backgroundColor: "rgba(10, 10, 10, 0.99)" } }} />

      {/* SOCIAL CTA */}
      <section className="max-w-5xl mx-auto px-6 pt-24">
        <div className="p-16 md:p-24 rounded-[4rem] bg-slate-950 text-center relative overflow-hidden group">
          <FaInstagram className="text-6xl text-brand-primary mx-auto mb-8 animate-pulse" />
          <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">Join The Circle</h2>
          <a href="https://www.instagram.com/afrikin_circle/" className="inline-block bg-brand-primary text-brand-dark px-14 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-brand-primary/10" target='_blank'>@AfriKinCircle</a>
        </div>
      </section>

    </div>
  );
};

export default Socials;