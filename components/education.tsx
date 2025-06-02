import type { PortfolioData } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education({ data }: { data: PortfolioData }) {
  return (
    <section id="education" className="relative py-8 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-purple-50/50"></div>
      <div className="container relative z-10">
        <h2 className="text-center gradient-text mb-8">Education Journey</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 via-purple-400 to-violet-400 transform md:-translate-x-px"></div>

          {data.education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 animate-glow"></div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"}`}
              >
                <Card className="glass-card hover-lift glow-on-hover border-purple-100/50 relative">
                  {/* Arrow pointing to timeline */}
                  <div
                    className={`absolute top-6 w-0 h-0 border-t-8 border-b-8 border-transparent hidden md:block ${
                      index % 2 === 0
                        ? "left-0 border-r-8 border-r-white/80 transform -translate-x-full"
                        : "right-0 border-l-8 border-l-white/80 transform translate-x-full"
                    }`}
                  ></div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start">
                      <GraduationCap className="mr-3 h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div className="flex-grow">
                        <CardTitle className="text-lg mb-2">{edu.institution}</CardTitle>
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed">{edu.programme}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        {edu.startYear} - {edu.endYear}
                      </div>
                      {edu.result && (
                        <div className="flex items-center">
                          <Award className="mr-2 h-4 w-4 text-purple-600" />
                          <span className="text-sm font-medium gradient-text">{edu.result}</span>
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
