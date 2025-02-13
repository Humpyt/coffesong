import Image from "next/image"

export default function FreeShippingHero() {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src="/placeholder.svg?height=400&width=1920"
        alt="Free Shipping"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">FREE SHIPPING</h1>
        <p className="text-xl max-w-2xl text-center">Enjoy free shipping on all orders over $59. No code needed.</p>
      </div>
    </div>
  )
}

