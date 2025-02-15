"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: string
  name: string
  price: string
  originalPrice?: string
  roastType: string
  imageUrl: string
  rating: number
  reviews: number
  slug?: string
}

interface Filter {
  label: string
  count: number
}

interface ProductSectionProps {
  title: string
  filters: Filter[]
  products: Product[]
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="w-[280px] bg-white hover:shadow-lg transition-shadow duration-300"
    >
      <div className="bg-[#8B6834] text-white text-[10px] text-center py-1.5 uppercase tracking-wider">
        {product.roastType}
      </div>
      <div className="relative aspect-[3/4] mb-2">
        <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-cover p-4" />
      </div>
      <div className="px-4 pb-4">
        <h3 className="text-sm font-bold mb-4">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
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
      </div>
    </Link>
  )
}

export default function ProductSection({ title, filters, products }: ProductSectionProps) {
  return (
    <div className="pb-16 border-b border-gray-200">
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <div>
          <h2 className="text-xl font-bold text-[#8B6834] mb-6">{title}</h2>
          <div className="space-y-3">
            {filters.map((filter) => (
              <label key={filter.label} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
                <span className="text-sm group-hover:text-[#8B6834]">
                  {filter.label}
                  <span className="text-gray-400 ml-1">({filter.count})</span>
                </span>
              </label>
            ))}
          </div>
          <a href="#" className="text-sm text-[#8B6834] hover:underline mt-4 inline-block">
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
  )
}
