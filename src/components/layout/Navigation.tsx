"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, Scale } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Scale className="size-5 text-background" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">Sterling & Associates</span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider">ATTORNEYS AT LAW</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/5 rounded-md border-b-2 border-transparent hover:border-primary/30"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
              About Us
            </Button>
            <Button size="sm" className="group bg-primary hover:bg-primary/90 text-background">
              Free Consultation
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-primary hover:bg-primary/10"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="px-2 pt-4 pb-3 space-y-2 border-t border-primary/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-primary/5 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="ghost" className="justify-start text-primary hover:bg-primary/10">
                About Us
              </Button>
              <Button className="justify-start group bg-primary hover:bg-primary/90 text-background">
                Free Consultation
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}