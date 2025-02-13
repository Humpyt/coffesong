import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 min-h-[600px]">
      <div className="flex flex-col justify-center p-8 md:p-16 space-y-6">
        <div className="uppercase text-sm tracking-wider text-gray-600">Limited Release</div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#8B6834]">Roasting in February</h1>
        <p className="text-gray-700 leading-relaxed">
          Experience the perfect blend of tradition and innovation with our artisanal coffee selection. Each bag is
          carefully crafted to bring you the finest coffee experience, from bean to cup.
        </p>
        <div className="space-y-4">
          <Button className="bg-[#8B6834] hover:bg-[#725628] text-white px-8 py-6 uppercase">Shop Now</Button>
          <div>
            <a href="/coffee" className="text-sm uppercase tracking-wider flex items-center gap-2">
              Shop All Coffee
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full min-h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07.jpg-7s9w0wcrTRkm7IZHufjXxiXgcKyn5V.jpeg"
          alt="Featured Coffee Bag"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

