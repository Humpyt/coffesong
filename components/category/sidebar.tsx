"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CategorySidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CategorySidebar({ isOpen, onClose }: CategorySidebarProps) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-full max-w-xs bg-white p-6 shadow-lg transform transition-transform md:relative md:inset-auto md:shadow-none md:transform-none md:p-0
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
        <div>
          <h3 className="font-bold text-sm mb-3">ROAST LEVEL</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Light Roast</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Medium Roast</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Dark Roast</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-3">FLAVOR PROFILE</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Fruity & Bright</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Sweet & Smooth</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Bold & Intense</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-3">ORIGIN</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Single Origin</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Blend</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm mb-3">PRICE</h3>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Under $15</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">$15 - $20</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">$20 - $25</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
              <span className="text-sm">Over $25</span>
            </label>
          </div>
        </div>
      </div>
    </aside>
  )
}

