"use client"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const shopMenuItems = [
  { title: "Subscribe & Save", href: "/subscribe" },
  { title: "Coffee", href: "/coffee" },
  { title: "Offers", href: "/offers" },
  { title: "Tea", href: "/tea" },
  { title: "K-Cup Cards", href: "/k-cup" },
  { title: "Mugs + Gear", href: "/mugs" },
  { title: "Our Stories", href: "/stories" },
]

export default function MegaMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`
        absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 
        transition-all duration-200 ease-in-out z-50
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
      `}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-[300px_1fr] h-[400px]">
        {/* Left Menu */}
        <div className="py-8 px-6 border-r border-gray-200">
          <h2 className="text-sm font-bold mb-4 text-[#8B6834]">SHOP</h2>
          <ul className="space-y-4">
            {shopMenuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between text-sm text-gray-600 hover:text-[#8B6834] group"
                >
                  {item.title}
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Promo Area */}
        <div className="relative p-8 bg-[#F5F1EA]">
          <div className="relative h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jGQPigoVu4SwrcMaEfWN3sVYyHC39V.png"
              alt="Seasonal Essentials - Ethiopian Super Natural Coffee"
              fill
              className="object-cover"
            />
            <Link
              href="/coffee/ethiopian-super-natural"
              className="absolute bottom-8 right-8 text-sm text-[#8B6834] hover:text-[#5C4023] flex items-center gap-2"
            >
              SHOP NOW
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

