"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const coffeeBeansProducts = [
  {
    name: "Ethiopian Yirgacheffe",
    price: "19.95",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0fb48ba1-c07d-4e84-999a-a913dc844c83-9B20vE9dlMLVazREIee9HeNRzjNXeG.png",
    roastType: "LIGHT ROAST",
    rating: 4.8,
    reviews: 156,
  },
  {
    name: "Colombian Supremo",
    price: "18.95",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/80cb39d6-79a7-48ad-bf8a-dc0d15127cbc-PKr1wKNje3Mt0ba8jaINabpCQQJfTc.png",
    roastType: "MEDIUM ROAST",
    rating: 4.7,
    reviews: 142,
  },
  {
    name: "Sumatra Mandheling",
    price: "21.95",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77854d65-a619-470c-b60e-d39ed1065b5d-eSlpWLMqahOC7hP9JayIKyAnowTnLt.png",
    roastType: "DARK ROAST",
    rating: 4.9,
    reviews: 128,
  },
]

function ProductCard({ product }: { product: any }) {
  return (
    <div className="w-[280px] bg-white group">
      <div
        className={`
        ${product.roastType === "LIMITED RELEASE" ? "bg-[#C4A962]" : "bg-[#5C4023]"}
        text-white text-[10px] text-center py-1 uppercase tracking-wider
      `}
      >
        {product.roastType}
      </div>
      <div className="relative aspect-[3/4] mb-2">
        <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-sm font-bold mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium">${product.price}</p>
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < product.rating ? "fill-[#8B6834] text-[#8B6834]" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
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

export default function CoffeeBeansSection() {
  return (
    <div className="py-16 border-b border-gray-200" id="coffee-beans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-[240px_1fr] gap-8">
          <div>
            <h2 className="text-xl font-bold text-[#8B6834] mb-6">SHOP BY COFFEE BEANS</h2>
            <div className="space-y-3">
              {["LIGHT ROAST", "MEDIUM ROAST", "DARK ROAST", "SINGLE ORIGIN"].map((filter) => (
                <label key={filter} className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
                  <span className="text-sm group-hover:text-[#8B6834]">{filter}</span>
                </label>
              ))}
            </div>
            <Link href="/coffee-beans" className="text-sm text-[#8B6834] hover:underline mt-4 inline-block">
              SHOP ALL →
            </Link>
          </div>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
              {coffeeBeansProducts.map((product, idx) => (
                <ProductCard key={idx} product={product} />
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
      </div>
    </div>
  )
}

