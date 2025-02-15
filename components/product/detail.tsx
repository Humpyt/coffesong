"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Minus, Plus, Star, Play, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useCart } from "@/context/CartContext"
import { useParams } from "next/navigation"
import { sections } from "@/components/shop/content"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const grindOptions = [
  { id: "whole-bean", label: "WHOLE BEAN", description: "Grind at home for maximum freshness" },
  { id: "drip", label: "DRIP", description: "For flat-bottom filters & most coffee makers" },
  { id: "press", label: "PRESS", description: "For French Press & cold brew" },
  { id: "espresso", label: "ESPRESSO", description: "For espresso machines" },
]

const subscriptionOptions = [
  {
    title: "ONE TIME PURCHASE",
    description: "One-time purchase shipped now",
  },
  {
    title: "SUBSCRIBE & SAVE 10%",
    description: "Regular deliveries, cancel anytime",
    savings: "Save 10%",
    isSubscription: true,
  },
]

export default function ProductDetail() {
  const params = useParams()
  const { addItem } = useCart()
  const [selectedGrind, setSelectedGrind] = useState(grindOptions[0])
  const [selectedPurchaseOption, setSelectedPurchaseOption] = useState(subscriptionOptions[0])
  const [quantity, setQuantity] = useState(1)

  // Find the product from the sections data
  const product = sections.flatMap(section => section.products)
    .find(p => p.id === params.slug)

  if (!product) return null

  const handleAddToCart = (isSubscription: boolean = false) => {
    const price = isSubscription 
      ? parseFloat(product.price) * 0.9 // 10% discount for subscription
      : parseFloat(product.price)

    addItem({
      id: `${product.id}${isSubscription ? '-sub' : ''}`,
      name: product.name,
      price: price,
      quantity,
      imageUrl: product.imageUrl,
      grind: selectedGrind.label,
      purchaseOption: isSubscription ? 'SUBSCRIBE & SAVE 10%' : 'ONE TIME PURCHASE'
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-8">
        <Link href="/coffee" className="text-gray-600 hover:text-[#8B6834]">
          COFFEE
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <Link href={`/${product.category ?? 'coffee'}`} className="text-gray-600 hover:text-[#8B6834]">
          {(product.category ?? 'coffee').toUpperCase().replace('-', ' ')}
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900">{product.name.toUpperCase()}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images Section */}
        <div className="space-y-6">
          <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-square relative bg-gray-100 rounded cursor-pointer">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12.5vw"
              />
            </div>
            {/* Add more thumbnail images here */}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>
            <button className="flex items-center gap-1 text-gray-600 hover:text-[#8B6834]">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Add to Wishlist</span>
            </button>
          </div>
          <p className="text-xl font-semibold text-[#8B6834]">${product.price} / LB</p>
          <p className="text-gray-600 mt-4">
            Refine your palate and elevate your coffee experience with this premier blend, our all-time best seller.
          </p>

          {/* Roast Type and Flavor Profile */}
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">ROAST TYPE:</h3>
              <p className="text-gray-800">{product.roastType}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">FLAVOR PROFILE:</h3>
              <div className="flex gap-4">
                {product.flavorNotes?.map((note, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span>•</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grind Options */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase mb-4">CHOOSE YOUR GRIND:</h3>
            <div className="grid grid-cols-4 gap-2">
              {grindOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedGrind(option)}
                  className={`p-4 text-center border rounded ${
                    selectedGrind.id === option.id
                      ? 'bg-[#F7F4EF] border-[#8B6834]'
                      : 'border-gray-200 hover:border-[#8B6834]'
                  }`}
                >
                  <div className="h-8 flex items-center justify-center mb-2">
                    {option.id === 'whole-bean' && (
                      <i className="fa-solid fa-coffee-bean text-xl"></i>
                    )}
                    {option.id === 'drip' && (
                      <i className="fa-solid fa-mug-hot text-xl"></i>
                    )}
                    {option.id === 'press' && (
                      <i className="fa-solid fa-french-press text-xl"></i>
                    )}
                    {option.id === 'espresso' && (
                      <i className="fa-solid fa-mug-saucer text-xl"></i>
                    )}
                  </div>
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Options */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {/* Subscribe Option */}
            <div className="border rounded-lg p-6 bg-[#F7F4EF]">
              <div className="flex items-center gap-2 mb-1">
                <i className="fa-solid fa-rotate text-[#8B6834]"></i>
                <h3 className="font-semibold">SUBSCRIBE &<br />GET FREE SHIPPING</h3>
              </div>
              <p className="text-lg font-semibold mb-4">${(parseFloat(product.price) * 0.9).toFixed(2)} / LB</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2">QUANTITY:</p>
                  <div className="flex items-center border rounded bg-white">
                    <button className="p-2 hover:bg-gray-100" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                      <i className="fa-solid fa-minus text-sm"></i>
                    </button>
                    <span className="flex-1 text-center">{quantity} BAG</span>
                    <button className="p-2 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>
                      <i className="fa-solid fa-plus text-sm"></i>
                    </button>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm mb-2">SHIPS EVERY:</p>
                  <div className="flex items-center border rounded bg-white">
                    <button className="p-2 hover:bg-gray-100">
                      <i className="fa-solid fa-minus text-sm"></i>
                    </button>
                    <span className="flex-1 text-center">4 WEEKS</span>
                    <button className="p-2 hover:bg-gray-100">
                      <i className="fa-solid fa-plus text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(true)}
                className="w-full bg-[#8B6834] text-white py-3 rounded mt-6 hover:bg-[#725627]"
              >
                <i className="fa-solid fa-truck-fast mr-2"></i>
                SUBSCRIBE & SHIP FREE
              </button>
            </div>

            {/* One-time Purchase Option */}
            <div className="border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-1">
                <i className="fa-solid fa-bag-shopping text-[#8B6834]"></i>
                <h3 className="font-semibold">ONE-TIME PURCHASE</h3>
              </div>
              <p className="text-lg font-semibold mb-4">${product.price} / LB</p>

              <div>
                <p className="text-sm mb-2">QUANTITY:</p>
                <div className="flex items-center border rounded">
                  <button className="p-2 hover:bg-gray-100" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                    <i className="fa-solid fa-minus text-sm"></i>
                  </button>
                  <span className="flex-1 text-center">{quantity} BAG</span>
                  <button className="p-2 hover:bg-gray-100" onClick={() => setQuantity(quantity + 1)}>
                    <i className="fa-solid fa-plus text-sm"></i>
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(false)}
                className="w-full bg-[#8B6834] text-white py-3 rounded mt-6 hover:bg-[#725627]"
              >
                <i className="fa-solid fa-cart-plus mr-2"></i>
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Promo Code Banner */}
          <div className="mt-4 border border-dashed border-[#8B6834] p-4 rounded-lg text-center">
            <i className="fa-solid fa-tag text-[#8B6834] mr-2"></i>
            <span className="text-sm">
              GET 35% OFF YOUR FIRST PEET'S SUBSCRIPTION
              WITH PROMO CODE <span className="font-semibold">NEWSUB35</span>
            </span>
          </div>

          {/* Flavor Profile */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <i className="fa-solid fa-earth-americas text-2xl text-[#8B6834] mb-2"></i>
              <p className="text-sm font-medium">Earth</p>
            </div>
            <div className="text-center">
              <i className="fa-solid fa-pepper-hot text-2xl text-[#8B6834] mb-2"></i>
              <p className="text-sm font-medium">Spice</p>
            </div>
            <div className="text-center">
              <i className="fa-solid fa-star text-2xl text-[#8B6834] mb-2"></i>
              <p className="text-sm font-medium">Everything</p>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <Tabs defaultValue="description" className="mt-8">
          <TabsList className="w-full border-b">
            <TabsTrigger value="description" className="flex-1">DESCRIPTION</TabsTrigger>
            <TabsTrigger value="details" className="flex-1">DETAILS</TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1">REVIEWS</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-6">
            <div className="prose max-w-none">
              <p>Experience the rich, full-bodied flavor of our signature blend. 
              Carefully roasted to perfection, this coffee delivers notes of 
              {product.flavorNotes?.join(", ")} with a smooth finish.</p>
            </div>
          </TabsContent>
          <TabsContent value="details" className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">ORIGIN</h4>
                  <p className="text-gray-600">Multiple Origins</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">ROAST LEVEL</h4>
                  <p className="text-gray-600">{product.roastType}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg font-semibold">
                  {product.rating} out of 5
                </p>
              </div>
              <p className="text-gray-600">
                Based on {product.reviews} reviews
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-4 gap-6">
          {sections[0].products.slice(0, 4).map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              href={`/products/${relatedProduct.id}`}
              className="group"
            >
              <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={relatedProduct.imageUrl}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-2">{relatedProduct.name}</h3>
              <p className="text-[#8B6834]">${relatedProduct.price}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="mt-16 aspect-video relative bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-[#8B6834] ml-1" />
          </button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">@CoffeeSong on Instagram</h2>
        <div className="grid grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={product.imageUrl}
                alt="Instagram post"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
