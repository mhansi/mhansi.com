import type { PortfolioData } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Cloud, Palette } from "lucide-react"

export default function Skills({ data }: { data: PortfolioData }) {
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "languages":
        return <Code className="h-4 w-4" />
      case "database":
        return <Database className="h-4 w-4" />
      case "cloud":
        return <Cloud className="h-4 w-4" />
      default:
        return <Palette className="h-4 w-4" />
    }
  }

  return (
    <section id="skills" className="container py-8 md:py-16">
      <h2 className="text-center gradient-text">Technical Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.skills.map((category, index) => (
          <div
            key={index}
            className="glass-card p-4 rounded-xl hover-lift glow-on-hover animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <span className="mr-2 text-purple-600">{getIcon(category.type)}</span>
              {category.type}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge
                  key={skill}
                  className="text-sm py-1 px-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 transition-all duration-300 hover:scale-105 cursor-default"
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
