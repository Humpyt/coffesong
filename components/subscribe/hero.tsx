"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function SubscribeHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F5F1EA]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png"
          alt="Coffee subscription background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1EA]/80 to-[#F5F1EA]" />

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block bg-[#8B6834] text-white px-4 py-2 rounded-full text-sm font-medium">
              30% off your first month
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B6834] leading-tight">
              Fresh Coffee, <br />
              Delivered Your Way
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">
              Join our coffee subscription and enjoy freshly roasted, premium coffee delivered to your door on your
              schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#8B6834] hover:bg-[#725628] text-white h-14 px-8 text-lg">
                Start Your Subscription
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white h-14 px-8 text-lg"
              >
                View Plans
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#8B6834] text-white flex items-center justify-center text-xs">
                  ✓
                </div>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#8B6834] text-white flex items-center justify-center text-xs">
                  ✓
                </div>
                Cancel Anytime
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#8B6834] text-white flex items-center justify-center text-xs">
                  ✓
                </div>
                Fresh Roasted
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png"
                alt="Coffee subscription box"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 flex items-center gap-4 w-[90%]">
              <div className="flex-shrink-0 w-16 h-16 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png"
                  alt="Coffee bag"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="font-medium">Next Delivery</div>
                <div className="text-sm text-gray-600">Ethiopian Yirgacheffe - March 15</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

