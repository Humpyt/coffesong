"use client"

import { useState } from "react"
import { Filter, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CoffeeBeansSidebar from "./sidebar"
import CoffeeBeansGrid from "./grid"
import Link from "next/link"

export default function CoffeeBeansContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [sortOption, setSortOption] = useState("featured")

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link href="/" className="text-gray-600 hover:text-[#8B6834]">
          HOME
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900">COFFEE BEANS</span>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm bg-[#8B6834] text-white px-3 py-1 rounded-full">Dark Roast</span>
            <span className="text-sm bg-[#8B6834] text-white px-3 py-1 rounded-full">Single Origin</span>
          </div>
        </div>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="text-sm border rounded-md p-2"
        >
          <option value="featured">Sort by: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
        </select>
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <CoffeeBeansSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <CoffeeBeansGrid sortOption={sortOption} />
      </div>
    </div>
  )
}

