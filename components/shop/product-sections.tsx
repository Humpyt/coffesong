"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Product {
  name: string
  price: string
  imageUrl: string
  roastType: string
}

interface Section {
  title: string
  products: Product[]
}

const sections: Section[] = [
  {
    title: "SHOP BY COFFEE BEANS",
    products: [
      {
        name: "MAJOR DICKASON'S BLEND®",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "DARK ROAST",
      },
      {
        name: "ETHIOPIAN SUPER NATURAL ORGANIC",
        price: "22.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "LIMITED RELEASE",
      },
      {
        name: "FRENCH ROAST",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "DARK ROAST",
      },
    ],
  },
  {
    title: "SHOP BY SUBSCRIBER EXCLUSIVES",
    products: [
      {
        name: "SMALL BATCH SERIES",
        price: "22.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "SUBSCRIPTION",
      },
      {
        name: "DARK ROAST SERIES",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "SUBSCRIPTION",
      },
      {
        name: "SEASONAL SERIES",
        price: "21.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "SUBSCRIPTION",
      },
    ],
  },
  {
    title: "SHOP BY K-CUP PODS",
    products: [
      {
        name: "GET THE GRIND K-CUP® PODS",
        price: "14.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "K-CUP PODS",
      },
      {
        name: "SUN CATCHER K-CUP® PODS",
        price: "14.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "K-CUP PODS",
      },
      {
        name: "K-CUP® PODS SERIES",
        price: "15.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "K-CUP PODS",
      },
    ],
  },
  {
    title: "SHOP BY TEA",
    products: [
      {
        name: "ORGANIC BREAKFAST",
        price: "9.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "BLACK TEA",
      },
      {
        name: "GREEN TEA TROPICAL",
        price: "9.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "GREEN TEA",
      },
      {
        name: "ORGANIC EARL GREY",
        price: "9.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "BLACK TEA",
      },
    ],
  },
  {
    title: "SHOP BY ESPRESSO CAPSULES",
    products: [
      {
        name: "RISTRETTO ESPRESSO CAPSULES",
        price: "11.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "ESPRESSO",
      },
      {
        name: "CREMA SCURA ESPRESSO CAPSULES",
        price: "11.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "ESPRESSO",
      },
      {
        name: "RICCHEZZA ESPRESSO CAPSULES",
        price: "11.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "ESPRESSO",
      },
    ],
  },
  {
    title: "SHOP BY DECAF",
    products: [
      {
        name: "DECAF MAJOR DICKASON'S BLEND®",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "DECAF",
      },
      {
        name: "DECAF HOUSE BLEND",
        price: "18.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "DECAF",
      },
      {
        name: "DECAF ITALIAN ROAST",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "DECAF",
      },
    ],
  },
  {
    title: "SHOP BY MUGS + GEAR",
    products: [
      {
        name: "PEET'S TRAVEL MUG",
        price: "24.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "GEAR",
      },
      {
        name: "NO BREAK COFFEE MUG",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "GEAR",
      },
      {
        name: "YOU GOT THIS MUG",
        price: "14.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "GEAR",
      },
    ],
  },
  {
    title: "SHOP BY BUNDLES",
    products: [
      {
        name: "BEST SELLERS BUNDLE",
        price: "59.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "BUNDLE",
      },
      {
        name: "K-CUP® VALUE PACK SAMPLE BUNDLE",
        price: "49.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "BUNDLE",
      },
      {
        name: "ESPRESSO CAPSULES SAMPLE BUNDLE",
        price: "34.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "BUNDLE",
      },
    ],
  },
  {
    title: "SHOP BY FLAVORED COFFEE & K-CUP PODS",
    products: [
      {
        name: "HAZELNUT MOCHA",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "FLAVORED",
      },
      {
        name: "CARAMEL BRULÉE",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "FLAVORED",
      },
      {
        name: "VANILLA",
        price: "19.95",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-shop-all-2025-02-11-22_41_31-PTuVU7BKJkuVq74Wq1hihaVY3B2mFB.png",
        roastType: "FLAVORED",
      },
    ],
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="w-[220px] bg-white group">
      <div
        className={`
        ${product.roastType === "LIMITED RELEASE" ? "bg-[#C4A962]" : "bg-[#5C4023]"}
        text-white text-[10px] text-center py-1 uppercase tracking-wider
      `}
      >
        {product.roastType}
      </div>
      <div className="relative aspect-square mb-2">
        <Image src={product.imageUrl || "/placeholder.svg"} alt={product.name} fill className="object-contain p-4" />
      </div>
      <div className="px-2">
        <h3 className="text-sm font-bold mb-2 min-h-[40px]">{product.name}</h3>
        <p className="text-sm text-gray-600">Starting at ${product.price}/mo</p>
        <Button
          variant="outline"
          className="w-full mt-3 border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white"
        >
          Quick Shop
        </Button>
      </div>
    </div>
  )
}

export default function ProductSections() {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <div key={section.title} className="pb-8 border-b border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#8B6834] font-bold">{section.title}</h2>
            <a href="#" className="text-sm text-[#8B6834] hover:underline">
              SHOP ALL →
            </a>
          </div>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
              {section.products.map((product, idx) => (
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
      ))}
    </div>
  )
}

