import Banner from "@/components/banner"
import Header from "@/components/header"
import ProductDetail from "@/components/product/detail"
import RelatedProducts from "@/components/product/related-products"
import NewsletterSignup from "@/components/newsletter-signup"
import Footer from "@/components/footer"

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <Banner />
      <Header />
      <ProductDetail />
      <RelatedProducts />
      <NewsletterSignup />
      <Footer />
    </main>
  )
}

