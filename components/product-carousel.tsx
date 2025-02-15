"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

interface ProductCardProps {
  name: string
  price: string
  imageUrl: string
  flavorNotes: string[]
}

function ProductCard({ name, price, imageUrl, flavorNotes }: ProductCardProps) {
  return (
    <div className="min-w-[280px] p-4">
      <div className="bg-[#5C4023] text-white text-xs text-center py-1 mb-4">DARK ROAST</div>
      <div className="relative aspect-[3/4] mb-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-contain" />
      </div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <div className="flex gap-2 mb-4">
        {flavorNotes.map((note, index) => (
          <span key={index} className="text-xs text-gray-600 uppercase">
            {note}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-700">Starting at {price}/mo</p>
    </div>
  )
}

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-[#8B6834] mb-4">BEST SELLERS</h2>
          <p className="text-gray-700 max-w-md">
            The coffees our customers love best. From dark to light, intense to bright, there's always a new cup worth
            experiencing.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <a href="/shop" className="text-sm uppercase tracking-wider flex items-center gap-2 hover:underline">
            Shop All
            <span>→</span>
          </a>
        </div>
      </div>

      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div ref={scrollRef} className="flex overflow-x-auto gap-4 scroll-smooth hide-scrollbar">
          <ProductCard
            name="Coffee Song Original"
            price="$18.95"
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13.jpg-eE3vY3kJ8JJ4uphvX65T4sP4YUeE2z.jpeg"
            flavorNotes={["Bold", "Rich", "Smooth"]}
          />
          <ProductCard
            name="Mountain Tune"
            price="$18.95"
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09.jpg-iyw9wsnBKNJXGSb2DylULNsmdoSYAD.jpeg"
            flavorNotes={["Balanced", "Nutty", "Sweet"]}
          />
          <ProductCard
            name="Salsa Bamba Blend"
            price="$19.95"
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.jpg-QfFwXpkAtDnWyIdRc4QvsDDmABLZID.jpeg"
            flavorNotes={["Complex", "Fruity", "Bright"]}
          />
          <ProductCard
            name="Kadongo Kamu Single"
            price="$21.95"
            imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.jpg-Zoaz0mFRmxPySDnY3ToCaAUTqfRaF7.jpeg"
            flavorNotes={["Limited", "Exclusive", "Seasonal"]}
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

