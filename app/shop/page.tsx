import Banner from "@/components/banner"
import Header from "@/components/header"
import ShopHero from "@/components/shop/hero"
import ShopNav from "@/components/shop/nav"
import ShopContent from "@/components/shop/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"
import CoffeeBeansSection from "@/components/shop/coffee-beans-section"

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <ShopHero />
      <ShopNav />
      <ShopContent />
      <CoffeeBeansSection />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

