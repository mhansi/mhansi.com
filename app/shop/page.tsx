import type { Metadata } from "next"
import { getData } from "@/lib/data"
import ShopExperience from "./shop-experience"

export async function generateMetadata(): Promise<Metadata> {
  const { shop } = await getData()
  return {
    title: `${shop.name} | Handmade by Sanduni`,
    description: shop.description,
    openGraph: { title: `${shop.name} — ${shop.tagline}`, description: shop.description, images: [shop.images[2]] },
  }
}

export default async function ShopPage() {
  const data = await getData()
  return <ShopExperience data={data} />
}
