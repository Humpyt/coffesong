import Image from "next/image"

export default function CoffeeHero() {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src="https://sjc.microlink.io/KMtag6K2Z9njeR6C5YDVlQHjpiNFaVy0NPJdLiZPcRDJQyW31Ojj9SGXRWfC7LxpnHWo12Qg93cRoWYFRwDYkQ.jpeg"
        alt="Shop All Coffee"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-start">
          <h1 className="text-6xl font-bold text-white tracking-wide">
            SHOP ALL
            <br />
            COFFEE
          </h1>
          <div className="bg-white/90 backdrop-blur-sm p-6 max-w-md rounded-sm">
            <p className="text-gray-800 text-lg">
              Get your coffee fresh directly from our roastery to your door. Shop our best-selling coffees and get Free
              Shipping on all orders over $49.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

