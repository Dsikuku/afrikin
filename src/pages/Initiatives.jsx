const projects = [
  {
    id: 1,
    title: "Scarborough Green Space",
    category: "Environment",
    description: "Transforming underused urban lots into vibrant community gardens and pollinator habitats.",
    status: "Active"
  },
  {
    id: 2,
    title: "Etobicoke Youth Tech",
    category: "Education",
    description: "Free coding and digital literacy workshops for high school students in the West End.",
    status: "Enrolling"
  },
  {
    id: 3,
    title: "Downtown Food Rescue",
    category: "Social Support",
    description: "Partnering with local restaurants to redistribute surplus food to shelters across the core.",
    status: "Ongoing"
  },
  {
    id: 4,
    title: "North York Arts Fest",
    category: "Culture",
    description: "An annual street festival celebrating the diverse cultural heritage of North York residents.",
    status: "Upcoming"
  }
];

const Initiatives = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-700 py-16 px-6 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Our Initiatives</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          From the Lakeshore to Steeles, we're working on projects that make Toronto more livable for everyone.
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