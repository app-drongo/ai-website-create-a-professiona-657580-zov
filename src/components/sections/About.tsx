import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Scale, 
  Users, 
  Award, 
  Shield,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Gavel,
  BookOpen
} from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Scale,
      title: "Justice & Integrity",
      description: "We uphold the highest ethical standards and fight tirelessly for justice, ensuring every client receives fair and honest representation."
    },
    {
      icon: BookOpen,
      title: "Legal Excellence",
      description: "Our attorneys stay at the forefront of legal developments, bringing deep expertise and innovative strategies to every case."
    },
    {
      icon: Shield,
      title: "Client Protection",
      description: "Your interests are our priority. We provide robust legal protection and strategic counsel to safeguard your business and personal assets."
    },
    {
      icon: Users,
      title: "Trusted Partnership",
      description: "We build lasting relationships with our clients, serving as trusted legal advisors throughout their business journey and personal matters."
    }
  ]

  const stats = [
    { value: "1985", label: "Established", icon: Award },
    { value: "500+", label: "Satisfied Clients", icon: Users },
    { value: "98%", label: "Success Rate", icon: TrendingUp },
    { value: "35+", label: "Years Experience", icon: Scale }
  ]

  const team = [
    {
      name: "Robert Sterling",
      role: "Senior Partner & Founder",
      image: "RS",
      bio: "Harvard Law graduate with 35+ years in corporate law and litigation."
    },
    {
      name: "Margaret Associates",
      role: "Managing Partner", 
      image: "MA",
      bio: "Former federal prosecutor specializing in white-collar defense and compliance."
    },
    {
      name: "James Mitchell",
      role: "Corporate Law Partner",
      image: "JM",
      bio: "Expert in mergers & acquisitions with extensive Fortune 500 experience."
    },
    {
      name: "Sarah Thompson",
      role: "Litigation Partner",
      image: "ST",
      bio: "Trial attorney with a proven track record in complex commercial disputes."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Our Firm
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trusted Legal Counsel for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Over Three Decades
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sterling & Associates has been providing exceptional legal representation to businesses 
            and individuals since 1985, combining deep legal expertise with personalized service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Legacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1985 by Robert Sterling, our firm was built on the principle that every client 
                deserves exceptional legal representation, regardless of the size or complexity of their matter.
              </p>
              <p>
                Over the decades, we've grown from a small practice to a full-service law firm, 
                while maintaining our commitment to personalized attention and strategic legal counsel 
                that delivers results.
              </p>
              <p>
                Today, we're proud to serve over 500 clients across various industries, 
                from emerging startups to established corporations, providing comprehensive legal solutions 
                that protect and advance their interests.
              </p>
            </div>
            <Button className="group">
              View Our Case Studies
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Excellence in legal representation requires both expertise and unwavering dedication to our clients' success."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Robert Sterling, Senior Partner</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The fundamental principles that guide our practice and define our commitment to excellence in legal representation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Legal Team</h3>
            <p className="text-muted-foreground">
              Experienced attorneys dedicated to providing exceptional legal counsel and achieving the best possible outcomes for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet All Our Attorneys
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Sterling & Associates provided exceptional legal counsel during our merger. Their expertise 
                and attention to detail ensured a smooth transaction and protected our interests throughout."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  MJ
                </div>
                <div className="text-left">
                  <div className="font-semibold">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">CEO, TechVentures Corp.</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}