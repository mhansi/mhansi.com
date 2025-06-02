import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Footer from "@/components/footer"
import { getData } from "@/lib/data"

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData()

  return {
    title: `${data.fullName} - Portfolio`,
    description: data.bio,
    keywords: data.keywords,
    openGraph: {
      title: `${data.fullName} - Software Engineer`,
      description: data.bio,
      type: "website",
    },
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <Hero data={data} />
      <About data={data} />
      <Experience data={data} />
      <Projects data={data} />
      <Education data={data} />
      <Skills data={data} />
      <Footer data={data} />
    </main>
  )
}
