"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We&apos;ll send you an email with your order details
          and tracking information once your package ships.
        </p>
        <Link href="/coffee">
          <Button className="bg-[#8B6834] hover:bg-[#725627]">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  )
}
