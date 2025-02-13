const filterCategories = [
  {
    title: "SHOP BY EXCLUSIVES",
    filters: ["Limited Release", "Small Batch Series"],
  },
  {
    title: "SHOP BY ROAST",
    filters: ["Dark", "Medium", "Light", "Decaf"],
  },
  {
    title: "SHOP BY SUBSCRIPTION",
    filters: ["Frequent Brewer", "Single Origin Series", "Small Batch Series"],
  },
  {
    title: "SHOP BY K-CUP PODS",
    filters: ["Dark Roast", "Medium Roast", "Light Roast"],
  },
  {
    title: "SHOP BY ESPRESSO CAPSULES",
    filters: ["Ristretto", "Espresso", "Lungo"],
  },
  {
    title: "SHOP BY DECAF",
    filters: ["Dark Roast", "Medium Roast", "Light Roast"],
  },
  {
    title: "SHOP BY ORGANIC",
    filters: ["Dark Roast", "Medium Roast", "Light Roast"],
  },
  {
    title: "SHOP BY BUNDLES",
    filters: ["Value Packs", "Samplers"],
  },
  {
    title: "SHOP BY SINGLE ORIGIN",
    filters: ["Americas", "Africa", "Asia Pacific"],
  },
  {
    title: "SHOP BY BREWING METHOD",
    filters: ["Drip", "French Press", "Pour Over", "Cold Brew"],
  },
  {
    title: "SHOP BY FLAVOR PROFILE",
    filters: ["Bright & Lively", "Smooth & Balanced", "Deep & Dark"],
  },
  {
    title: "SHOP BY GIFT SUBSCRIPTIONS",
    filters: ["3 Months", "6 Months", "12 Months"],
  },
]

export default function FilterSidebar() {
  return (
    <aside className="space-y-6">
      {filterCategories.map((category) => (
        <div key={category.title} className="border-b border-gray-200 pb-4">
          <h2 className="font-bold text-[#8B6834] text-sm mb-3">{category.title}</h2>
          <ul className="space-y-2">
            {category.filters.map((filter) => (
              <li key={filter}>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="rounded border-gray-300 text-[#8B6834] focus:ring-[#8B6834]" />
                  <span className="text-sm text-gray-600 group-hover:text-[#8B6834]">{filter}</span>
                </label>
              </li>
            ))}
          </ul>
          <button className="text-xs text-[#8B6834] mt-2 hover:underline">Show More +</button>
        </div>
      ))}
    </aside>
  )
}

