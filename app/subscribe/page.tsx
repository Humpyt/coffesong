import Banner from "@/components/banner"
import Header from "@/components/header"
import SubscribeHero from "@/components/subscribe/hero"
import SubscribeSteps from "@/components/subscribe/steps"
import SubscribePlans from "@/components/subscribe/plans"
import SubscribeCoffees from "@/components/subscribe/coffees"
import SubscribeTestimonials from "@/components/subscribe/testimonials"
import SubscribeFAQ from "@/components/subscribe/faq"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <SubscribeHero />
      <SubscribeSteps />
      <SubscribePlans />
      <SubscribeCoffees />
      <SubscribeTestimonials />
      <SubscribeFAQ />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

