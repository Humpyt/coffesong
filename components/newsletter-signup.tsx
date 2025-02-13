import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="md:flex-1 max-w-md">
            <h2 className="text-2xl font-bold mb-2">NEVER MISS AN OFFER</h2>
            <p className="text-gray-600">
              Sign up for our newsletter and receive 10% off + free shipping on your first order.
            </p>
          </div>
          <div className="w-full md:w-auto flex gap-4">
            <Input type="email" placeholder="Enter your email" className="max-w-xs" />
            <Button className="bg-[#8B6834] hover:bg-[#725628] text-white">SIGN UP</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

