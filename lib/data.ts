export interface Link {
  name: string
  url: string
  icon: string
}

export interface Education {
  institution: string
  programme: string
  startYear: string
  endYear: string
  result: string | null
}

export interface Position {
  title: string
  startMonth: string
  endMonth: string
}

export interface Experience {
  company: string
  companyUrl: string
  companyLocation: string
  employmentType: string
  positions: Position[]
}

export interface Project {
  name: string
  url: string | null
  company: string
  startMonth: string
  endMonth: string
  description: string
  role: string[]
  techStack: string[]
}

export interface SkillCategory {
  type: string
  skills: string[]
}

export interface MakerProfile {
  eyebrow: string
  title: string
  description: string
  socials: { name: string; handle: string; url: string }[]
}

export interface ShopData {
  name: string
  tagline: string
  description: string
  currency: string
  pricing: { single: number; bundleQuantity: number; bundlePrice: number; bulkNote: string }
  features: { title: string; description: string }[]
  images: string[]
  colorways: { name: string; image: string }[]
  customOrders: { title: string; description: string; cta: string }
  bundleImage: string
  ordering: {
    methods: string[]
    email: string
    delivery: string
    deliveryFee: string
    paymentMethods: string[]
    note: string
  }
}

export interface PortfolioData {
  firstName: string
  lastName: string
  fullName: string
  email: string
  location: string
  bio: string
  keywords: string[]
  links: Link[]
  education: Education[]
  experience: Experience[]
  projects: Project[]
  skills: SkillCategory[]
  interests: string[]
  maker: MakerProfile
  shop: ShopData
}

export async function getData(): Promise<PortfolioData> {
  // In a real production environment, you might fetch this from an API
  // For this example, we'll import the JSON file directly
  const data = await import("../data.json")
  return data.default as PortfolioData
}
