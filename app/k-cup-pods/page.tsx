import Banner from "@/components/banner"
import Header from "@/components/header"
import CategoryHero from "@/components/category/hero"
import CategoryContent from "@/components/category/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function KCupPodsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <CategoryHero
        title="K-CUP PODS"
        description="Enjoy your favorite Coffee Song blends in convenient K-Cup® pods."
      />
      <CategoryContent category="k-cup-pods" />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

