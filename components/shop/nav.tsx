const categories = [
  { name: "COFFEE BEANS", href: "#coffee-beans" },
  { name: "SUBSCRIBER EXCLUSIVES", href: "#subscriber-exclusives" },
  { name: "K-CUP PODS", href: "#k-cup-pods" },
  { name: "TEA", href: "#tea" },
  { name: "ESPRESSO CAPSULES", href: "#espresso-capsules" },
  { name: "DECAF", href: "#decaf" },
  { name: "MUGS", href: "#mugs" },
]

export default function ShopNav() {
  return (
    <nav className="bg-[#F5F1EA] border-y border-[#E5E0D9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-14">
          <span className="font-medium text-sm text-[#8B6834] mr-8">SHOP BY:</span>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="text-sm text-[#8B6834] whitespace-nowrap hover:text-[#5C4023]"
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

