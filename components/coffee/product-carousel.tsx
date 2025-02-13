"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Product {
  id: number
  name: string
  price: string
  unit: string
  label: string
  imageUrl: string
  flavorNotes: Array<{
    icon: string
    label: string
  }>
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  const getLabelColor = (label: string) => {
    switch (label) {
      case "NEW":
        return "bg-[#8B6834]"
      case "LIMITED RELEASE":
        return "bg-[#C4A962]"
      default:
        return "bg-[#5C4023]"
    }
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-[300px]"
    >
      <div className={`${getLabelColor(product.label)} text-white text-xs text-center py-2 uppercase tracking-wider`}>
        {product.label}
      </div>

      <div className="relative aspect-[3/4] bg-gradient-to-b from-white to-gray-50 p-8">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain p-8 transform transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm"
        >
          <Button className="bg-white/90 hover:bg-white text-[#8B6834] shadow-lg">Quick View</Button>
        </motion.div>
      </div>

      <div className="p-6 bg-white">
        <h3 className="font-bold text-lg mb-4 group-hover:text-[#8B6834] transition-colors duration-300">
          {product.name}
        </h3>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {product.flavorNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-3 rounded-lg bg-gray-50 group-hover:bg-[#8B6834]/5 transition-colors duration-300"
            >
              <span className="text-2xl mb-2 block">{note.icon}</span>
              <span className="text-xs uppercase text-gray-600">{note.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <span className="text-lg font-semibold">${product.price}</span>
          <span className="text-sm text-gray-500">/{product.unit}</span>
        </div>

        <Button className="w-full mt-4 bg-gradient-to-r from-[#8B6834] to-[#C4A962] hover:from-[#725628] hover:to-[#A38A4F] text-white">
          Add to Cart
        </Button>
      </div>
    </motion.div>
  )
}

export default function ProductCarousel({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full opacity-80 hover:opacity-100"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full opacity-80 hover:opacity-100"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

