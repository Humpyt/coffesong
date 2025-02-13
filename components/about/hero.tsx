import Image from "next/image"

export default function AboutHero() {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07.jpg-7s9w0wcrTRkm7IZHufjXxiXgcKyn5V.jpeg"
        alt="Our Coffee Journey"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story Since 1966</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            For over 50 years, our commitment to crafting the world's finest coffee has remained unchanged.
          </p>
        </div>
      </div>
    </div>
  )
}

