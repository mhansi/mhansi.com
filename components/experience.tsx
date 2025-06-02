import type { PortfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Building2, Calendar } from "lucide-react"

export default function Experience({ data }: { data: PortfolioData }) {
  return (
    <section id="experience" className="relative py-8 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white/50"></div>
      <div className="container relative z-10">
        <h2 className="text-center gradient-text mb-8">Work Experience</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-violet-400 to-purple-400 transform md:-translate-x-px"></div>

          {data.experience.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 animate-glow"></div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <Card className="glass-card hover-lift glow-on-hover border-purple-100/50 relative">
                  {/* Arrow pointing to timeline */}
                  <div
                    className={`absolute top-6 w-0 h-0 border-t-8 border-b-8 border-transparent hidden md:block ${
                      index % 2 === 0
                        ? "right-0 border-l-8 border-l-white/80 transform translate-x-full"
                        : "left-0 border-r-8 border-r-white/80 transform -translate-x-full"
                    }`}
                  ></div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Building2 className="mr-3 h-5 w-5 text-purple-600" />
                        <div>
                          <CardTitle className="gradient-text text-lg">{exp.positions[0].title}</CardTitle>
                          <p className="text-base font-semibold text-foreground">{exp.company}</p>
                        </div>
                      </div>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-purple-600 transition-colors duration-300 hover:scale-110"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {exp.positions[0].startMonth} - {exp.positions[0].endMonth}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {exp.employmentType} • {exp.companyLocation}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
