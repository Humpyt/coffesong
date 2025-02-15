import { Truck, Coffee, Calendar, Gift } from "lucide-react"

const benefits = [
  {
    icon: Coffee,
    title: "Fresh Roasted Coffee",
    description: "Coffee is roasted to order and shipped within 24 hours of roasting.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free shipping on all subscription orders, no minimum required.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Choose your delivery frequency and modify it anytime.",
  },
  {
    icon: Gift,
    title: "Member Perks",
    description: "Get exclusive access to limited releases and subscriber-only coffees.",
  },
]

export default function SubscriptionBenefits() {
  return (
    <div className="py-16 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#8B6834] mb-4">Subscription Benefits</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our coffee subscription and enjoy these exclusive benefits with every delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8B6834] text-white mb-6">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

