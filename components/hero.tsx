import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/95">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
              Transporte de Cargas
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Soluções em Logística e Transporte
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Entregamos suas cargas com segurança, pontualidade e eficiência. 
              Sua mercadoria em boas mãos, do início ao destino final.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <Link href="#orcamento">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="#servicos">Nossos Serviços</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="text-center lg:text-left">
                <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-primary-foreground">
                  5+
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">Anos de Experiência</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-primary-foreground">
                  5k+
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">Entregas Realizadas</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-primary-foreground">
                  98%
                </p>
                <p className="text-primary-foreground/70 text-sm mt-1">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Shield className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-primary-foreground mb-2">
                Segurança Total
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Cargas monitoradas 24h com sistema de rastreamento em tempo real.
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 mt-8">
              <Clock className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-primary-foreground mb-2">
                Pontualidade
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Cumprimos prazos rigorosos para sua tranquilidade e do seu cliente.
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-primary-foreground mb-2">
                Cobertura Nacional
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Entregas para todos os estados do Brasil com agilidade.
              </p>
            </div>
            <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-6 border border-accent/30 mt-8">
              <p className="text-accent font-semibold text-sm mb-2">Precisa de transporte?</p>
              <p className="text-primary-foreground text-lg font-semibold">
                Fale conosco pelo WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
