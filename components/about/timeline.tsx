const milestones = [
  {
    year: "1966",
    title: "First Store Opens",
    description: "Alfred Peet opens his first store on Vine & Walnut in Berkeley, CA.",
  },
  {
    year: "1971",
    title: "Training the Industry",
    description: "Peet's trains the founders of Starbucks in the art of coffee roasting.",
  },
  {
    year: "2007",
    title: "Expanding Reach",
    description: "Peet's begins selling fresh coffee in grocery stores nationwide.",
  },
  {
    year: "2016",
    title: "50th Anniversary",
    description: "Celebrating 50 years of craft coffee and community building.",
  },
  {
    year: "2023",
    title: "Innovation Continues",
    description: "Launch of new sustainable initiatives and coffee varieties.",
  },
]

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B6834] mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#8B6834]/20" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <div
                  className={`flex items-center ${index % 2 === 0 ? "flex-row md:pr-8" : "flex-row-reverse md:pl-8"}`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-[#8B6834] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#8B6834] border-4 border-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

