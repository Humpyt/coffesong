import Banner from "@/components/banner"
import Header from "@/components/header"
import AboutHero from "@/components/about/hero"
import Story from "@/components/about/story"
import Values from "@/components/about/values"
import Timeline from "@/components/about/timeline"
import Leadership from "@/components/about/leadership"
import Locations from "@/components/about/locations"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Banner />
      <Header />
      <AboutHero />
      <Story />
      <Values />
      <Timeline />
      <Leadership />
      <Locations />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

