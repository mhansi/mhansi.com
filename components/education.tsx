import type { PortfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education({ data }: { data: PortfolioData }) {
  return (
    <section id="education" className="relative py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/30 to-violet-100/30"></div>
      <div className="container relative z-10">
        <h2 className="text-center gradient-text mb-12">Education Journey</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-pink-400 to-violet-400 transform md:-translate-x-px"></div>

          {data.education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-start mb-2 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 animate-subtle-pulse"></div>

              {/* Content Card */}
              <div
                className={`w-full md:w-6/12 ml-14 md:ml-0 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"}`}
              >
                <Card className="glass-card hover-lift glow-on-hover border-white/20 relative bg-white/50 backdrop-blur-md group">
                  {/* Arrow pointing to timeline */}
                  <div
                    className={`absolute top-8 w-0 h-0 border-t-8 border-b-8 border-transparent hidden md:block ${
                      index % 2 === 0
                        ? "left-0 border-r-8 border-r-white/60 transform -translate-x-full"
                        : "right-0 border-l-8 border-l-white/60 transform translate-x-full"
                    }`}
                  ></div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-br from-violet-200 to-pink-200 rounded-lg mt-0.5 flex-shrink-0">
                        <GraduationCap className="h-5 w-5 text-violet-700" />
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-md mb-1 font-bold">{edu.institution}</CardTitle>
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed">{edu.programme}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground font-medium">
                        <Calendar className="mr-2 h-4 w-4 text-violet-600 flex-shrink-0" />
                        {edu.startYear} - {edu.endYear}
                      </div>
                      {edu.result && (
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-pink-600 flex-shrink-0" />
                          <span className="text-sm font-bold gradient-text">{edu.result}</span>
                        </div>
                      )}
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
