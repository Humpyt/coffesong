import Banner from "@/components/banner"
import Header from "@/components/header"
import CoffeeHero from "@/components/coffee/hero"
import CoffeeNav from "@/components/coffee/nav"
import CoffeeContent from "@/components/coffee/content"
import Footer from "@/components/footer"

export default function CoffeePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Banner />
      <Header />
      <CoffeeHero />
      <CoffeeNav />
      <CoffeeContent />
      <Footer />
    </main>
  )
}

