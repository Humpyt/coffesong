"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "../context/CartContext"

export default function Header() {
  const { items } = useCart()

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/202%20(1)-jtWlG5C7g8QOxHJ3tSXfoSpW4RkCHJ.png"
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
          <Link href="/subscribe" className="text-sm uppercase">
            Subscribe
          </Link>
          <Link href="/shop" className="text-sm uppercase">
            Shop
          </Link>
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

          <Button variant="ghost" size="sm" className="uppercase text-sm">
            Log In
          </Button>

          <div className="relative">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B87D4B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
