import type { Link } from "@/lib/data"
import { Github, Linkedin, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks({ links }: { links: Link[] }) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "github":
        return <Github className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "facebook":
        return <Facebook className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="flex gap-3">
      {links.map((link, index) => (
        <Button
          key={link.name}
          variant="ghost"
          size="icon"
          className="glass-card hover:glass glow-on-hover transition-all duration-300 hover:scale-110 bg-gradient-to-br from-violet-200/50 to-pink-200/50 hover:from-violet-300/70 hover:to-pink-300/70 text-violet-700 hover:text-pink-700"
          style={{ animationDelay: `${index * 0.1}s` }}
          asChild
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            {getIcon(link.icon)}
          </a>
        </Button>
      ))}
    </div>
  )
}
