import Image from "next/image"

interface CategoryHeroProps {
  title: string
  description: string
}

export default function CategoryHero({ title, description }: CategoryHeroProps) {
  return (
    <div className="relative h-[300px] w-full">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0fb48ba1-c07d-4e84-999a-a913dc844c83-9B20vE9dlMLVazREIee9HeNRzjNXeG.png"
        alt={title}
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl text-center px-4">{description}</p>
      </div>
    </div>
  )
}

