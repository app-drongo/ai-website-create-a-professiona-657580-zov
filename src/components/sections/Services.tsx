import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  Scale,
  Building2,
  FileText,
  Shield,
  Users,
  Briefcase,
  Gavel,
  HandShake
} from "lucide-react"

export default function ServicesListDescriptions() {
  const services = [
    {
      id: "corporate-law",
      title: "Corporate Law & Business Formation",
      description: "Comprehensive legal services for business establishment and growth",
      longDescription: "Sterling & Associates provides expert guidance in corporate structuring, business formation, and ongoing compliance. We help entrepreneurs and established businesses navigate complex corporate legal requirements with precision and strategic insight.",
      icon: Building2,
      benefits: [
        "Business entity formation and structuring",
        "Corporate governance and compliance",
        "Mergers, acquisitions, and joint ventures",
        "Securities law and regulatory compliance"
      ],
      pricing: "Starting at $2,500 per matter",
      timeline: "2-4 weeks typical engagement",
      featured: true,
      badge: "Most Requested"
    },
    {
      id: "contract-law",
      title: "Contract Drafting & Review",
      description: "Meticulous contract services protecting your business interests",
      longDescription: "Our experienced attorneys draft, review, and negotiate contracts that safeguard your interests while facilitating successful business relationships. From simple agreements to complex commercial transactions, we ensure every detail is covered.",
      icon: FileText,
      benefits: [
        "Contract drafting and customization",
        "Comprehensive contract review and analysis",
        "Negotiation strategy and support",
        "Dispute prevention and risk mitigation"
      ],
      pricing: "Hourly rates from $350",
      timeline: "1-2 weeks per contract"
    },
    {
      id: "litigation-support",
      title: "Business Litigation & Dispute Resolution",
      description: "Aggressive representation in commercial disputes and litigation",
      longDescription: "When business disputes arise, Sterling & Associates provides skilled litigation representation and alternative dispute resolution services. We protect your interests through strategic advocacy and efficient resolution methods.",
      icon: Gavel,
      benefits: [
        "Commercial litigation representation",
        "Alternative dispute resolution (ADR)",
        "Employment law disputes",
        "Intellectual property litigation"
      ],
      pricing: "Contingency and hourly options",
      timeline: "3-18 months depending on complexity"
    },
    {
      id: "regulatory-compliance",
      title: "Regulatory Compliance & Risk Management",
      description: "Proactive compliance strategies for regulated industries",
      longDescription: "Navigate complex regulatory landscapes with confidence. Our compliance team helps businesses understand and meet regulatory requirements while implementing robust risk management frameworks.",
      icon: Shield,
      benefits: [
        "Regulatory compliance audits",
        "Industry-specific legal guidance",
        "Risk assessment and mitigation",
        "Government relations and advocacy"
      ],
      pricing: "Retainer agreements available",
      timeline: "Ongoing advisory relationship",
      badge: "Specialized"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Legal Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Legal Solutions
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Tailored to Your Business
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sterling & Associates delivers strategic legal counsel designed to protect your interests and drive business success
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Pricing:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Schedule Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Need Specialized Legal Counsel?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every legal matter is unique. Contact Sterling & Associates to discuss your specific needs and learn how our experienced attorneys can protect your interests.
          </p>
          <Button size="lg">
            Request Legal Consultation
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}