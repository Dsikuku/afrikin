const projects = [
  {
    id: 1,
    title: "Resource Hub",
    category: "Social Support",
    description: "Newcomer + Youth: A curated list of services and organizations for housing, education, job opportunities, mental health, and cultural integration.",
    status: "Ongoing"
  },
  {
    id: 2,
    title: "Community Love",
    category: "Community",
    description: "Our clothing drives & donation campaigns are making an impact in our communities. Join us in spreading love and support where it’s needed most!",
    status: "Ongoing"
  },
  {
    id: 3,
    title: "Networking Mixer",
    category: "Networking",
    description: "Our newest initiative brings together young professionals, creators, and community leaders to exchange ideas, collaborate, and grow.",
    status: "In Progress"
  },
  {
    id: 4,
    title: "Book Club",
    category: "Culture",
    description: "Our book club is a place to come together, explore diverse stories, and engage in meaningful conversations. We create a space to learn, grow, and connect one page at a time.",
    status: "Ongoing"
  }
];

const Initiatives = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 py-16 px-6 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Our Initiatives</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          At AfriKin Circle, we believe in building impactful projects that foster community, empowerment, and change. Explore what’s in progress and what’s on the horizon.
        </p>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
              </div>
              
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                  ● {project.status}
                </span>
                <button className="text-blue-600 font-semibold hover:underline">
                  Get Involved →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Initiatives;