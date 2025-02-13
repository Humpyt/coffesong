"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProductCardProps {
  name: string
  price: string
  imageUrl: string
  roastType: string
}

function ProductCard({ name, price, imageUrl, roastType }: ProductCardProps) {
  return (
    <div className="group relative w-[220px]">
      <div className="bg-[#5C4023] text-white text-[10px] text-center py-1 uppercase font-medium">{roastType}</div>
      <div className="relative aspect-square mb-2 p-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </div>
      <h3 className="text-sm font-bold mb-1 min-h-[40px]">{name}</h3>
      <p className="text-sm text-gray-700 mb-3">Starting at {price}/mo</p>
      <Button variant="outline" className="w-full border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white">
        Quick Shop
      </Button>
    </div>
  )
}

function ProductSection({ title, products }: { title: string; products: ProductCardProps[] }) {
  return (
    <div className="mb-12 border-b border-gray-200 pb-8">
      <h2 className="text-sm font-bold text-[#8B6834] mb-6">{title}</h2>
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

// Sample data - you would typically fetch this from an API
const productSections = [
  {
    title: "SHOP BY EXCLUSIVES",
    products: Array(5).fill({
      name: "Major Dickason's Blend®",
      price: "$19.95",
      imageUrl: "/placeholder.svg",
      roastType: "Dark Roast",
    }),
  },
  {
    title: "SHOP BY ROAST",
    products: Array(5).fill({
      name: "French Roast",
      price: "$18.95",
      imageUrl: "/placeholder.svg",
      roastType: "Dark Roast",
    }),
  },
  // Add more sections to match the image...
]

export default function ProductGrid() {
  return (
    <div>
      {productSections.map((section, idx) => (
        <ProductSection key={idx} title={section.title} products={section.products} />
      ))}
    </div>
  )
}

