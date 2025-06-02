import type { PortfolioData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Heart, User } from "lucide-react"

export default function About({ data }: { data: PortfolioData }) {
  return (
    <section id="about" className="container py-8 md:py-16">
      <h2 className="text-center gradient-text">About Me</h2>
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-6 rounded-2xl hover-lift glow-on-hover animate-fade-in">
          <div className="flex items-center mb-4">
            <User className="mr-3 h-6 w-6 text-purple-600" />
            <h3 className="text-xl font-semibold">Who I Am</h3>
          </div>
          <p className="text-lg mb-6 leading-relaxed text-muted-foreground">{data.bio}</p>

          <div className="mb-4">
            <div className="flex items-center mb-3">
              <Heart className="mr-3 h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-medium">What I Love</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.interests.map((interest, index) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className="text-sm py-2 px-4 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
