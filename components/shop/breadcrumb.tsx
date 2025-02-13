import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Breadcrumb() {
  return (
    <nav className="py-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link href="/" className="text-gray-500 hover:text-[#8B6834]">
            Home
          </Link>
        </li>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <li>
          <span className="text-gray-900 font-medium">Shop All</span>
        </li>
      </ol>
    </nav>
  )
}

