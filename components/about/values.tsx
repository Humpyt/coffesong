import { Coffee, Heart, Users, Globe2 } from "lucide-react"

const values = [
  {
    icon: Coffee,
    title: "Uncompromising Quality",
    description:
      "We source the world's best coffee beans, roast them by hand, and uphold the highest standards in the industry.",
  },
  {
    icon: Heart,
    title: "Craft & Care",
    description:
      "Every step in our process is handled with the utmost attention to detail and love for the craft of coffee.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We believe in building lasting relationships with our farmers, employees, and customers, creating a global coffee community.",
  },
  {
    icon: Globe2,
    title: "Sustainability",
    description:
      "We're committed to responsible sourcing practices and reducing our environmental impact across our operations.",
  },
]

export default function Values() {
  return (
    <section className="py-20 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B6834] mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8B6834] text-white mb-6">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

