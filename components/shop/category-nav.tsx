const categories = [
  "COFFEE BEANS",
  "SUBSCRIBER EXCLUSIVES",
  "K-CUP PODS",
  "TEA",
  "ESPRESSO CAPSULES",
  "DECAF",
  "MUGS + GEAR",
  "BUNDLES",
  "FLAVORED COFFEE & K-CUP PODS",
]

export default function CategoryNav() {
  return (
    <nav className="bg-[#F5F1EA] border-y border-[#E5E0D9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-14">
          <span className="font-medium text-sm text-gray-800 mr-8">SHOP BY:</span>
          <div className="flex gap-8 overflow-x-auto hide-scrollbar py-4">
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-[#8B6834] whitespace-nowrap hover:text-[#5C4023]"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

