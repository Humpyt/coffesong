import Image from "next/image"

export default function CollectionHero() {
  return (
    <div className="relative h-[200px] w-full">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-peets-collections-all-coffees-2025-02-02-17_07_44-MsvHXMMA9xt6nPwoO9iyMK08v5AuyF.png"
        alt="Coffee beans background"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white tracking-wider">SHOP ALL COFFEE</h1>
      </div>
    </div>
  )
}

