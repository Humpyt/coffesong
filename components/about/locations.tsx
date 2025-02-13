import { MapPin } from "lucide-react"

const stats = [
  { label: "Retail Locations", value: "200+" },
  { label: "States", value: "25" },
  { label: "Employees", value: "5000+" },
  { label: "Years of Excellence", value: "57" },
]

export default function Locations() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#8B6834] mb-4">Our Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From our original Berkeley store to locations across America, we're proud to serve our communities with the
            finest coffee experience.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-[#8B6834] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/stores" className="inline-flex items-center gap-2 text-[#8B6834] hover:text-[#5C4023] font-medium">
            <MapPin className="w-5 h-5" />
            Find a Store Near You
          </a>
        </div>
      </div>
    </section>
  )
}

