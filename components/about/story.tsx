import Image from "next/image"

export default function Story() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#8B6834] mb-6">The Original Craft Coffee</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                When we opened our first coffee shop, we introduced an artisan movement that forever changed the
                expectations of quality, depth, and flavor in coffee experiences.
              </p>
              <p>
                Today, we uphold our commitment to sourcing and roasting the world's finest coffees and sharing them
                with our communities. Our team of experts travel the world to find the best coffee regions and farmers,
                building lasting relationships in the process.
              </p>
              <p>
                At our roastery, we continue to roast in small batches, using the same high-quality standards that we
                established. Each batch is tested and tasted, ensuring that every cup meets our rigorous standards.
              </p>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aroma_photo_01.jpg-1W7VaJuP1O3Np6s3E0TUpsxTb5ZIWv.jpeg"
              alt="Coffee craftsmanship"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

