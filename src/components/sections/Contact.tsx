"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Scale,
  Briefcase,
  Calendar,
  Shield
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    legalMatter: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Legal consultation request submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Schedule Consultation",
      description: "Speak with our attorneys",
      contact: "+1 (555) 847-3456",
      action: "Call Sterling & Associates"
    },
    {
      icon: Mail,
      title: "Legal Inquiry",
      description: "Send us your legal questions",
      contact: "legal@sterlingassociates.com",
      action: "Send Legal Inquiry"
    },
    {
      icon: Calendar,
      title: "Emergency Legal Support",
      description: "Urgent legal matters",
      contact: "Available 24/7 for clients",
      action: "Request Emergency Support"
    }
  ]

  const offices = [
    {
      city: "Manhattan, NY",
      address: "450 Park Avenue, 32nd Floor",
      timezone: "EST (UTC-5)",
      specialty: "Corporate Law"
    },
    {
      city: "Washington, DC",
      address: "1200 K Street NW, Suite 800",
      timezone: "EST (UTC-5)",
      specialty: "Regulatory Affairs"
    },
    {
      city: "Chicago, IL",
      address: "233 S Wacker Drive, 45th Floor",
      timezone: "CST (UTC-6)",
      specialty: "Business Litigation"
    }
  ]

  const legalMatters = [
    "Corporate Law & Business Formation",
    "Contract Negotiation & Review",
    "Mergers & Acquisitions",
    "Employment Law",
    "Intellectual Property",
    "Real Estate Law",
    "Litigation & Dispute Resolution",
    "Regulatory Compliance",
    "Other Legal Matter"
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Scale className="size-3 mr-2" />
            Legal Consultation
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Expert Legal Counsel
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              When You Need It Most
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Contact Sterling & Associates for professional legal representation. Our experienced 
            attorneys are ready to provide strategic counsel for your business and personal legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Briefcase className="size-6 text-primary" />
                Request Legal Consultation
              </CardTitle>
              <CardDescription>
                Complete this form to schedule your confidential consultation. All communications are protected by attorney-client privilege.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label htmlFor="legalMatter" className="block text-sm font-medium mb-2">
                    Type of Legal Matter *
                  </label>
                  <select
                    id="legalMatter"
                    name="legalMatter"
                    value={formData.legalMatter}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select legal matter type</option>
                    {legalMatters.map((matter, index) => (
                      <option key={index} value={matter}>{matter}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Case Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Please provide details about your legal matter. All information shared is confidential and protected by attorney-client privilege."
                  />
                </div>

                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-sm text-primary flex items-start gap-2">
                    <Shield className="size-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Confidentiality Guaranteed:</strong> All communications are protected under attorney-client privilege and will be handled with the utmost discretion.
                    </span>
                  </p>
                </div>

                <Button type="submit" className="w-full text-base py-6 group bg-primary hover:bg-primary/90">
                  Request Consultation
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MessageSquare className="size-5 text-primary" />
                Contact Our Legal Team
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Sterling & Associates Offices
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                      {office.specialty}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-muted-foreground">By Appointment</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Shield className="size-4" />
                    24/7 emergency legal support available for existing clients
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}