import Link from "next/link"
import { Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          P
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/free-shipping" className="text-sm uppercase">
            Free Shipping
          </Link>
          <Link href="/coffee" className="text-sm uppercase">
            Coffee
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

          <button className="p-2">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

