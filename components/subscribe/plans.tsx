"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "19.95",
    frequency: "Monthly",
    description: "Perfect for trying out our coffee",
    features: ["One 12oz bag per month", "Free shipping", "Member-only perks", "Cancel anytime"],
  },
  {
    name: "Coffee Lover",
    price: "18.95",
    frequency: "Bi-Weekly",
    description: "Most popular for coffee lovers",
    features: [
      "Two 12oz bags per month",
      "15% savings on all orders",
      "Free priority shipping",
      "Exclusive coffee access",
      "Cancel anytime",
    ],
    popular: true,
  },
  {
    name: "Coffee Enthusiast",
    price: "17.95",
    frequency: "Weekly",
    description: "Best value for daily drinkers",
    features: [
      "Four 12oz bags per month",
      "20% savings on all orders",
      "Free priority shipping",
      "Early access to new releases",
      "Exclusive member events",
      "Cancel anytime",
    ],
  },
]

export default function SubscribePlans() {
  const [selectedPlan, setSelectedPlan] = useState("Coffee Lover")

  return (
    <div className="py-24 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6834] mb-4">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect coffee subscription plan that fits your needs. All plans include freshly roasted coffee
            and free shipping.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                relative bg-white rounded-2xl p-8 
                ${plan.popular ? "border-2 border-[#8B6834] shadow-xl" : "border border-gray-200"}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B6834] text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-sm text-gray-600 mb-4">{plan.frequency}</div>
                <div className="text-4xl font-bold text-[#8B6834]">${plan.price}</div>
                <div className="text-sm text-gray-600">per delivery</div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8B6834]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#8B6834]" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full h-12 ${
                  selectedPlan === plan.name
                    ? "bg-[#8B6834] hover:bg-[#725628] text-white"
                    : "bg-white border-2 border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white"
                }`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {selectedPlan === plan.name ? "Selected" : "Choose Plan"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

