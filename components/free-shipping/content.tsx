import { Truck, Gift, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

const shippingMethods = [
  {
    title: "Standard Shipping",
    description: "Free on orders $59+",
    deliveryTime: "5-7 business days",
    icon: Truck,
  },
  {
    title: "Expedited Shipping",
    description: "$9.95 flat rate",
    deliveryTime: "2-3 business days",
    icon: Truck,
  },
  {
    title: "Overnight Shipping",
    description: "$29.95 flat rate",
    deliveryTime: "Next business day",
    icon: Truck,
  },
]

const benefits = [
  {
    title: "Free Shipping on Subscriptions",
    description: "All coffee subscriptions ship free, no minimum required.",
    icon: Gift,
  },
  {
    title: "Free Shipping for Peetnik Rewards Members",
    description: "Join our rewards program and enjoy free shipping on all orders.",
    icon: CreditCard,
  },
]

export default function FreeShippingContent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#8B6834] mb-8">Shipping Methods</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {shippingMethods.map((method) => (
            <div key={method.title} className="border border-gray-200 rounded-lg p-6">
              <method.icon className="w-12 h-12 text-[#8B6834] mb-4" />
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-2">{method.description}</p>
              <p className="text-sm text-gray-500">{method.deliveryTime}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#8B6834] mb-8">More Ways to Get Free Shipping</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start">
              <benefit.icon className="w-12 h-12 text-[#8B6834] mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#8B6834] mb-4">Ready to Shop?</h2>
        <p className="text-xl text-gray-600 mb-8">Explore our wide selection of premium coffees and teas.</p>
        <Button className="bg-[#8B6834] hover:bg-[#725628] text-white text-lg px-8 py-3">Shop Now</Button>
      </section>
    </div>
  )
}

