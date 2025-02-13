import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const stories = [
  {
    title: "The Legacy of Alfred Peet",
    excerpt: "Discover how our founder revolutionized the coffee industry in America.",
    image: "/placeholder.svg?height=400&width=600",
    category: "History",
  },
  {
    title: "From Farm to Cup: Our Sourcing Journey",
    excerpt: "Follow the journey of our coffee beans from remote farms to your morning brew.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Sourcing",
  },
  {
    title: "The Art of Roasting",
    excerpt: "Learn about our meticulous roasting process that brings out the best in every bean.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Craft",
  },
  {
    title: "Sustainability in Every Sip",
    excerpt: "Explore our commitment to environmental responsibility and ethical sourcing.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Sustainability",
  },
  {
    title: "Meet Our Roastmasters",
    excerpt: "Get to know the experts behind our perfectly roasted coffee.",
    image: "/placeholder.svg?height=400&width=600",
    category: "People",
  },
  {
    title: "The Peet's Difference: Our Unique Blends",
    excerpt: "Discover what makes our signature blends stand out in the world of coffee.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Products",
  },
]

function StoryCard({ story }: { story: (typeof stories)[0] }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48">
        <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
        <div className="absolute top-4 left-4 bg-[#8B6834] text-white text-xs font-bold px-2 py-1 rounded">
          {story.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{story.title}</h3>
        <p className="text-gray-600 mb-4">{story.excerpt}</p>
        <Link href={`/stories/${story.title.toLowerCase().replace(/\s+/g, "-")}`}>
          <Button
            variant="outline"
            className="w-full border-[#8B6834] text-[#8B6834] hover:bg-[#8B6834] hover:text-white"
          >
            Read More
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function StoriesGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </div>
    </div>
  )
}

