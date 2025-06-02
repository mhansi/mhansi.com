import type { PortfolioData } from "@/lib/data"
import SocialLinks from "./social-links"
import { Mail, MapPin } from "lucide-react"

export default function Footer({ data }: { data: PortfolioData }) {
  return (
    <footer className="relative py-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-100 to-white"></div>
      <div className="container relative z-10">
        <div className="glass-card p-6 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 gradient-text">{data.fullName}</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground flex items-center justify-center md:justify-start">
                  <Mail className="mr-2 h-4 w-4 text-purple-600" />
                  {data.email}
                </p>
                <p className="text-muted-foreground flex items-center justify-center md:justify-start">
                  <MapPin className="mr-2 h-4 w-4 text-purple-600" />
                  {data.location}
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-3">Let's connect!</p>
              <SocialLinks links={data.links} />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-purple-200/50 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {data.fullName}. Crafted with 💜 and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
