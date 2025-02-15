import { products } from "@/data/products"

export function getProductBySlug(slug: string) {
  return products.find((product) => product.name.toLowerCase().replace(/\s+/g, "-") === slug)
}

