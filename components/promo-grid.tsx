import Image from "next/image"

interface PromoCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  ctaText: string
  ctaLink: string
}

function PromoCard({ title, description, imageUrl, imageAlt, ctaText, ctaLink }: PromoCardProps) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[4/3] w-full mb-6">
        <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover rounded-lg" />
      </div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={ctaLink} className="text-sm uppercase tracking-wider flex items-center gap-2 hover:underline">
        {ctaText}
        <span>→</span>
      </a>
    </div>
  )
}

export default function PromoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <PromoCard
          title="Premium Coffee Selection"
          description="Discover our carefully curated collection of premium coffee beans, each selected for its unique character and exceptional quality."
          imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13.jpg-oIegs9ZkXbaYC45PkE22tmElXVcOXC.jpeg"
          imageAlt="Premium Coffee Selection"
          ctaText="Shop Now"
          ctaLink="/shop"
        />

        <PromoCard
          title="Artisanal Roasting"
          description="Experience the difference of our artisanal roasting process, where each batch is crafted to perfection."
          imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.jpg-0e6NHfsWVyfsbkacJj3X8koHd5ubPm.jpeg"
          imageAlt="Artisanal Coffee Roasting"
          ctaText="Learn More"
          ctaLink="/about"
        />

        <PromoCard
          title="Signature Blends"
          description="Explore our signature coffee blends, created with passion and expertise to deliver exceptional flavor in every cup."
          imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09.jpg-mcKEcNG9hbndyiZFW3KpligSFUN6Lp.jpeg"
          imageAlt="Signature Coffee Blends"
          ctaText="Shop Blends"
          ctaLink="/blends"
        />

        <PromoCard
          title="Coffee Subscription"
          description="Never run out of your favorite coffee with our convenient subscription service, delivering fresh beans right to your door."
          imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.jpg-gRS7ZhAGQAeYy9OasjHjkhdc7euXpX.jpeg"
          imageAlt="Coffee Subscription Service"
          ctaText="Subscribe Now"
          ctaLink="/subscribe"
        />
      </div>
    </div>
  )
}

