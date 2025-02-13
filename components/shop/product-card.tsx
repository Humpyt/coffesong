"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Star } from "lucide-react"

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
  description: string
}

export default function ProductCard({
  name,
  price,
  imageUrl,
  roastType,
  rating,
  totalRatings,
  flavorNotes,
  description,
}: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

  return (
    <>
      <div className="w-full max-w-[280px] bg-white group">
        <div
          className={`
          ${roastType === "LIMITED RELEASE" ? "bg-[#C4A962]" : "bg-[#5C4023]"}
          text-white text-[10px] text-center py-1 uppercase tracking-wider
        `}
        >
          {roastType}
        </div>
        <div className="relative aspect-square mb-2 group">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-contain p-4" />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button variant="secondary" className="bg-white hover:bg-gray-100" onClick={() => setIsQuickViewOpen(true)}>
              Quick View
            </Button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <h3 className="text-sm font-bold mb-2 min-h-[40px] hover:text-[#8B6834] cursor-pointer">{name}</h3>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {flavorNotes.map((note, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-[#8B6834] text-2xl mb-1">{note.icon}</span>
                <span className="text-[10px] uppercase text-gray-600">{note.label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium">${price}</p>
            <div className="flex items-center gap-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < rating ? "fill-[#8B6834] text-[#8B6834]" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-gray-500">({totalRatings})</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white"
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-contain" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">${price}</div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "fill-[#8B6834] text-[#8B6834]" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({totalRatings})</span>
                </div>
              </div>
              <p className="text-gray-600">{description}</p>
              <div className="grid grid-cols-3 gap-4">
                {flavorNotes.map((note, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-[#8B6834] text-3xl mb-2">{note.icon}</span>
                    <span className="text-xs uppercase text-gray-600">{note.label}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-[#8B6834] hover:bg-[#725628] text-white">Add to Cart</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

