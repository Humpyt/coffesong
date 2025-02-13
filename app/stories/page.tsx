import Banner from "@/components/banner"
import Header from "@/components/header"
import StoriesHero from "@/components/stories/hero"
import StoriesGrid from "@/components/stories/grid"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function StoriesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Banner />
      <Header />
      <StoriesHero />
      <StoriesGrid />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

