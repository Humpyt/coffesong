const categories = [
  {
    title: "SHOP BY COFFEE BEANS",
    filters: ["DARK ROAST", "MEDIUM ROAST", "LIGHT ROAST", "DECAF"],
  },
  {
    title: "SHOP BY SUBSCRIBER EXCLUSIVES",
    filters: ["SMALL BATCH", "SINGLE ORIGIN", "SEASONAL"],
  },
  {
    title: "SHOP BY K-CUP PODS",
    filters: ["DARK ROAST", "MEDIUM ROAST", "LIGHT ROAST"],
  },
  {
    title: "SHOP BY TEA",
    filters: ["BLACK", "GREEN", "HERBAL", "OOLONG", "WHITE"],
  },
  {
    title: "SHOP BY ESPRESSO CAPSULES",
    filters: ["RISTRETTO", "ESPRESSO", "LUNGO"],
  },
  {
    title: "SHOP BY DECAF",
    filters: ["COFFEE BEANS", "K-CUP PODS", "ESPRESSO CAPSULES"],
  },
  {
    title: "SHOP BY MUGS + GEAR",
    filters: ["DRINKWARE", "EQUIPMENT", "ACCESSORIES"],
  },
  {
    title: "SHOP BY BUNDLES",
    filters: ["VALUE PACKS", "SAMPLERS", "GIFT SETS"],
  },
  {
    title: "SHOP BY FLAVORED COFFEE & K-CUP PODS",
    filters: ["COFFEE BEANS", "K-CUP PODS"],
  },
]

export default function ShopSidebar() {
  return (
    <aside className="space-y-6">
      {categories.map((category) => (
        <div key={category.title} className="pb-4 border-b border-gray-200">
          <h2 className="font-bold text-[#8B6834] text-sm mb-2">{category.title}</h2>
          <div className="space-y-2">
            {category.filters.map((filter) => (
              <label key={filter} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
                <span className="text-sm text-gray-700 group-hover:text-[#8B6834]">{filter}</span>
              </label>
            ))}
          </div>
          <button className="text-xs text-[#8B6834] mt-2 hover:underline">SHOP ALL →</button>
        </div>
      ))}
    </aside>
  )
}

