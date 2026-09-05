"use client"

import Image from "next/image"
import Link from "next/link"
import type { PortfolioData } from "@/lib/data"
import { ArrowDown, ArrowLeft, ArrowUpRight, Check, ChevronRight, Mail, Package, Scissors, Sparkles, Truck, WalletCards } from "lucide-react"

export default function ShopExperience({ data }: { data: PortfolioData }) {
  const { shop, maker } = data
  const orderSubject = encodeURIComponent("Zipper scrunchie order")
  const orderBody = encodeURIComponent("Hi Sanduni,\n\nI'd like to order zipper scrunchies.\n\nQuantity:\nPreferred colours:\nCustom fabric request (if any):\nDelivery location:\nPayment method:\n")
  const mailto = `mailto:${shop.ordering.email}?subject=${orderSubject}&body=${orderBody}`

  return (
    <main className="shop-page bg-[#f5f1ea] text-[#171411]">
      <nav className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 text-white md:px-10">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold"><ArrowLeft className="h-4 w-4" /> mhansi</Link>
        <a href="#order" className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:scale-105">Order now</a>
      </nav>

      <section className="relative flex min-h-screen items-end overflow-hidden bg-black p-6 text-white md:p-12">
        <Image src={shop.images[0]} alt="Midnight Black handmade zipper scrunchie" fill priority className="shop-hero-image object-cover opacity-75" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/35" />
        <div className="relative z-10 mb-8 max-w-5xl shop-rise">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.28em] text-white/70">Handmade in Sri Lanka · small batch</p>
          <h1 className="max-w-4xl text-[clamp(4rem,11vw,10rem)] font-black leading-[.78] tracking-[-.075em]">Hide it<br/><span className="font-serif font-normal italic">beautifully.</span></h1>
          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-white/75 md:text-lg">{shop.description}</p>
            <a href="#story" className="flex items-center gap-2 text-sm font-semibold">Meet the scrunchie <ArrowDown className="h-4 w-4 animate-bounce" /></a>
          </div>
        </div>
      </section>

      <section id="story" className="px-6 py-24 md:px-12 md:py-40">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs font-bold uppercase tracking-[.3em] text-[#8d675b]">The original zipper scrunchie</p>
          <h2 className="max-w-6xl text-5xl font-black leading-[.98] tracking-[-.055em] md:text-8xl">Looks like a scrunchie.<br/><span className="text-[#a74665]">Works like a pocket.</span></h2>
          <p className="ml-auto mt-10 max-w-xl text-lg leading-relaxed text-black/60 md:text-xl">Keep a folded note, a key, rings or another tiny essential tucked discreetly inside. The invisible zipper disappears into generous folds, so only you know it is there.</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#dfbdc2] px-5 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-8 top-8 whitespace-nowrap text-[13vw] font-black leading-none tracking-[-.07em] text-[#52202f]/[.06]">POCKET. SCRUNCHIE.</div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
            <div><p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-[#7c3c50]">One accessory. Two jobs.</p><h2 className="text-5xl font-black leading-[.9] tracking-[-.06em] text-[#431b28] md:text-7xl">Soft on hair.<br/>Smart everywhere.</h2></div>
            <p className="max-w-md text-lg leading-relaxed text-[#52202f]/65 md:justify-self-end">Room for the small things that matter—without adding a bag, a bulky pocket or anything that gives the secret away.</p>
          </div>
          <div className="grid auto-rows-[210px] gap-4 md:grid-cols-12 md:auto-rows-[250px]">
            <div className="relative row-span-2 overflow-hidden rounded-[2rem] md:col-span-7"><Image src={shop.images[5]} alt="Dusty Lilac zipper scrunchie" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width:768px) 100vw, 60vw" /><span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-black backdrop-blur">Dusty Lilac</span></div>
            <div className="relative overflow-hidden rounded-[2rem] md:col-span-5"><Image src={shop.images[1]} alt="Chocolate Brown zipper scrunchie" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width:768px) 100vw, 40vw" /><span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-black backdrop-blur">Chocolate Brown</span></div>
            <div className="grid grid-cols-2 gap-4 md:col-span-5">
              <div className="flex flex-col justify-between rounded-[2rem] bg-[#542334] p-6 text-white"><Sparkles className="h-6 w-6 text-pink-200"/><p className="text-xl font-bold tracking-tight md:text-2xl">Tiny pocket.<br/>Zero fuss.</p></div>
              <div className="flex flex-col justify-between rounded-[2rem] bg-[#f4e9e4] p-6 text-[#542334]"><span className="text-4xl font-black">360°</span><p className="text-sm font-semibold">Full, generous gathers from every angle.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1ea] px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="mb-2 text-xs font-bold uppercase tracking-[.3em] text-[#8d675b]">The colour edit</p><h2 className="text-4xl font-black leading-none tracking-[-.05em] md:text-5xl">Seven shades. Your secret.</h2></div><p className="max-w-sm text-sm leading-relaxed text-black/50">From understated neutrals to rich colour and a playful print.</p></div>
          <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-7 md:overflow-visible md:px-0 md:pb-0">
            {shop.colorways.map((color) => <article key={color.name} className="group w-[42vw] shrink-0 snap-start sm:w-[28vw] md:w-auto"><div className="relative aspect-square overflow-hidden rounded-2xl bg-white"><Image src={color.image} alt={`${color.name} zipper scrunchie`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:640px) 42vw, (max-width:768px) 28vw, 14vw"/></div><h3 className="px-1 pt-3 text-sm font-bold leading-tight">{color.name}</h3></article>)}
          </div>
          <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#e9e0d5] p-6 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="max-w-3xl"><h3 className="mb-1 text-xl font-bold">{shop.customOrders.title}</h3><p className="text-sm leading-relaxed text-black/55">{shop.customOrders.description}</p></div>
            <a href={mailto} className="group flex shrink-0 items-center gap-2 self-start rounded-full bg-[#171411] px-5 py-3 text-sm font-bold text-white transition hover:scale-105 md:self-auto">{shop.customOrders.cta}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a>
          </div>
        </div>
      </section>

      <section className="bg-[#171411] px-6 py-24 text-white md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-16 text-xs font-bold uppercase tracking-[.3em] text-pink-200">Obsessive about the details</p>
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/15 md:grid-cols-3">
            {shop.features.map((feature, index) => (
              <article key={feature.title} className="bg-[#171411] p-8 md:p-12">
                <span className="mb-10 block font-mono text-xl text-white/35">0{index + 1}</span>
                <h3 className="mb-5 text-3xl font-bold tracking-tight">{feature.title}</h3>
                <p className="leading-relaxed text-white/55">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] rotate-[-2deg] bg-[#382219] shadow-2xl"><Image src={shop.images[3]} alt="Chocolate Brown handmade zipper scrunchie detail" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" /></div>
          <div>
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#dfbdc2]"><Scissors className="h-5 w-5" /></div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-[#8d675b]">{maker.eyebrow}</p>
            <h2 className="mb-7 text-5xl font-black leading-none tracking-[-.05em] md:text-7xl">Made by a real pair of hands.</h2>
            <p className="max-w-xl text-lg leading-relaxed text-black/60">{maker.description}</p>
            <div className="mt-8 flex gap-3">{maker.socials.map(s => <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white">{s.name} <span className="text-black/40">{s.handle}</span></a>)}</div>
          </div>
        </div>
      </section>

      <section id="order" className="bg-[#a74665] px-6 py-24 text-white md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-white/55">Choose your way</p><h2 className="text-5xl font-black leading-none tracking-[-.06em] md:text-8xl">One for you.<br/>Five to share.</h2></div>
            <p className="max-w-sm text-white/70">Colours are made in small batches. Send a DM or email to see what is currently available.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#766956] p-8 text-white md:p-12"><Image src={shop.images[4]} alt="Olive Green zipper scrunchie" fill className="object-cover opacity-70" sizes="(max-width:768px) 100vw, 50vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#262018] via-black/5 to-black/10"/><div className="absolute inset-x-8 bottom-8 md:inset-x-12 md:bottom-12"><p className="text-sm font-bold uppercase tracking-widest text-white/65">Single</p><p className="my-4 text-6xl font-black tracking-[-.06em]">LKR {shop.pricing.single}</p><p className="flex items-center gap-2 text-sm text-white/85"><Check className="h-4 w-4"/> One handmade zipper scrunchie</p></div></div>
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#25191d] p-8 md:p-12"><Image src={shop.bundleImage} alt="Five zipper scrunchie colour bundle" fill className="object-cover opacity-60" sizes="(max-width:768px) 100vw, 50vw"/><div className="absolute inset-0 bg-gradient-to-t from-[#25191d] via-transparent to-black/10"/><span className="absolute right-7 top-7 rounded-full bg-pink-200 px-4 py-2 text-xs font-bold text-black">SAVE LKR 500</span><div className="absolute inset-x-8 bottom-8 md:inset-x-12 md:bottom-12"><p className="text-sm font-bold uppercase tracking-widest text-white/65">Bundle of {shop.pricing.bundleQuantity}</p><p className="my-4 text-6xl font-black tracking-[-.06em]">LKR {shop.pricing.bundlePrice}</p><p className="flex items-center gap-2 text-sm text-white/80"><Check className="h-4 w-4"/> Mix available colours</p></div></div>
          </div>
          <p className="mt-5 p-5 text-center text-sm text-white/75">{shop.pricing.bulkNote}</p>

          <div className="mt-16 grid gap-8 border-t border-white/20 pt-12 md:grid-cols-3">
            <Info icon={<Truck/>} title="Islandwide delivery" text={`${shop.ordering.delivery}. ${shop.ordering.deliveryFee}.`} />
            <Info icon={<WalletCards/>} title="Flexible payment" text={shop.ordering.paymentMethods.join(" or ")} />
            <Info icon={<Package/>} title="Small-batch made" text={shop.ordering.note} />
          </div>
          <div className="mt-16 flex flex-col items-center rounded-[2rem] bg-[#f5f1ea] px-6 py-16 text-center text-black md:py-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[.3em] text-[#8d675b]">Ready when you are</p>
            <h2 className="mb-8 max-w-3xl text-5xl font-black leading-none tracking-[-.055em] md:text-7xl">Tell me your colours.</h2>
            <a href={mailto} className="group flex items-center gap-3 rounded-full bg-black px-7 py-4 font-bold text-white transition hover:scale-105"><Mail className="h-5 w-5"/> Order by email <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/></a>
            <p className="mt-5 text-sm text-black/45">Or DM <a className="underline" href={maker.socials[0].url}>@i_am_mhansi on TikTok</a></p>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-4 bg-[#171411] px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-12"><Link href="/" className="text-lg font-bold text-white">mhansi.</Link><p>Designed in code. Made by hand. © {new Date().getFullYear()} {data.fullName}</p><a href="mailto:srsmsone@gmail.com" className="hover:text-white">srsmsone@gmail.com <ArrowUpRight className="inline h-3 w-3"/></a></footer>
    </main>
  )
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="flex gap-4"><div className="mt-1 [&>svg]:h-5 [&>svg]:w-5">{icon}</div><div><h3 className="mb-2 text-lg font-bold">{title}</h3><p className="text-sm leading-relaxed text-white/60">{text}</p></div></div>
}
