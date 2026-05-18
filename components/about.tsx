import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const diferenciais = [
  "Frota própria e moderna",
  "Motoristas treinados e experientes",
  "Rastreamento em tempo real",
  "Seguro de carga incluso",
  "Atendimento personalizado",
  "Preços competitivos",
]

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/3] bg-black rounded-2xl overflow-hidden relative flex items-center justify-center p-8">
              <Image
                src="/logo-otaner.jpg"
                alt="Logo Otaner Transportes"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
              Sobre a Empresa
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Compromisso com a Excelência em Logística
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A <strong className="text-foreground">Otaner Transportes</strong> é uma empresa 
              especializada em soluções logísticas e transporte de cargas. Com quase uma década 
              de experiência no mercado, construímos nossa reputação através da confiabilidade, 
              segurança e compromisso com a satisfação dos nossos clientes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa missão é oferecer serviços de transporte que superem as expectativas, 
              garantindo que cada carga chegue ao seu destino com total integridade e dentro 
              do prazo acordado. Investimos constantemente em tecnologia e capacitação da 
              nossa equipe para oferecer o melhor serviço.
            </p>

            {/* Diferenciais */}
            <div className="grid sm:grid-cols-2 gap-4">
              {diferenciais.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
