import Banner from "@/components/banner"
import Header from "@/components/header"
import CategoryHero from "@/components/category/hero"
import CategoryContent from "@/components/category/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function TeaPage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <CategoryHero title="TEA" description="Explore our curated collection of premium teas from around the world." />
      <CategoryContent category="tea" />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

