import Banner from "@/components/banner"
import Header from "@/components/header"
import CoffeeBeansHero from "@/components/coffee-beans/hero"
import CoffeeBeansContent from "@/components/coffee-beans/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function CoffeeBeansPage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <CoffeeBeansHero />
      <CoffeeBeansContent />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

