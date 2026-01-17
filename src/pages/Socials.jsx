import React, { useState } from 'react';
import { FaCalendarAlt, FaHistory, FaArrowRight, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox"; 
import "yet-another-react-lightbox/styles.css";

// Your imports remain the same...
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
import g10 from '../assets/gallery/g10.jpg';
import g11 from '../assets/gallery/g11.jpg';
import g12 from '../assets/gallery/g12.jpg';    

const Socials = () => {
  const [view, setView] = useState('upcoming');
  const [index, setIndex] = useState(-1);

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
        desc: "A night of expression and warmth. Share a poem, a song, or just a cup of coffee with the circle.",
        tag: "We Create"
      }
    ],
    past: [
      { title: "Cocktail & Mixology Party", date: "Nov 14, 2025", summary: "A cozy evening of cocktail/mocktail making, conversation & kinnection.", image: CocktailMixology, stats: "45+ Attendees" },
      { title: "AfroHouse Sip & Paint", date: "Nov 09, 2025", summary: "An afternoon of color, connection & calm. pattern stories.", image: AfroHouseSipPaint, stats: "60+ Attendees" },
      { title: "Kinnect Series 2", date: "Nov 09, 2025", summary: "Thinking about a career in Cybersecurity.", image: KinnectSeries, stats: "20+ Attendees" },
      { title: "AfriKin Field Day", date: "Aug 09, 2025", summary: "Outdoor games. Sunshine, Good company.", image: AfriKinFieldDay, stats: "20+ Attendees" },
      { title: "Nyama Choma Night", date: "Jun 06, 2025", summary: "Afrobeat Edition ft. Grills & Vibes.", image: NyamaChomaNight, stats: "35+ Attendees" },
      { title: "KinReads Book Club", date: "May 31, 2025", summary: "Annual community grill and chill session.", image: KinReadsBookClub, stats: "5+ Attendees" },
      { title: "Kinnect Series 1", date: "Mar 22, 2025", summary: "Speed networking and round table discussions.", image: KinnectSeriesLinkUp, stats: "25+ Attendees" },
      { title: "Movie Night", date: "Feb 08, 2025", summary: "Screening 'The Gods Must be Crazy'.", image: MovieNight, stats: "15+ Attendees" },
      { title: "Nyama Choma - Dancehall", date: "Jan 31, 2025", summary: "Grilled meats and classic riddims.", image: NyamaChomaDancehall, stats: "35+ Attendees" },
      { title: "Chai & Chill", date: "Jan 18, 2025", summary: "Warm drinks and card games.", image: ChaiChill, stats: "5+ Attendees" },
      { title: "Yoga", date: "Jan 14, 2025", summary: "Stretch and move session for wellness.", image: YogaSession, stats: "5+ Attendees" },
    ]
  };

  const photos = [
    { src: g1, width: 800, height: 600 }, { src: g2, width: 1600, height: 900 },
    { src: g3, width: 1080, height: 1350 }, { src: g4, width: 800, height: 600 },
    { src: g5, width: 1080, height: 1080 }, { src: g6, width: 1600, height: 900 },
    { src: g7, width: 1080, height: 1350 }, { src: g8, width: 800, height: 600 },
    { src: g9, width: 1080, height: 1080 }, { src: g10, width: 1600, height: 900 },
    { src: g11, width: 1080, height: 1350 }, { src: g12, width: 800, height: 600 },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <section className="bg-slate-900 py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">Socials & Events</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto font-light relative z-10">
          The heartbeat of AfriKin. Explore our journey through connection and community.
        </p>
      </section>

      {/* View Toggle */}
      <div className="max-w-7xl mx-auto px-6 -translate-y-8 flex justify-center z-20 relative">
        <div className="inline-flex p-1.5 bg-white border border-gray-100 shadow-xl rounded-2xl">
          <button 
            onClick={() => setView('upcoming')}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${view === 'upcoming' ? 'bg-slate-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <FaCalendarAlt /> Upcoming
          </button>
          <button 
            onClick={() => setView('past')}
            className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 ${view === 'past' ? 'bg-slate-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <FaHistory /> Past Events
          </button>
        </div>
      </div>

      {/* Events List */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        {view === 'upcoming' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {events.upcoming.map((event, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary bg-brand-light px-4 py-1.5 rounded-full">
                        {event.tag}
                    </span>
                    <div className="text-gray-300 group-hover:text-brand-primary transition-colors">
                        <FaCalendarAlt size={24} />
                    </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{event.title}</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-500 font-medium italic">
                    <FaClock className="text-brand-primary" /> {event.date} • {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 font-medium italic">
                    <FaMapMarkerAlt className="text-brand-primary" /> {event.location}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">{event.desc}</p>
                <button className="w-full flex justify-center items-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-brand-primary transition-all group-hover:shadow-lg">
                  Register Interest <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.past.map((event, i) => (
              <div key={i} className="group relative bg-slate-900 rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-40 transition-transform duration-700" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent">
                  <p className="text-brand-primary font-black text-xs tracking-tighter mb-2">{event.date}</p>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{event.title}</h3>
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{event.summary}</p>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                        <span className="text-[10px] text-white/50 uppercase tracking-widest">{event.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modern Divider */}
      <div className="flex justify-center py-10">
        <div className="flex gap-2">
            {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-brand-light"></div>)}
        </div>
      </div>

      {/* Community Gallery Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-4xl font-bold text-gray-900">Highlights From Our Past Socials</h2>
                <p className="text-gray-500 mt-2 italic">Unfiltered joy from our latest gatherings.</p>
            </div>
            <div className="h-px bg-gray-100 flex-grow mx-8 hidden md:block"></div>
            <div className="text-brand-primary font-bold text-sm tracking-widest uppercase">
                {photos.length} Captures
            </div>
        </div>

        <div className="rounded-[2.5rem] overflow-hidden p-2 bg-gray-50/50 border border-gray-100">
          <PhotoAlbum 
            layout="masonry" 
            photos={photos} 
            columns={(containerWidth) => {
              if (containerWidth < 640) return 2;
              if (containerWidth < 1024) return 3;
              return 4;
            }}
            spacing={16}
            onClick={({ index }) => setIndex(index)}
          />
        </div>

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          on={{ click: () => setIndex(-1) }}
          animation={{ fade: 300 }}
          styles={{ container: { backgroundColor: "rgba(15, 23, 42, 0.95)" } }}
        />
      </section>
    </div>
  );
};

export default Socials;