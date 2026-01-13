import React from 'react';
// Import your background images again or use the same ones from Home
import bgSocialize from '../assets/we_socialize.png';
import bgLearn from '../assets/we_learn.jpg';
import bgMove from '../assets/we_move.png';
import bgCreate from '../assets/we_create.png';
import bgCare from '../assets/we_care.png';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import l1 from '../assets/l1.jpg';
import l2 from '../assets/l2.jpg';
import l3 from '../assets/l3.jpg';

const ElementsDetail = () => {
  const details = [
    {
      title: "We Socialize",
      subtitle: "Community begins with presence",
      description: "We gather through shared food, conversation, laughter, and those little moments that remind us: we’re not alone. Our social mixers are AfriKin’s core spaces to make friends, unwind, and feel connected. Whether you show up solo or with a friend(s), you’ll find ease, joy, and a community ready to welcome you in.",
      image: bgSocialize,
      features: ["Game Nights", "Potlucks & BBQ's", "Community Mixers", "Movie Nights & Pop ups"],
      gallery: [s1, s2, s3, s4]
    },
    {
      title: "We Learn",
      subtitle: "Knowledge when shared, is power",
      description: "Here, we put each other on through support, continuous learning, and celebrating shared wins. Through our Kinnect Series we gather to exchange ideas and explore the intersections of culture, identity, and opportunity. From career panels to storytelling workshops, learning at AfriKin is rooted in lived experience and powered by connection",
      image: bgLearn,
      features: ["Skills Workshops", "Guest Speaker Panels", "Community Library"],
      gallery: [l1, l2, l3]
    },
    {
      title: "We Move",
      subtitle: "Our bodies deserve joy too",
      description: "This pillar invites us to recharge, release and  reconnect with ourselves through movement, and flow. We support one another in finding grounding and rhythm through stretching, dancing, sports and more. However you move, you’re moving with the community.",
      image: bgMove,
      features: ["Field Days/Hikes", "Chai & Chill", "Dance & Movement Workshops", "Community Mixers", "Nyama Choma Nights"],
      gallery: [l1, l2, l3]
    },
    {
      title: "We Create",
      subtitle: "Expression keeps our stories alive",
      description: "Here, we use our voices, hands, and hearts to imagine and shape the world around us. Through art, words, and shared creativity, we honour our cultures, tell our stories, and dream up new possibilities together.",
      image: bgCreate,
      features: ["Book Club", "Art Showcases", "Creative Collabs & Open Mic Nights", "Cultural Projects"],
      gallery: [l1, l2, l3]
    },
    {
      title: "We Care",
      subtitle: "Care is Action",
      description: "Here, we look out for one another and the places we call home. We show up for our community through acts of kindness, mutual aid, and tending to the environment that sustains us. From growing together in our Community Garden, to organizing donation drives, to sharing resources in times of need this is where compassion meets action, and where we remember that thriving is something we do together.",
      image: bgCare,
      features: ["Community Garden & Greening Projects", "Donation & Resource Drives", "Mutual Aid Networks", "Environmental Care & Clean up Days"],
      gallery: [l1, l2, l3]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-blue-600 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Elements</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">Explore how we build, grow, and sustain our community in Toronto.</p>
      </section>

        {/* Details Sections */}
        <section className="max-w-7xl mx-auto py-20 px-6 space-y-40">
            {details.map((item, index) => (
                <div key={index} className="space-y-12">
                    {/* Text and Main Image Row */}
                    <div className={`flex flex-col gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                        <div className="w-full md:w-1/2">
                            <img src={item.image} alt={item.title} className="rounded-3xl shadow-2xl h-[450px] w-full object-cover" />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">{item.subtitle}</span>
                            <h2 className="text-4xl font-bold text-gray-900">{item.title}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                                {item.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-2 text-gray-700 font-medium">
                                        <span className="text-blue-500 text-xl">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* NEW: Mini Gallery for this specific element */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest text-center">Highlights from {item.title}</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {item.gallery.map((img, imgIndex) => (
                                <div key={imgIndex} className="overflow-hidden rounded-xl h-48 group relative">
                                    <img 
                                        src={img} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                        alt={`${item.title} moment`} 
                                    />
                                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Horizontal Divider except for the last item */}
                    {index !== details.length - 1 && <hr className="border-gray-100 mt-20" />}
                </div>
            ))}
        </section>
    </div>
  );
};

export default ElementsDetail;