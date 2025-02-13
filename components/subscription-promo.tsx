import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tag, Truck, Calendar } from "lucide-react"

export default function SubscriptionPromo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square w-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top_BG.jpg-u3OKi0AQ1ygEBjnaD4Ha6YIx9mQd7M.jpeg"
            alt="Coffee Subscription"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6834]">
            ENJOY FREE HOME DELIVERY, SUBSCRIBE AND SAVE
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <Tag className="w-6 h-6 text-[#8B6834] flex-shrink-0" />
              <div>
                <h3 className="font-bold uppercase mb-1">30% OFF FOR NEW SUBSCRIBERS</h3>
                <p className="text-gray-700">Start a new subscription and get 30% off your first order</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Truck className="w-6 h-6 text-[#8B6834] flex-shrink-0" />
              <div>
                <h3 className="font-bold uppercase mb-1">FREE SHIPPING</h3>
                <p className="text-gray-700">We cover the cost, so you can enjoy every cup</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Calendar className="w-6 h-6 text-[#8B6834] flex-shrink-0" />
              <div>
                <h3 className="font-bold uppercase mb-1">NEW COFFEE EACH MONTH</h3>
                <p className="text-gray-700">Our Curated Series subscriptions feature a different coffee each month</p>
              </div>
            </div>
          </div>

          <Button className="bg-[#8B6834] hover:bg-[#725628] text-white px-8 py-6 w-full md:w-auto">
            CHOOSE A SUBSCRIPTION
          </Button>
        </div>
      </div>
    </div>
  )
}

