"use client"

import { useEffect, useState } from "react"

const categories = [
  { name: "EXCLUSIVES", href: "#exclusives" },
  { name: "ROAST", href: "#roast" },
  { name: "CURATED SUBSCRIPTIONS", href: "#subscriptions" },
  { name: "K-CUP PODS", href: "#k-cup-pods" },
  { name: "ESPRESSO CAPSULES", href: "#espresso-capsules" },
  { name: "DECAF", href: "#decaf" },
  { name: "ORGANIC", href: "#organic" },
]

export default function CoffeeNav() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${isSticky ? "bg-white shadow-md" : "bg-[#F5F1EA]"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-14">
          <span className="font-medium text-[#8B6834] mr-8">SHOP BY:</span>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar py-2">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="text-sm text-[#8B6834] whitespace-nowrap hover:text-[#5C4023] transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

