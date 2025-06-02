import type { PortfolioData } from "@/lib/data"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code2, Calendar } from "lucide-react"

export default function Projects({ data }: { data: PortfolioData }) {
  return (
    <section id="projects" className="container py-8 md:py-16">
      <h2 className="text-center gradient-text">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {data.projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col h-full glass-card hover-lift glow-on-hover border-purple-100/50 group animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Code2 className="mr-2 h-5 w-5 text-purple-600" />
                  {project.name}
                </CardTitle>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-purple-600 text-sm flex items-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  >
                    Visit <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </div>
              <CardDescription className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {project.company} • {project.startMonth} - {project.endMonth}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pt-0">
              <p className="mb-3 text-muted-foreground leading-relaxed text-sm">{project.description}</p>
              <div className="space-y-1">
                {project.role.map((role, idx) => (
                  <p key={idx} className="text-xs text-muted-foreground leading-relaxed">
                    • {role}
                  </p>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t border-purple-100/50 pt-3">
              {project.techStack.map((tech, techIndex) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-gradient-to-r from-purple-100 to-violet-100 hover:from-purple-200 hover:to-violet-200 transition-all duration-300 hover:scale-105"
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
