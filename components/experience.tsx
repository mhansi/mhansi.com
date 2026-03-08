import type { PortfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Building2, Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience({ data }: { data: PortfolioData }) {
  return (
    <section id="experience" className="relative py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-100/40 via-pink-100/20 to-white/50"></div>
      <div className="container relative z-10">
        <h2 className="text-center gradient-text mb-12">Work Experience</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-pink-400 to-violet-400 transform md:-translate-x-px"></div>

          {data.experience.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-2 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 animate-subtle-pulse"></div>

              {/* Content Card */}
              <div
                className={`w-full md:w-6/12 ml-14 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <Card className="glass-card hover-lift glow-on-hover border-white/20 relative bg-white/50 backdrop-blur-md group">
                  {/* Arrow pointing to timeline */}
                  <div
                    className={`absolute top-8 w-0 h-0 border-t-8 border-b-8 border-transparent hidden md:block ${
                      index % 2 === 0
                        ? "right-0 border-l-8 border-l-white/60 transform translate-x-full"
                        : "left-0 border-r-8 border-r-white/60 transform -translate-x-full"
                    }`}
                  ></div>

                  <CardHeader className="pb-1">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div className="flex items-start flex-1">
                        <div className="p-2 bg-gradient-to-br from-violet-200 to-pink-200 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                          <Building2 className="h-5 w-5 text-violet-700" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="gradient-text text-md font-bold">{exp.positions[0].title}</CardTitle>
                          <p className="text-md font-semibold text-foreground">{exp.company}</p>
                        </div>
                      </div>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-pink-600 transition-colors duration-300 hover:scale-110 flex-shrink-0 opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-3">
                      <div className="">
                        <div className="flex items-center text-sm text-muted-foreground font-medium">
                          <Briefcase className="mr-2 h-4 w-4 text-pink-600 flex-shrink-0" />
                          <span>{exp.employmentType}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground font-medium">
                          <Calendar className="mr-2 h-4 w-4 text-violet-600 flex-shrink-0" />
                          <span>{exp.positions[0].startMonth} - {exp.positions[0].endMonth}</span>
                        </div>
                        <div className="col-span-2 flex items-center text-sm text-muted-foreground font-medium">
                          <MapPin className="mr-2 h-4 w-4 text-violet-600 flex-shrink-0" />
                          <span>{exp.companyLocation}</span>
                        </div>
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
