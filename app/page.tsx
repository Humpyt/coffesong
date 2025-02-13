import Banner from "@/components/banner"
import Header from "@/components/header"
import Hero from "@/components/hero"
import PromoGrid from "@/components/promo-grid"
import ProductCarousel from "@/components/product-carousel"
import SubscriptionPromo from "@/components/subscription-promo"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Banner />
      <Header />
      <Hero />
      <PromoGrid />
      <ProductCarousel />
      <SubscriptionPromo />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

