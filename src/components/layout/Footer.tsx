import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Scale,
  Clock,
  Shield
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Practice Areas",
      links: [
        { name: "Corporate Law", href: "#services" },
        { name: "Business Litigation", href: "#services" },
        { name: "Contract Law", href: "#services" },
        { name: "Employment Law", href: "#services" },
        { name: "Intellectual Property", href: "#services" },
        { name: "Real Estate Law", href: "#services" }
      ]
    },
    {
      title: "About Us",
      links: [
        { name: "Our Firm", href: "#about" },
        { name: "Our Attorneys", href: "#about" },
        { name: "Case Results", href: "#about" },
        { name: "Client Testimonials", href: "#about" },
        { name: "Awards & Recognition", href: "#about" },
        { name: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Legal Blog", href: "/blog" },
        { name: "FAQ", href: "/faq" },
        { name: "Legal Forms", href: "/forms" },
        { name: "Case Studies", href: "/cases" },
        { name: "Legal News", href: "/news" },
        { name: "Client Portal", href: "/portal" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Attorney Disclaimer", href: "/disclaimer" },
        { name: "Bar Admissions", href: "/admissions" },
        { name: "Professional Ethics", href: "/ethics" },
        { name: "Accessibility", href: "/accessibility" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/sterling-associates" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/sterlinglaw" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/sterlingassociates" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Scale className="size-6 text-background" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-background">Sterling & Associates</span>
                  <span className="text-xs text-accent font-medium tracking-wider">ATTORNEYS AT LAW</span>
                </div>
              </Link>
              <p className="text-accent text-sm leading-relaxed mb-6">
                Providing exceptional legal counsel and representation for over 25 years. 
                Our experienced attorneys are dedicated to protecting your interests and achieving the best possible outcomes.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-accent">
                  <div>1200 Corporate Center Drive</div>
                  <div>Suite 300, Downtown</div>
                  <div>New York, NY 10001</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-accent">(212) 555-0123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-accent">info@sterlinglaw.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-primary flex-shrink-0" />
                <span className="text-accent">Mon-Fri: 8:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background flex items-center gap-2">
                <Shield className="size-4 text-primary" />
                Legal Updates
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-accent focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-accent">
                Stay informed about legal developments and firm news. Confidential and secure.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-accent hover:text-background transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-accent">
              <span>© 2024 Sterling & Associates. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Licensed to practice in NY, NJ, CT</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-accent mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-accent group-hover:text-background transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/20">
            <Link href="/sitemap" className="text-xs text-accent hover:text-background transition-colors">
              Sitemap
            </Link>
            <Link href="/attorney-advertising" className="text-xs text-accent hover:text-background transition-colors">
              Attorney Advertising
            </Link>
            <Link href="/disclaimer" className="text-xs text-accent hover:text-background transition-colors">
              Legal Disclaimer
            </Link>
            <Link href="/emergency" className="text-xs text-accent hover:text-background transition-colors">
              Emergency Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}