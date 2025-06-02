import type { PortfolioData } from "@/lib/data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, MoveDown, Sparkles } from "lucide-react"
import SocialLinks from "./social-links"

export default function Hero({ data }: { data: PortfolioData }) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1 animate-slide-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-4 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4 text-purple-600" />
              Available for new opportunities
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="gradient-text">{data.firstName}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">{data.bio}</p>
            <p className="text-muted-foreground mb-6 flex items-center">
              <span className="inline-block mr-2">📍</span> {data.location}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button
                size="lg"
                className="hover-lift glow-on-hover bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                asChild
              >
                <a href={`mailto:${data.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift glass-card border-purple-200 hover:border-purple-300"
                asChild
              >
                <a href="#projects">
                  <MoveDown className="mr-2 h-4 w-4" /> View Projects
                </a>
              </Button>
            </div>

            <SocialLinks links={data.links} />
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full blur-2xl opacity-30 animate-glow"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl glass floating-animation">
                <Image
                  src="/profile.jpg?height=320&width=320"
                  alt={data.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
