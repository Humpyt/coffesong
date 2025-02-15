"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const coffees = [
  {
    name: "Ethiopian Yirgacheffe",
    description: "Bright and complex with floral notes and citrus undertones",
    roastLevel: "Light Roast",
    rating: 4.8,
    reviews: 156,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png",
  },
  {
    name: "Colombian Supremo",
    description: "Well-balanced with caramel sweetness and a clean finish",
    roastLevel: "Medium Roast",
    rating: 4.7,
    reviews: 142,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png",
  },
  {
    name: "Sumatra Mandheling",
    description: "Full-bodied and smooth with complex earthy notes",
    roastLevel: "Dark Roast",
    rating: 4.9,
    reviews: 128,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png",
  },
]

export default function SubscribeCoffees() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6834] mb-4">Featured Coffees</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of premium coffees or let us curate based on your preferences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {coffees.map((coffee, index) => (
            <motion.div
              key={coffee.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#F5F1EA] rounded-2xl overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-square">
                <Image
                  src={coffee.image || "/placeholder.svg"}
                  alt={coffee.name}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`
                    absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300
                    ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                  `}
                >
                  <div className="text-white text-center p-6">
                    <div className="text-sm uppercase tracking-wider mb-2">{coffee.roastLevel}</div>
                    <p className="text-lg">{coffee.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{coffee.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(coffee.rating) ? "fill-[#8B6834] text-[#8B6834]" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({coffee.reviews})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

