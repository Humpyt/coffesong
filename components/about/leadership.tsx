import Image from "next/image"

const leaders = [
  {
    name: "Jane Smith",
    title: "Chief Executive Officer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/07%20(1).jpg-AnN3e8mD3EUKlSWU3irlREizGKJfMo.jpeg",
  },
  {
    name: "Michael Johnson",
    title: "Chief Coffee Officer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13.jpg-oIegs9ZkXbaYC45PkE22tmElXVcOXC.jpeg",
  },
  {
    name: "Sarah Williams",
    title: "VP of Retail Operations",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09.jpg-mcKEcNG9hbndyiZFW3KpligSFUN6Lp.jpeg",
  },
  {
    name: "David Chen",
    title: "Head of Roasting",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IFfAivKiQjeR_h8wa4sE0A-370x410-e6vVBJjLR29G2p5CYQXY5PuPYYqp4X.png",
  },
]

export default function Leadership() {
  return (
    <section className="py-20 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B6834] mb-12">Our Leadership</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="text-center">
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
              <p className="text-gray-600">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

