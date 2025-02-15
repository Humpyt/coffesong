"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png",
    quote: "The subscription has transformed my morning routine. Fresh coffee delivered right when I need it!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Home Barista",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png",
    quote: "The quality and consistency of the coffee is outstanding. I love trying new roasts every month.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Daily Subscriber",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png",
    quote: "Excellent customer service and the coffee is always fresh. Best subscription service ever!",
    rating: 5,
  },
]

export default function SubscribeTestimonials() {
  return (
    <div className="py-24 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6834] mb-4">What Our Subscribers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy subscribers who enjoy our premium coffee delivery service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#8B6834] text-[#8B6834]" />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

