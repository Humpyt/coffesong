import Banner from "@/components/banner"
import Header from "@/components/header"
import StoreLocator from "@/components/stores/store-locator"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function StoresPage() {
  return (
    <main className="bg-white min-h-screen">
      <Banner />
      <Header />
      <StoreLocator />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

