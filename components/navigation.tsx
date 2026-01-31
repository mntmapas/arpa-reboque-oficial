"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#fafafa] shadow-sm border-b border-gray-200" : "bg-[#fafafa]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-arpa.png"
              alt="ARPA REBOQUE Logo"
              width={50}
              height={50}
              className="w-12 h-12 object-contain"
            />
            <div className="text-2xl font-bold text-[#1a1a1a] text-[rgba(1,42,100,1)]">
              ARPA <span className="text-[#012a64] text-blue-600">REBOQUE</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#servicos" className="hover:text-[#012a64] transition-colors text-[rgba(1,42,100,1)]">
              Serviços
            </a>
            <a href="/#como-funciona" className="hover:text-[#012a64] transition-colors text-[rgba(1,42,100,1)]">
              Como Funciona
            </a>
            <a href="/#galeria" className="hover:text-[#012a64] transition-colors text-[rgba(1,42,100,1)]">
              Galeria
            </a>
            <a href="/#depoimentos" className="hover:text-[#012a64] transition-colors text-[rgba(1,42,100,1)]">
              Depoimentos
            </a>
            <Link href="/contact" className="hover:text-[#012a64] transition-colors text-[rgba(1,42,100,1)]">
              Contato
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="hidden sm:inline-flex bg-amber-400 text-[#012a64] border-amber-400 hover:bg-[#fafafa] hover:text-[#012a64] hover:border-[#012a64] transition-colors"
            >
              <a href="tel:+5521985330977">
                <Phone className="w-4 h-4 mr-2" />
                (21) 98533-0977
              </a>
            </Button>
            <Button asChild className="hidden sm:inline-flex bg-[#012a64] hover:bg-[#011d47] text-white">
              <a
                href="https://wa.me/5521964759740?text=Olá,%20preciso%20de%20reboque!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#1a1a1a] p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && <div className="fixed inset-0 md:hidden" onClick={closeMobileMenu} />}

      <div
        className={`fixed top-20 right-0 bottom-0 w-64 bg-[#fafafa] shadow-xl transform transition-transform duration-300 ease-in-out md:hidden border-l border-gray-200 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <a
            href="/#servicos"
            className="text-gray-700 hover:text-[#012a64] transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Serviços
          </a>
          <a
            href="/#como-funciona"
            className="text-gray-700 hover:text-[#012a64] transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Como Funciona
          </a>
          <a
            href="/#galeria"
            className="text-gray-700 hover:text-[#012a64] transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Galeria
          </a>
          <a
            href="/#depoimentos"
            className="text-gray-700 hover:text-[#012a64] transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Depoimentos
          </a>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-[#012a64] transition-colors text-lg"
            onClick={closeMobileMenu}
          >
            Contato
          </Link>

          <div className="border-t border-gray-200 pt-6 flex flex-col gap-3">
            <Button
              asChild
              variant="outline"
              className="w-full bg-amber-400 text-[#012a64] border-amber-400 hover:bg-[#fafafa] hover:text-[#012a64] hover:border-[#012a64] transition-colors"
            >
              <a href="tel:+5521985330977">
                <Phone className="w-4 h-4 mr-2" />
                (21) 98533-0977
              </a>
            </Button>
            <Button asChild className="w-full bg-[#012a64] hover:bg-[#011d47] text-white">
              <a
                href="https://wa.me/5521964759740?text=Olá,%20preciso%20de%20reboque!"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
