"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const relatedProducts = [
  {
    name: "VANILLA",
    price: "19.95",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.jpg-xOmyiQOQksnCGAsY9Ohi7D9I2P2iQh.jpeg",
    rating: 4.5,
    reviews: 98,
    slug: "vanilla",
  },
  {
    name: "CARAMEL BRULÉE",
    price: "19.95",
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13.jpg-6d6Wk8wmbWRdZxyoVOYUmZZyzEzP1e.jpeg",
    rating: 4.3,
    reviews: 76,
    slug: "caramel-brulee",
  },
  {
    name: "FRENCH VANILLA",
    price: "19.95",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03%20(1).jpg-I13lKC5riPIS9BqQdtKKg4gkbhOkIU.jpeg",
    rating: 4.4,
    reviews: 112,
    slug: "french-vanilla",
  },
]

export default function RelatedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">YOU MAY ALSO LIKE</h2>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
          {relatedProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="w-[280px] bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.imageUrl || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="font-bold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">${product.price}</div>
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

