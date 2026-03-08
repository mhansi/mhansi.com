import type { PortfolioData } from "@/lib/data"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, MoveDown, Sparkles } from "lucide-react"
import SocialLinks from "./social-links"

export default function Hero({ data }: { data: PortfolioData }) {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-50/30 to-violet-100/40">
        <div className="absolute top-10 left-5 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute top-32 right-5 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-20 left-10 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-in">
            <div className="inline-flex items-center px-5 py-2.5 rounded-full glass mb-6 text-sm font-medium bg-white/40 hover:bg-white/50 transition-all duration-300">
              <Sparkles className="mr-2 h-4 w-4 text-violet-600" />
              Available for new opportunities
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 leading-tight">
              Hey, I'm <span className="gradient-text">{data.firstName}</span> 👋
            </h1>
            <p className="text-l md:text-xl font-bold text-violet-400">Full-Stack Engineer + Creative Problem Solver</p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-medium">{data.bio}</p>
            <p className="text-muted-foreground mb-8 flex items-center text-base font-medium">
              <span className="inline-block mr-2">📍</span> {data.location}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="hover-lift glow-on-hover bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white font-semibold shadow-md"
                asChild
              >
                <a href={`mailto:${data.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift glass-card border-purple-300 hover:border-pink-300 hover:bg-white/60 font-semibold"
                asChild
              >
                <a href="#projects">
                  <MoveDown className="mr-2 h-4 w-4" /> View My Work
                </a>
              </Button>
            </div>

            <SocialLinks links={data.links} />
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-pink-300 rounded-full blur-3xl opacity-25 animate-glow"></div>
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/60 shadow-2xl glass floating-animation">
                <Image
                  src="/profile.jpg?height=384&width=384"
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
