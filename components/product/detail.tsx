"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const grindOptions = [
  { id: "whole-bean", label: "WHOLE BEAN", description: "Grind at home for maximum freshness" },
  { id: "drip", label: "DRIP", description: "For flat-bottom filters & most coffee makers" },
  { id: "press", label: "PRESS", description: "For French Press & cold brew" },
  { id: "espresso", label: "ESPRESSO", description: "For espresso machines" },
]

const subscriptionOptions = [
  {
    title: "ONE TIME PURCHASE",
    price: "$19.95",
    description: "One-time purchase shipped now",
  },
  {
    title: "SUBSCRIBE & SAVE 10%",
    price: "$17.96",
    description: "Regular deliveries, cancel anytime",
    savings: "Save $1.99",
    isSubscription: true,
  },
]

export default function ProductDetail() {
  const [selectedGrind, setSelectedGrind] = useState("whole-bean")
  const [quantity, setQuantity] = useState(1)
  const [selectedPurchaseOption, setSelectedPurchaseOption] = useState("one-time")

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link href="/coffee" className="text-gray-600 hover:text-[#8B6834]">
          COFFEE
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href="/coffee/flavored" className="text-gray-600 hover:text-[#8B6834]">
          FLAVORED
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900">HAZELNUT MOCHA</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-[#F8F7F5] rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-1%20(1).jpg-SPr0b5woGawti0urmmwBKzDJI42Vyr.jpeg"
              alt="Hazelnut Mocha Coffee"
              fill
              className="object-contain p-12"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((idx) => (
              <button key={idx} className="relative aspect-square border rounded-lg p-2 hover:border-[#8B6834]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/04-1%20(1).jpg-SPr0b5woGawti0urmmwBKzDJI42Vyr.jpeg"
                  alt={`Hazelnut Mocha view ${idx}`}
                  fill
                  className="object-contain p-2"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">HAZELNUT MOCHA</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-[#8B6834] text-[#8B6834]" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">(125)</span>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="space-y-4">
            {subscriptionOptions.map((option) => (
              <label
                key={option.title}
                className={`block border rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedPurchaseOption === (option.isSubscription ? "subscription" : "one-time")
                    ? "border-[#8B6834] bg-[#8B6834]/5"
                    : "border-gray-200 hover:border-[#8B6834]"
                }`}
              >
                <input
                  type="radio"
                  name="purchase-option"
                  className="hidden"
                  checked={selectedPurchaseOption === (option.isSubscription ? "subscription" : "one-time")}
                  onChange={() => setSelectedPurchaseOption(option.isSubscription ? "subscription" : "one-time")}
                />
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold mb-1">{option.title}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{option.price}</div>
                    {option.savings && <div className="text-sm text-green-600">{option.savings}</div>}
                  </div>
                </div>
              </label>
            ))}
          </div>

          {/* Grind Options */}
          <div className="space-y-4">
            <h3 className="font-bold">SELECT GRIND</h3>
            <div className="grid grid-cols-2 gap-3">
              {grindOptions.map((option) => (
                <label
                  key={option.id}
                  className={`block border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedGrind === option.id
                      ? "border-[#8B6834] bg-[#8B6834]/5"
                      : "border-gray-200 hover:border-[#8B6834]"
                  }`}
                >
                  <input
                    type="radio"
                    name="grind"
                    className="hidden"
                    checked={selectedGrind === option.id}
                    onChange={() => setSelectedGrind(option.id)}
                  />
                  <div className="font-bold mb-1">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                </label>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-4">
            <h3 className="font-bold">QUANTITY</h3>
            <div className="flex items-center border rounded-lg w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-50"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <div className="flex-1 text-center">{quantity}</div>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-gray-50">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button className="w-full bg-[#8B6834] hover:bg-[#725628] text-white h-12">
            {selectedPurchaseOption === "subscription" ? "SUBSCRIBE NOW" : "ADD TO CART"}
          </Button>

          {/* Product Details */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>DESCRIPTION</AccordionTrigger>
              <AccordionContent>
                Rich chocolate and toasted hazelnut flavors mingle in this delightful medium roast coffee. The perfect
                combination of nutty and sweet, Hazelnut Mocha is a dessert-worthy treat you can enjoy any time of day.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="details">
              <AccordionTrigger>PRODUCT DETAILS</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Medium roast, flavored coffee</li>
                  <li>100% Arabica Coffee</li>
                  <li>Artificially flavored</li>
                  <li>Kosher certified</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
              <AccordionTrigger>SHIPPING & RETURNS</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">Free shipping on orders over $59!</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Standard Shipping (5-7 business days): $7.95</li>
                  <li>Expedited Shipping (2-3 business days): $9.95</li>
                  <li>Overnight Shipping (Next business day): $29.95</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

