import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerSections = {
  SHOP: [
    { name: "Coffee Beans", href: "/coffee-beans" },
    { name: "Subscriptions", href: "/subscriptions" },
    { name: "Gift Cards", href: "/gift-cards" },
    { name: "Merchandise", href: "/merchandise" },
  ],
  LEARN: [
    { name: "Our Story", href: "/our-story" },
    { name: "Brewing Guides", href: "/brewing-guides" },
    { name: "Blog", href: "/blog" },
    { name: "Coffee 101", href: "/coffee-101" },
  ],
  SUPPORT: [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "FAQ", href: "/faq" },
  ],
  WHOLESALE: [
    { name: "Become a Partner", href: "/wholesale" },
    { name: "Find a Store", href: "/stores" },
    { name: "Bulk Orders", href: "/bulk-orders" },
  ],
}

const socialLinks = [
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'YouTube', href: '#', icon: Youtube }
];

export default function Footer() {
  return (
    <footer className="bg-[#2D2926] text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-gray-700">
          {/* Logo and About Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/202%20(2)-mYdLBv5OUGs7FhABOR5x8I5wLj9jnU.png"
                alt="Coffee Song"
                width={180}
                height={60}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Crafting exceptional coffee experiences since 2020. Every bean, every roast, every cup tells a story.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold text-sm mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-700">
          <div className="max-w-md">
            <h3 className="font-bold text-lg mb-2">Stay in Touch</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter and receive 10% off your first order.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B6834]"
              />
              <button className="px-6 py-2 bg-[#8B6834] hover:bg-[#725628] rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
            <p> {new Date().getFullYear()} Coffee Song. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
