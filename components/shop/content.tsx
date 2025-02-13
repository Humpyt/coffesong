"use client"
import ProductSection from "./product-section"

const sections = [
  {
    title: "SHOP BY COFFEE BEANS",
    filters: [
      { label: "DARK ROAST", count: 12 },
      { label: "MEDIUM ROAST", count: 8 },
      { label: "LIGHT ROAST", count: 4 },
    ],
    products: [
      {
        name: "MAJOR DICKASON'S BLEND®",
        price: "19.95",
        roastType: "DARK ROAST",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-1%20(1).jpg-SPr0b5woGawti0urmmwBKzDJI42Vyr.jpeg",
        rating: 4.5,
        reviews: 128,
      },
      {
        name: "ETHIOPIAN YIRGACHEFFE",
        price: "17.95",
        roastType: "LIGHT ROAST",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13.jpg-6d6Wk8wmbWRdZxyoVOYUmZZyzEzP1e.jpeg",
        rating: 4,
        reviews: 92,
      },
      {
        name: "SUMATRAN MANDHELING",
        price: "16.95",
        roastType: "MEDIUM ROAST",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.jpg-xOmyiQOQksnCGAsY9Ohi7D9I2P2iQh.jpeg",
        rating: 4.2,
        reviews: 67,
      },
    ],
  },
  {
    title: "SHOP BY SUBSCRIBER EXCLUSIVES",
    filters: [
      { label: "SMALL BATCH", count: 6 },
      { label: "SINGLE ORIGIN", count: 4 },
      { label: "SEASONAL", count: 2 },
    ],
    products: [
      {
        name: "KENYAN AA",
        price: "22.95",
        roastType: "MEDIUM ROAST",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/03%20(1).jpg-I13lKC5riPIS9BqQdtKKg4gkbhOkIU.jpeg",
        rating: 4.8,
        reviews: 150,
      },
      {
        name: "GUATEMALAN ANTIGUA",
        price: "20.95",
        roastType: "DARK ROAST",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07.jpg-N1dxcZ9y51jC2b4gOjVPTlLCUR9GMB.jpeg",
        rating: 4.6,
        reviews: 115,
      },
    ],
  },
  {
    title: "SHOP BY BUNDLES",
    filters: [
      { label: "BEST SELLERS", count: 4 },
      { label: "SAMPLERS", count: 3 },
      { label: "ORGANIC", count: 2 },
    ],
    products: [
      {
        name: "BEST SELLERS BUNDLE",
        price: "43.38",
        originalPrice: "57.85",
        roastType: "BUNDLE AND SAVE 25%",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09.jpg-IAx9USNBdVAEa4yxNVpEl8rgC7MOhN.jpeg",
        rating: 4.6,
        reviews: 5,
      },
      {
        name: "K-CUP® PODS SAMPLER BUNDLE",
        price: "59.92",
        originalPrice: "79.92",
        roastType: "BUNDLE AND SAVE 25%",
        imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.jpg-eBFZ3GbFBgPk75asi3rrzib9e1uqWB.jpeg",
        rating: 4.6,
        reviews: 5,
      },
      {
        name: "ESPRESSO CAPSULES SAMPLER BUNDLE",
        price: "30.00",
        originalPrice: "40.00",
        roastType: "BUNDLE AND SAVE 25%",
        imageUrl:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-1.jpg-VjuKQhsuRuf0UcYcMBVZBjrsFC9TA5.jpeg",
        rating: 4.5,
        reviews: 5,
      },
    ],
  },
]

export default function ShopContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <a href="/shop" className="text-sm text-[#8B6834] hover:underline">
          SHOP ALL
        </a>
      </div>

      <div className="space-y-16">
        {sections.map((section) => (
          <ProductSection
            key={section.title}
            title={section.title}
            filters={section.filters}
            products={section.products}
          />
        ))}
      </div>
    </div>
  )
}

