export interface Product {
  id: number
  name: string
  price: string
  roastType: string
  imageUrl: string
  rating: number
  reviews: number
  flavorNotes: string[]
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Coffee Song Original",
    price: "19.95",
    roastType: "DARK ROAST",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0fb48ba1-c07d-4e84-999a-a913dc844c83-9B20vE9dlMLVazREIee9HeNRzjNXeG.png",
    rating: 4.5,
    reviews: 120,
    flavorNotes: ["Earth", "Spice", "Everything Nice"],
    category: "coffee-beans",
  },
  {
    id: 2,
    name: "Country Surprise",
    price: "22.95",
    roastType: "LIMITED RELEASE",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/80cb39d6-79a7-48ad-bf8a-dc0d15127cbc-PKr1wKNje3Mt0ba8jaINabpCQQJfTc.png",
    rating: 4.8,
    reviews: 85,
    flavorNotes: ["Wild Blueberry", "Bergamot", "Candied Peel"],
    category: "subscriber-exclusives",
  },
  {
    id: 3,
    name: "Salsa Bamba Blend",
    price: "18.95",
    roastType: "DARK ROAST",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77854d65-a619-470c-b60e-d39ed1065b5d-eSlpWLMqahOC7hP9JayIKyAnowTnLt.png",
    rating: 4.2,
    reviews: 250,
    flavorNotes: ["Dark Chocolate", "Smoke", "Burnt Sugar"],
    category: "coffee-beans",
  },
  {
    id: 4,
    name: "Kadongo Kamu Single",
    price: "21.95",
    roastType: "LIMITED RELEASE",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24747660-ebcb-4b15-a548-47b6ad1f8a05-76xFtBAi601n7fPgkOGDmxfxRXrUCO.png",
    rating: 4.9,
    reviews: 60,
    flavorNotes: ["Limited", "Exclusive", "Seasonal"],
    category: "subscriber-exclusives",
  },
  {
    id: 5,
    name: "Coffee Song K-Cup® Dark Roast",
    price: "14.95",
    roastType: "K-CUP PODS",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0fb48ba1-c07d-4e84-999a-a913dc844c83-9B20vE9dlMLVazREIee9HeNRzjNXeG.png",
    rating: 4.6,
    reviews: 180,
    flavorNotes: ["Bold", "Rich", "Smooth"],
    category: "k-cup-pods",
  },
  {
    id: 6,
    name: "Coffee Song K-Cup® Medium Roast",
    price: "14.95",
    roastType: "K-CUP PODS",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/80cb39d6-79a7-48ad-bf8a-dc0d15127cbc-PKr1wKNje3Mt0ba8jaINabpCQQJfTc.png",
    rating: 4.7,
    reviews: 150,
    flavorNotes: ["Balanced", "Sweet", "Nutty"],
    category: "k-cup-pods",
  },
  {
    id: 7,
    name: "English Breakfast Tea",
    price: "12.95",
    roastType: "BLACK TEA",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77854d65-a619-470c-b60e-d39ed1065b5d-eSlpWLMqahOC7hP9JayIKyAnowTnLt.png",
    rating: 4.8,
    reviews: 90,
    flavorNotes: ["Robust", "Malty", "Bright"],
    category: "tea",
  },
  {
    id: 8,
    name: "Green Tea Jasmine",
    price: "14.95",
    roastType: "GREEN TEA",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24747660-ebcb-4b15-a548-47b6ad1f8a05-76xFtBAi601n7fPgkOGDmxfxRXrUCO.png",
    rating: 4.9,
    reviews: 75,
    flavorNotes: ["Floral", "Sweet", "Delicate"],
    category: "tea",
  },
  {
    id: 9,
    name: "Espresso Forte Capsules",
    price: "11.95",
    roastType: "ESPRESSO",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0fb48ba1-c07d-4e84-999a-a913dc844c83-9B20vE9dlMLVazREIee9HeNRzjNXeG.png",
    rating: 4.7,
    reviews: 120,
    flavorNotes: ["Intense", "Complex", "Bold"],
    category: "espresso-capsules",
  },
  {
    id: 10,
    name: "Lungo Capsules",
    price: "11.95",
    roastType: "ESPRESSO",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/80cb39d6-79a7-48ad-bf8a-dc0d15127cbc-PKr1wKNje3Mt0ba8jaINabpCQQJfTc.png",
    rating: 4.6,
    reviews: 95,
    flavorNotes: ["Smooth", "Balanced", "Aromatic"],
    category: "espresso-capsules",
  },
  {
    id: 11,
    name: "Decaf House Blend",
    price: "19.95",
    roastType: "DECAF",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77854d65-a619-470c-b60e-d39ed1065b5d-eSlpWLMqahOC7hP9JayIKyAnowTnLt.png",
    rating: 4.5,
    reviews: 80,
    flavorNotes: ["Smooth", "Balanced", "Caramel"],
    category: "decaf",
  },
  {
    id: 12,
    name: "Decaf K-Cup® Pods",
    price: "14.95",
    roastType: "DECAF",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24747660-ebcb-4b15-a548-47b6ad1f8a05-76xFtBAi601n7fPgkOGDmxfxRXrUCO.png",
    rating: 4.4,
    reviews: 65,
    flavorNotes: ["Rich", "Bold", "Smooth"],
    category: "decaf",
  },
  {
    id: 13,
    name: "Coffee Song Classic Mug",
    price: "14.95",
    roastType: "DRINKWARE",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/80cb39d6-79a7-48ad-bf8a-dc0d15127cbc-PKr1wKNje3Mt0ba8jaINabpCQQJfTc.png",
    rating: 4.9,
    reviews: 200,
    flavorNotes: ["12 oz", "Ceramic", "Dishwasher Safe"],
    category: "mugs",
  },
  {
    id: 14,
    name: "Coffee Song Travel Tumbler",
    price: "24.95",
    roastType: "DRINKWARE",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0fb48ba1-c07d-4e84-999a-a913dc844c83-9B20vE9dlMLVazREIee9HeNRzjNXeG.png",
    rating: 4.8,
    reviews: 150,
    flavorNotes: ["16 oz", "Stainless Steel", "Vacuum Insulated"],
    category: "mugs",
  },
]

