import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function SubscriptionHero() {
  return (
    <div className="relative min-h-[600px] bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B6834]">
              Coffee Delivered Fresh To Your Door
            </h1>
            <p className="text-lg text-gray-700">
              Never run out of your favorite coffee with our convenient subscription service. Get freshly roasted beans
              delivered on your schedule.
            </p>
            <div className="space-y-4">
              <Button className="bg-[#8B6834] hover:bg-[#725628] text-white px-8 py-6">START YOUR SUBSCRIPTION</Button>
              <p className="text-sm text-gray-600">
                Save up to 15% on every delivery. Cancel or modify your subscription anytime.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1eGN3x399HcyyI07kEBh6PMWsMJ6TH.png"
              alt="Coffee Song Subscription Box"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

