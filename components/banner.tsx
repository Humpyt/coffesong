import Link from "next/link"

export default function Banner() {
  return (
    <div className="bg-[#8B6834] text-white py-2 px-4">
      <div className="flex items-center justify-center gap-2">
        <span>←</span>
        <span>30% Off Gift Subscriptions</span>
        <Link href="/free-shipping" className="underline">
          Free Shipping on Orders $59+
        </Link>
        <span>→</span>
      </div>
    </div>
  )
}

