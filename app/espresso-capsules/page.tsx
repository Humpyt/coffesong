import Banner from "@/components/banner"
import Header from "@/components/header"
import CategoryHero from "@/components/category/hero"
import CategoryContent from "@/components/category/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function EspressoCapsules() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <CategoryHero title="ESPRESSO CAPSULES" description="Premium espresso capsules for a perfect cup every time." />
      <CategoryContent category="espresso-capsules" />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

