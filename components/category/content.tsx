"use client"

import { useState } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import CategorySidebar from "./sidebar"
import ProductGrid from "@/components/shop/product-grid"
import { products } from "@/data/products"

interface CategoryContentProps {
  category: string
}

export default function CategoryContent({ category }: CategoryContentProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const filteredProducts = products.filter((product) => product.category === category)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <span className="text-sm text-gray-600">{filteredProducts.length} Products</span>
        </div>
        <div className="flex items-center gap-4">
          <select className="text-sm border rounded-md p-2">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <CategorySidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}

