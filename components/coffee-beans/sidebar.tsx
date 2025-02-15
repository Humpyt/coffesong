"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CoffeeBeansSidebarProps {
  isOpen: boolean
  onClose: () => void
}

const roastLevels = [
  { name: "Light Roast", count: 4 },
  { name: "Medium Roast", count: 6 },
  { name: "Dark Roast", count: 8 },
  { name: "Extra Dark Roast", count: 3 },
]

const flavorProfiles = [
  { name: "Fruity & Bright", count: 5 },
  { name: "Nutty & Sweet", count: 7 },
  { name: "Chocolate & Caramel", count: 6 },
  { name: "Earthy & Spicy", count: 4 },
  { name: "Bold & Intense", count: 5 },
]

const origins = [
  { name: "Ethiopia", count: 3 },
  { name: "Colombia", count: 4 },
  { name: "Guatemala", count: 2 },
  { name: "Costa Rica", count: 2 },
  { name: "Brazil", count: 3 },
  { name: "Indonesia", count: 2 },
]

const certifications = [
  { name: "Organic", count: 6 },
  { name: "Fair Trade", count: 8 },
  { name: "Rainforest Alliance", count: 4 },
]

export default function CoffeeBeansSidebar({ isOpen, onClose }: CoffeeBeansSidebarProps) {
  const FilterSection = ({ title, items }: { title: string; items: { name: string; count: number }[] }) => (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="font-bold text-sm mb-4 text-[#8B6834]">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <label key={item.name} className="flex items-center gap-2 group cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
            <span className="text-sm text-gray-600 group-hover:text-[#8B6834]">{item.name}</span>
            <span className="text-xs text-gray-400 ml-auto">({item.count})</span>
          </label>
        ))}
      </div>
    </div>
  )

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out md:relative md:inset-auto md:shadow-none md:transform-none md:p-0
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="font-bold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-6">
        <FilterSection title="ROAST LEVEL" items={roastLevels} />
        <FilterSection title="FLAVOR PROFILE" items={flavorProfiles} />
        <FilterSection title="ORIGIN" items={origins} />
        <FilterSection title="CERTIFICATIONS" items={certifications} />

        <div className="border-b border-gray-200 pb-6">
          <h3 className="font-bold text-sm mb-4 text-[#8B6834]">PRICE</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2 group cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm text-gray-600 group-hover:text-[#8B6834]">Under $15</span>
            </label>
            <label className="flex items-center gap-2 group cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm text-gray-600 group-hover:text-[#8B6834]">$15 - $20</span>
            </label>
            <label className="flex items-center gap-2 group cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm text-gray-600 group-hover:text-[#8B6834]">$20 - $25</span>
            </label>
            <label className="flex items-center gap-2 group cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm text-gray-600 group-hover:text-[#8B6834]">Over $25</span>
            </label>
          </div>
        </div>

        <Button className="w-full bg-[#8B6834] hover:bg-[#725628] text-white">Apply Filters</Button>
      </div>
    </aside>
  )
}

