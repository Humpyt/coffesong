"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function CoffeeHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0 transform" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <Image
          src="https://sjc.microlink.io/KMtag6K2Z9njeR6C5YDVlQHjpiNFaVy0NPJdLiZPcRDJQyW31Ojj9SGXRWfC7LxpnHWo12Qg93cRoWYFRwDYkQ.jpeg"
          alt="Shop All Coffee"
          fill
          className="object-cover scale-110"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            SHOP ALL
            <br />
            COFFEE
          </h1>
          <p className="text-lg text-white/90 bg-black/30 backdrop-blur-sm p-6 rounded-lg">
            Get your coffee fresh directly from our roastery to your door. Shop Peet's best-selling coffees and get Free
            Shipping on all orders over $49.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

