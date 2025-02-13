import Banner from "@/components/banner"
import Header from "@/components/header"
import FreeShippingHero from "@/components/free-shipping/hero"
import FreeShippingContent from "@/components/free-shipping/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function FreeShippingPage() {
  return (
    <main className="bg-white min-h-screen">
      <Banner />
      <Header />
      <FreeShippingHero />
      <FreeShippingContent />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

