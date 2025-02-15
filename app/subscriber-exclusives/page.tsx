import Banner from "@/components/banner"
import Header from "@/components/header"
import CategoryHero from "@/components/category/hero"
import CategoryContent from "@/components/category/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function SubscriberExclusivesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <CategoryHero
        title="SUBSCRIBER EXCLUSIVES"
        description="Special blends and limited releases available only to our valued subscribers."
      />
      <CategoryContent category="subscriber-exclusives" />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

