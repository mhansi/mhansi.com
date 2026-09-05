import Image from "next/image"
import Link from "next/link"
import type { PortfolioData } from "@/lib/data"
import { ArrowUpRight, Scissors } from "lucide-react"

export default function ShopTeaser({ data }: { data: PortfolioData }) {
  return (
    <section className="container py-10 md:py-20">
      <Link href="/shop" className="group relative block overflow-hidden rounded-[2rem] bg-[#171313] text-white shadow-2xl">
        <div className="grid min-h-[520px] md:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-between p-8 md:p-14">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.24em] text-rose-200">
              <Scissors className="h-4 w-4" /> Handmade by Sanduni
            </div>
            <div>
              <p className="mb-4 text-sm text-white/60">From a viral sewing experiment to your everyday essential.</p>
              <h2 className="mb-5 max-w-lg text-4xl font-black leading-[.95] tracking-[-.05em] text-white md:text-6xl">
                A scrunchie with a little secret.
              </h2>
              <div className="inline-flex items-center gap-2 border-b border-white/30 pb-1 font-semibold transition-colors group-hover:border-white">
                Discover the zipper scrunchie <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
          <div className="relative min-h-[400px] overflow-hidden">
            <Image src={data.shop.images[4]} alt="Handmade olive green zipper scrunchie" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171313] via-transparent to-transparent md:bg-gradient-to-r" />
            <span className="absolute bottom-7 right-7 rounded-full bg-white px-5 py-3 text-sm font-bold text-black">From LKR {data.shop.pricing.single}</span>
          </div>
        </div>
      </Link>
    </section>
  )
}
