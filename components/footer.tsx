import type { PortfolioData } from "@/lib/data"
import SocialLinks from "./social-links"
import { Mail, MapPin } from "lucide-react"

export default function Footer({ data }: { data: PortfolioData }) {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-100/50 via-pink-100/30 to-white"></div>
      <div className="container relative z-10">
        <div className="glass-card p-8 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-4 gradient-text">{data.fullName}</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground flex items-center justify-center md:justify-start font-medium">
                  <Mail className="mr-2 h-4 w-4 text-pink-600" />
                  {data.email}
                </p>
                <p className="text-muted-foreground flex items-center justify-center md:justify-start font-medium">
                  <MapPin className="mr-2 h-4 w-4 text-violet-600" />
                  {data.location}
                </p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Let's connect!</p>
              <SocialLinks links={data.links} />
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-muted-foreground font-medium">
            <p>
              © {new Date().getFullYear()} {data.fullName}. Crafted with 💜 and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
