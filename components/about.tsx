import type { PortfolioData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Heart, User } from "lucide-react"

export default function About({ data }: { data: PortfolioData }) {
  return (
    <section id="about" className="container py-12 md:py-20">
      <h2 className="text-center gradient-text mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 rounded-2xl hover-lift glow-on-hover animate-fade-in border border-white/20 bg-white/40 backdrop-blur-md">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-br from-violet-200 to-pink-200 rounded-lg mr-4">
              <User className="h-6 w-6 text-violet-700" />
            </div>
            <h3 className="text-2xl font-bold">My Story</h3>
          </div>
          <p className="text-md leading-relaxed text-muted-foreground font-medium mb-4">
            I'm a software engineer with a deep passion for creating elegant solutions to complex problems. With expertise in full-stack development, I bridge the gap between beautiful frontends and robust backends.
          </p>
          <p className="text-md leading-relaxed text-muted-foreground font-medium">
            What drives me is the challenge of building systems that are not just functional, but delightful to use. I love collaborating with teams, mentoring others, and continuously learning new technologies.
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl hover-lift glow-on-hover animate-fade-in border border-white/20 bg-white/40 backdrop-blur-md" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center mb-6">
            <div className="p-3 bg-gradient-to-br from-pink-200 to-violet-200 rounded-lg mr-4">
              <Heart className="h-6 w-6 text-pink-700" />
            </div>
            <h3 className="text-2xl font-bold">Interests & Passions</h3>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground font-medium mb-6">
            Beyond coding, I'm inspired by diverse interests that fuel my creativity.
          </p>
          <div className="flex flex-wrap gap-3">
            {data.interests.map((interest, index) => (
              <Badge
                key={interest}
                variant="outline"
                className="text-sm py-2.5 px-4 border-violet-300 hover:border-pink-400 hover:bg-gradient-to-r hover:from-violet-100 hover:to-pink-100 transition-all duration-300 hover:scale-105 cursor-default font-semibold"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
