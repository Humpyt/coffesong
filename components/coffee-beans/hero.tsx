"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function CoffeeBeansHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77854d65-a619-470c-b60e-d39ed1065b5d-eSlpWLMqahOC7hP9JayIKyAnowTnLt.png"
          alt="Fresh coffee beans"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">PREMIUM COFFEE BEANS</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
            Discover our carefully curated selection of the world's finest coffee beans, roasted to perfection for an
            exceptional cup every time.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

