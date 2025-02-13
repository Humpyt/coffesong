"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProductCardProps {
  name: string
  price: string
  imageUrl: string
  roastType: string
  rating: number
  totalRatings: number
  flavorNotes: Array<{
    icon: string
    label: string
  }>
}

function ProductCard({ name, price, imageUrl, roastType, rating, totalRatings, flavorNotes }: ProductCardProps) {
  return (
    <div className="group relative w-[280px]">
      <div
        className={`
        ${roastType === "LIMITED EDITION" ? "bg-[#C4A962]" : "bg-[#5C4023]"}
        text-white text-[10px] text-center py-1 uppercase font-medium
      `}
      >
        {roastType}
      </div>
      <div className="relative aspect-[3/4] mb-4 p-6">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-sm font-bold mb-3">{name}</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {flavorNotes.map((note, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-[#8B6834] text-2xl mb-1">{note.icon}</span>
              <span className="text-[10px] uppercase text-gray-600">{note.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm">${price} / LB</p>
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < rating ? "fill-[#8B6834] text-[#8B6834]" : "text-gray-300"}`}
                  />
                ))}
            </div>
            <span className="text-xs text-gray-600">/ {totalRatings} RATING</span>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white"
        >
          Quick Shop
        </Button>
      </div>
    </div>
  )
}

export default function ShopSection({
  title,
  filters,
}: {
  title: string
  filters: string[]
}) {
  const products = [
    {
      name: "Major Dickason's Blend®",
      price: "18.95",
      imageUrl: "/placeholder.svg",
      roastType: "DARK ROAST",
      rating: 4,
      totalRatings: 5,
      flavorNotes: [
        { icon: "🌍", label: "EARTH" },
        { icon: "🌶️", label: "SPICE" },
        { icon: "✨", label: "EVERYTHING" },
      ],
    },
    {
      name: "Ethiopian Super Natural Organic",
      price: "22.95",
      imageUrl: "/placeholder.svg",
      roastType: "LIMITED EDITION",
      rating: 4,
      totalRatings: 5,
      flavorNotes: [
        { icon: "🫐", label: "WILD BLUEBERRY" },
        { icon: "🍊", label: "BERGAMOT" },
        { icon: "🍬", label: "CANDIED PEEL" },
      ],
    },
    // Add more products...
  ]

  return (
    <div className="mb-16">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xl font-bold text-[#8B6834] mb-4">{title}</h2>
          <div className="space-y-2">
            {filters.map((filter) => (
              <label key={filter} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
                <span className="text-sm">{filter}</span>
              </label>
            ))}
          </div>
        </div>
        <a href="#" className="text-sm text-[#8B6834] hover:underline">
          SHOP ALL →
        </a>
      </div>

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

