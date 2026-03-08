import type { PortfolioData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code2, Calendar } from "lucide-react"

export default function Projects({ data }: { data: PortfolioData }) {
  return (
    <section id="projects" className="container py-12 md:py-20">
      <h2 className="text-center gradient-text mb-12">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {data.projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col h-full glass-card hover-lift glow-on-hover border-white/20 group animate-fade-in bg-white/40 backdrop-blur-md"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="flex items-center text-lg">
                  <div className="p-2 bg-gradient-to-br from-violet-200 to-pink-200 rounded-lg mr-2">
                    <Code2 className="h-4 w-4 text-violet-700" />
                  </div>
                  {project.name}
                </CardTitle>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-pink-600 text-sm flex items-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    Visit <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </div>
              <CardDescription className="flex items-center text-sm">
                <Calendar className="mr-2 h-4 w-4" />
                {project.company} • {project.startMonth} - {project.endMonth}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-2">
              <p className="mb-4 text-muted-foreground leading-relaxed text-sm font-medium">{project.description}</p>
              <div className="space-y-2">
                {project.role.map((role, idx) => (
                  <p key={idx} className="text-xs text-muted-foreground leading-relaxed">
                    • {role}
                  </p>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t border-white/20 pt-4 mt-4">
              {project.techStack.map((tech, techIndex) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-violet-200 to-pink-200 text-violet-900 hover:from-violet-300 hover:to-pink-300 transition-all duration-300 hover:scale-105 font-semibold"
                  style={{ animationDelay: `${techIndex * 0.05}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
