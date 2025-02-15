"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

interface Product {
  id: number
  name: string
  price: string
  description: string
  roastLevel: string
  origin: string
  imageUrl: string
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    price: "19.95",
    description:
      "Bright and complex with floral notes, bergamot, and citrus undertones. A true representation of Ethiopian coffee's distinctive character.",
    roastLevel: "Light Roast",
    origin: "Ethiopia",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0fb48ba1-c07d-4e84-999a-a913dc844c83-9B20vE9dlMLVazREIee9HeNRzjNXeG.png",
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 2,
    name: "Colombian Supremo",
    price: "18.95",
    description:
      "Well-balanced with caramel sweetness, subtle fruit notes, and a clean finish. Perfect for everyday drinking.",
    roastLevel: "Medium Roast",
    origin: "Colombia",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/80cb39d6-79a7-48ad-bf8a-dc0d15127cbc-PKr1wKNje3Mt0ba8jaINabpCQQJfTc.png",
    rating: 4.7,
    reviews: 142,
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    price: "21.95",
    description: "Full-bodied and smooth with complex earthy notes, subtle spice, and a rich, syrupy finish.",
    roastLevel: "Dark Roast",
    origin: "Indonesia",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77854d65-a619-470c-b60e-d39ed1065b5d-eSlpWLMqahOC7hP9JayIKyAnowTnLt.png",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 4,
    name: "Guatemala Antigua",
    price: "20.95",
    description: "Smooth and sophisticated with chocolate notes, subtle spices, and a sweet finish.",
    roastLevel: "Medium Roast",
    origin: "Guatemala",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24747660-ebcb-4b15-a548-47b6ad1f8a05-76xFtBAi601n7fPgkOGDmxfxRXrUCO.png",
    rating: 4.6,
    reviews: 98,
  },
]

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white hover:bg-gray-50 text-[#8B6834]">Quick View</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
                <DialogDescription>{product.description}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-8">
                <div className="relative aspect-square">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">${product.price}</div>
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
                  <div>
                    <h4 className="font-medium mb-1">Roast Level</h4>
                    <p className="text-gray-600">{product.roastLevel}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Origin</h4>
                    <p className="text-gray-600">{product.origin}</p>
                  </div>
                  <Button className="w-full bg-[#8B6834] hover:bg-[#725628] text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2">
          <div className="text-sm uppercase tracking-wider text-[#8B6834] mb-1">{product.roastLevel}</div>
          <h3 className="font-bold">{product.name}</h3>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">${product.price}</div>
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
        <Button className="w-full bg-[#8B6834] hover:bg-[#725628] text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  )
}

export default function CoffeeBeansGrid({ sortOption }: { sortOption: string }) {
  // Sort products based on the selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return Number.parseFloat(a.price) - Number.parseFloat(b.price)
      case "price-high":
        return Number.parseFloat(b.price) - Number.parseFloat(a.price)
      case "rating":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

