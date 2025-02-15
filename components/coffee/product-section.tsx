"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FlavorNote {
  icon: string
  label: string
}

interface Product {
  name: string
  price: string
  unit: string
  label: string
  imageUrl: string
  flavorNotes: FlavorNote[]
}

interface ProductSectionProps {
  title: string
  products: Product[]
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  const getLabelColor = (label: string) => {
    switch (label) {
      case "NEW":
        return "bg-[#5C4023]"
      case "LIMITED RELEASE":
        return "bg-[#C4A962]"
      default:
        return "bg-[#8B6834]"
    }
  }

  return (
    <div
      className="group relative w-[280px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${getLabelColor(product.label)} text-white text-xs text-center py-2 uppercase tracking-wider`}>
        {product.label}
      </div>
      <div className="relative aspect-[3/4] bg-white p-8">
        <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-contain p-8" />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/5">
            <Button className="bg-white hover:bg-gray-50 text-[#8B6834]">Quick Shop</Button>
          </div>
        )}
      </div>
      <div className="p-6 bg-white">
        <h3 className="font-bold text-lg mb-4">{product.name}</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {product.flavorNotes.map((note, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl mb-2 block">{note.icon}</span>
              <span className="text-xs uppercase text-gray-600">{note.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <span className="text-lg font-semibold">${product.price}</span>
          <span className="text-sm text-gray-500">/{product.unit}</span>
        </div>
      </div>
    </div>
  )
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#8B6834]">{title}</h2>
        <a href="#" className="text-sm text-[#8B6834] hover:underline">
          SHOP ALL →
        </a>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full opacity-80 hover:opacity-100"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full opacity-80 hover:opacity-100"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

