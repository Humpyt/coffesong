"use client"
import { motion } from "framer-motion"
import ProductCarousel from "./product-carousel"

const sections = [
  {
    title: "SHOP BY EXCLUSIVES",
    products: [
      {
        id: 1,
        name: "ULTRA COFFEE CONCENTRATE",
        price: "21.00",
        unit: "8 FL OZ",
        label: "NEW",
        imageUrl:
          "https://sjc.microlink.io/KMtag6K2Z9njeR6C5YDVlQHjpiNFaVy0NPJdLiZPcRDJQyW31Ojj9SGXRWfC7LxpnHWo12Qg93cRoWYFRwDYkQ.jpeg",
        flavorNotes: [
          { icon: "🍫", label: "CHOCOLATE TRUFFLE" },
          { icon: "🍋", label: "LEMON CURD" },
          { icon: "🌰", label: "HAZELNUT" },
        ],
      },
      {
        id: 2,
        name: "PERU ORGANIC DEL NORTE",
        price: "21.95",
        unit: "LB",
        label: "LIMITED RELEASE",
        imageUrl:
          "https://sjc.microlink.io/KMtag6K2Z9njeR6C5YDVlQHjpiNFaVy0NPJdLiZPcRDJQyW31Ojj9SGXRWfC7LxpnHWo12Qg93cRoWYFRwDYkQ.jpeg",
        flavorNotes: [
          { icon: "🍬", label: "SWEET PANELA" },
          { icon: "🍑", label: "STONE FRUIT" },
          { icon: "☕", label: "COCOA POWDER" },
        ],
      },
      {
        id: 3,
        name: "JUBILANT BLEND",
        price: "21.95",
        unit: "LB",
        label: "MEDIUM ROAST",
        imageUrl:
          "https://sjc.microlink.io/KMtag6K2Z9njeR6C5YDVlQHjpiNFaVy0NPJdLiZPcRDJQyW31Ojj9SGXRWfC7LxpnHWo12Qg93cRoWYFRwDYkQ.jpeg",
        flavorNotes: [
          { icon: "🍯", label: "HONEY YOGURT" },
          { icon: "🥖", label: "BRIOCHE" },
          { icon: "🥜", label: "TOASTED PECAN" },
        ],
      },
    ],
  },
  // Add more sections as needed...
]

export default function CoffeeContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <a href="/coffee" className="text-sm text-[#8B6834] hover:underline">
          SHOP ALL COFFEE
        </a>
      </motion.div>

      <div className="space-y-16">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-[#8B6834] mb-8">{section.title}</h2>
            <ProductCarousel products={section.products} />
          </motion.section>
        ))}
      </div>
    </div>
  )
}

