import Banner from "@/components/banner"
import Header from "@/components/header"
import CategoryHero from "@/components/category/hero"
import CategoryContent from "@/components/category/content"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function MugsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <CategoryHero
        title="MUGS + GEAR"
        description="Complete your coffee experience with our collection of mugs and brewing equipment."
      />
      <CategoryContent category="mugs" />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

