import Banner from "@/components/banner"
import Header from "@/components/header"
import CategoryHero from "@/components/category/hero"
import CategoryContent from "@/components/category/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function DecafPage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <CategoryHero
        title="DECAF"
        description="All the flavor without the caffeine. Explore our premium decaf options."
      />
      <CategoryContent category="decaf" />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

