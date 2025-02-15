"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Monthly",
    price: "19.95",
    description: "Perfect for trying out our coffee",
    features: ["One bag per month", "Free shipping", "Cancel anytime", "Member-only perks"],
  },
  {
    name: "Bi-Weekly",
    price: "18.95",
    description: "Most popular for coffee lovers",
    features: ["Two bags per month", "15% savings", "Free priority shipping", "Exclusive coffee access"],
    popular: true,
  },
  {
    name: "Weekly",
    price: "17.95",
    description: "Best value for daily drinkers",
    features: ["Four bags per month", "20% savings", "Free priority shipping", "Early access to new releases"],
  },
]

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState("Bi-Weekly")

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#8B6834] mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect coffee subscription plan that fits your needs. All plans include freshly roasted coffee
            and free shipping.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative rounded-lg p-6 
                ${plan.popular ? "border-2 border-[#8B6834] shadow-lg" : "border border-gray-200"}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B6834] text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[#8B6834] mb-2">${plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#8B6834]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={selectedPlan === plan.name ? "default" : "outline"}
                className={`w-full ${
                  selectedPlan === plan.name
                    ? "bg-[#8B6834] hover:bg-[#725628] text-white"
                    : "border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white"
                }`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {selectedPlan === plan.name ? "Selected" : "Select Plan"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

