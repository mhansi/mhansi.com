import type { PortfolioData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Palette } from "lucide-react"

export default function Skills({ data }: { data: PortfolioData }) {
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "languages":
        return <Code className="h-5 w-5" />
      case "database":
        return <Database className="h-5 w-5" />
      case "cloud":
        return <Cloud className="h-5 w-5" />
      default:
        return <Palette className="h-5 w-5" />
    }
  }

  return (
    <section id="skills" className="container py-12 md:py-20">
      <h2 className="text-center gradient-text mb-12">Technical Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.skills.map((category, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-xl hover-lift glow-on-hover animate-fade-in border border-white/20 bg-white/40 backdrop-blur-md"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <span className="p-2 bg-gradient-to-br from-violet-200 to-pink-200 rounded-lg mr-3 text-violet-700">
                {getIcon(category.type)}
              </span>
              {category.type}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skill}
                  className="text-sm py-2 px-3 bg-gradient-to-r from-violet-200 to-pink-200 hover:from-violet-300 hover:to-pink-300 transition-all duration-300 hover:scale-105 cursor-default text-black font-semibold shadow-md"
                  style={{ animationDelay: `${skillIndex * 0.05}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
