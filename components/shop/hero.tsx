import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ShopHero() {
  return (
    <div className="relative h-[400px] w-full">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13.jpg-eE3vY3kJ8JJ4uphvX65T4sP4YUeE2z.jpeg"
        alt="Shop All Coffee"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">SHOP ALL</h1>
        <div className="w-full max-w-md px-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="You're gonna need a bigger cup!"
              className="w-full pl-4 pr-10 py-3 bg-white/90 backdrop-blur-sm text-lg placeholder:text-gray-600 rounded"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  )
}

