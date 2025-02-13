"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import MegaMenu from "./mega-menu"

export default function Header() {
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false)

  return (
    <header className="relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/202%20(2)-6WLFbKIS4kZ8YcD5sJHWQLn5hGkMQM.png"
              alt="Coffee Song"
              width={120}
              height={40}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/free-shipping" className="text-sm uppercase">
              Free Shipping
            </Link>
            <Link href="/coffee" className="text-sm uppercase">
              Coffee
            </Link>
            <div
              onMouseEnter={() => setIsShopMenuOpen(true)}
              onMouseLeave={() => setIsShopMenuOpen(false)}
              className="relative"
            >
              <Link href="/shop" className="text-sm uppercase flex items-center gap-2">
                Shop
              </Link>
              <MegaMenu isOpen={isShopMenuOpen} />
            </div>
            <Link href="/about" className="text-sm uppercase">
              About Us
            </Link>
            <Link href="/stores" className="text-sm uppercase">
              Our Stores
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search"
                className="pl-3 pr-10 py-1.5 rounded-full bg-gray-100 text-sm focus:outline-none"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>

            <Link href="/stores">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm uppercase">Find a Store</span>
              </Button>
            </Link>

            <Button variant="ghost" size="sm" className="uppercase text-sm">
              Log In
            </Button>

            <button className="p-2">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

