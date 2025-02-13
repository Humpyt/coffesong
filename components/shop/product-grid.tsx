"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Product {
  id: number
  name: string
  price: string
  roastType: string
  imageUrl: string
  rating: number
  reviews: number
  flavorNotes: string[]
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#8B6834]/5 to-[#8B6834]/10 rounded-xl transform -rotate-1" />
      <div className="absolute inset-0 bg-white rounded-xl transform rotate-1" />
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
        <div className="bg-gradient-to-r from-[#8B6834] to-[#C4A962] text-white text-xs text-center py-2 uppercase tracking-wider font-medium">
          {product.roastType}
        </div>

        <div className="relative aspect-square p-8 bg-gradient-to-b from-white to-gray-50">
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-6 transform transition-transform duration-700 group-hover:scale-110"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm"
          >
            <Button variant="secondary" className="bg-white/90 hover:bg-white shadow-lg">
              Quick View
            </Button>
          </motion.div>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-lg mb-3 group-hover:text-[#8B6834] transition-colors duration-300">
            {product.name}
          </h3>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {product.flavorNotes.map((note, index) => (
              <div
                key={index}
                className="text-center p-2 rounded-lg bg-gray-50 group-hover:bg-[#8B6834]/5 transition-colors duration-300"
              >
                <span className="text-xs uppercase text-gray-600">{note}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold">${product.price}</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "fill-[#8B6834] text-[#8B6834]" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-[#8B6834] to-[#C4A962] hover:from-[#725628] hover:to-[#A38A4F] text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  )
}

