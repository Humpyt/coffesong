"use client"

import { motion } from "framer-motion"
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
      setIsSticky(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-gradient-to-b from-[#F5F1EA] to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          <span className="font-medium text-sm text-[#8B6834] mr-8">SHOP BY:</span>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar py-2">
            {categories.map((category, index) => (
              <motion.a
                key={category.name}
                href={category.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative text-sm text-[#8B6834] whitespace-nowrap hover:text-[#5C4023] font-medium group"
              >
                {category.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#8B6834] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

