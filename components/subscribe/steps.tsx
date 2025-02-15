"use client"

import { motion } from "framer-motion"
import { Coffee, Package, Truck, Calendar } from "lucide-react"

const steps = [
  {
    icon: Coffee,
    title: "Choose Your Coffee",
    description: "Select from our premium coffee collection or let us curate based on your taste preferences.",
  },
  {
    icon: Calendar,
    title: "Pick Your Schedule",
    description: "Choose how often you want your coffee delivered - weekly, bi-weekly, or monthly.",
  },
  {
    icon: Package,
    title: "Fresh Roasted",
    description: "We roast your coffee to order and package it at peak freshness.",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Your coffee arrives at your door right when you need it.",
  },
]

export default function SubscribeSteps() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6834] mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with your coffee subscription in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-20px)] h-[2px] bg-[#8B6834]/20">
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#8B6834] rounded-full -translate-y-1/2" />
                </div>
              )}

              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8B6834] text-white mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

