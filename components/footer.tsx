import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  "HELP CENTER": [
    { name: "CONTACT US", href: "/contact" },
    { name: "HELP CENTER", href: "/help" },
    { name: "SHIPPING & RETURNS", href: "/shipping" },
  ],
  "GIFT CARDS": [{ name: "SHOP GIFT CARDS", href: "/gift-cards" }],
  OFFERS: [
    { name: "STUDENT DISCOUNT", href: "/student-discount" },
    { name: "CURRENT OFFERS", href: "/offers" },
    { name: "GET $25", href: "/referral" },
  ],
  COMPANY: [
    { name: "CAREERS", href: "/careers" },
    { name: "OUR PEOPLE", href: "/our-people" },
    { name: "NEWSROOM", href: "/news" },
    { name: "CODE OF ETHICS", href: "/ethics" },
    { name: "SUPPLY CHAIN TRANSPARENCY", href: "/supply-chain" },
    { name: "SUPPLIER CODE OF CONDUCT", href: "/supplier-code" },
  ],
  "PARTNER WITH COFFEE SONG": [
    { name: "FOODSERVICE PROGRAM", href: "/foodservice" },
    { name: "BECOME AN AFFILIATE", href: "/affiliate" },
    { name: "FRANCHISE", href: "/franchise" },
  ],
  "FIND COFFEE SONG IN GROCERY": [{ name: "PRODUCT FINDER", href: "/product-finder" }],
  BLOG: [{ name: "THE CUPPING ROOM", href: "/blog" }],
}

export default function Footer() {
  return (
    <footer className="bg-[#2D2926] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Image 
              src="/logo.svg" 
              alt="Coffee Song" 
              width={100} 
              height={100} 
              className="w-24 h-24"
            />
            <div className="space-y-2">
              <p className="text-lg font-medium">Coffee Song</p>
              <p className="text-gray-300">Berkeley, California</p>
              <p className="font-serif text-xl mt-2">Est. 1966</p>
            </div>
          </div>

          {/* Links Sections - Organized in columns */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([section, links]) => (
                <div key={section} className="space-y-3">
                  <h3 className="font-bold text-sm tracking-wide">{section}</h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* App Downloads */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="font-bold text-sm tracking-wide">THE COFFEE SONG APP</h3>
            <div className="flex flex-col gap-3">
              <Link href="#" className="w-fit">
                <Image
                  src="/placeholder.svg"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className="invert hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#" className="w-fit">
                <Image 
                  src="/placeholder.svg" 
                  alt="Get it on Google Play" 
                  width={135} 
                  height={40} 
                  className="invert hover:opacity-80 transition-opacity" 
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-12 mb-10">
          <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <Youtube className="w-6 h-6" />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>

        {/* Legal */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="text-center text-sm text-gray-300 space-y-4">
            <p> 2025, COFFEE SONG</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/privacy-choices" className="hover:text-white transition-colors duration-200">
                Your Privacy Choices
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Use
              </Link>
            </div>
            <p className="max-w-2xl mx-auto text-xs opacity-75 px-4">
              *Espresso is a registered trademark of Societe des Produits Nestle S.A. and is not affiliated with Coffee Song Inc. Compatible with most Nespresso Original machines
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
