import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CurrentYear from "./CurrentYear"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/tow-truck-hero.jpg"
            alt="Contato ARPA REBOQUE"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#012a64] via-[#012a64]/90 to-[#012a64]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Entre em Contato</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
            Precisa de reboque? Estamos disponíveis 24 horas para atender você!
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f5f3f0]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Área de Atendimento</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Duque de Caxias
                        <br />
                        Baixada Fluminense
                        <br />
                        Grande Rio
                        <br />
                        Rio de Janeiro e região
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
                      <a
                        href="tel:+5521985330977"
                        className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                      >
                        (21) 98533-0977
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                      <a
                        href="https://wa.me/5521985330977?text=Olá,%20preciso%20de%20reboque!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                      >
                        (21) 98533-0977
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                      <div className="text-gray-600 space-y-1">
                        <p className="font-semibold text-blue-600">24 horas por dia</p>
                        <p>7 dias por semana</p>
                        <p>Feriados inclusos</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a
                    href="https://wa.me/5521985330977?text=Olá,%20preciso%20de%20reboque!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar no WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                  <a href="tel:+5521985330977">
                    <Phone className="w-5 h-5 mr-2" />
                    (21) 98533-0977
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit">
              <Card className="bg-white border-gray-200 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square lg:aspect-auto lg:h-[600px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117456.55453833398!2d-43.35095!3d-22.7856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x990a4b0e8a8e5d%3A0x302a3db7c7d31d21!2sDuque%20de%20Caxias%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Área de Atendimento ARPA REBOQUE"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#012a64]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blue-950/40 border-blue-800/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Nossos Serviços</h2>
                <div className="text-gray-300 leading-relaxed space-y-3">
                  <p>
                    A ARPA REBOQUE oferece serviços completos de reboque em toda a Baixada Fluminense e Grande Rio.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
                      Reboque Leve
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
                      Reboque Utilitário
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
                      Reboque Semi-Pesado
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
                      Reboque Pesado
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
                      Auxílio Borracheiro
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
                      Carga de Bateria
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full" />
                      Pane Seca
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-[#012a64] border-t border-[#011d47] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">ARPA REBOQUE</h3>
              <p className="text-gray-300 leading-relaxed">
                Seu parceiro confiável para serviços de reboque 24 horas. Atendimento rápido e seguro em toda Baixada Fluminense e Grande Rio.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/#servicos" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/#depoimentos" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Área de Atendimento:</span>
                  <br />
                  Duque de Caxias, Baixada Fluminense
                  <br />
                  Grande Rio - RJ
                </p>
                <p>
                  <span className="font-semibold text-white">WhatsApp:</span>
                  <br />
                  <a href="https://wa.me/5521985330977" className="hover:text-amber-400 transition-colors">
                    (21) 98533-0977
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Telefone:</span>
                  <br />
                  <a href="tel:+5521985330977" className="hover:text-amber-400 transition-colors">
                    (21) 98533-0977
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#011d47] mt-8 pt-8 text-center text-gray-400">
            <p>&copy; <CurrentYear /> ARPA REBOQUE. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
