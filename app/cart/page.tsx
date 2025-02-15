"use client"

import { useCart } from "@/context/CartContext"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCart()

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity)
    }
  }

  if (!items || items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-8">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link href="/coffee">
          <Button className="bg-[#8B6834] hover:bg-[#725627]">
            Continue Shopping
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-6 border-b pb-6">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={item.imageUrl || ''}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{item.name}</h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  {item.grind && `Grind: ${item.grind}`}
                  {item.purchaseOption && ` • ${item.purchaseOption}`}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-6 bg-[#8B6834] hover:bg-[#725627]">
            Proceed to Checkout
          </Button>
          
          <Link href="/coffee">
            <Button variant="outline" className="w-full mt-4">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
