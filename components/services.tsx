import { Truck, Package, Clock, MapPin, Shield, Boxes } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const servicos = [
  {
    icon: Truck,
    title: "Transporte Rodoviário",
    description:
      "Transporte de cargas por todo o território nacional com veículos adequados para cada tipo de mercadoria.",
  },
  {
    icon: Package,
    title: "Carga Fracionada",
    description:
      "Ideal para envios menores. Agrupamos sua carga com outras para otimizar custos sem perder qualidade.",
  },
  {
    icon: Boxes,
    title: "Carga Completa",
    description:
      "Veículo dedicado exclusivamente para sua carga. Ideal para grandes volumes ou cargas especiais.",
  },
  {
    icon: Clock,
    title: "Entregas Expressas",
    description:
      "Quando o tempo é essencial. Serviço prioritário com prazos reduzidos para entregas urgentes.",
  },
  {
    icon: MapPin,
    title: "Coleta e Entrega",
    description:
      "Buscamos sua mercadoria no local de origem e entregamos diretamente ao destinatário.",
  },
  {
    icon: Shield,
    title: "Carga Especial",
    description:
      "Transporte de cargas que exigem cuidados específicos como produtos frágeis, perecíveis ou de alto valor.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            Nossos Serviços
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Soluções Completas em Transporte
          </h2>
          <p className="text-foreground/70 text-lg">
            Oferecemos uma gama completa de serviços logísticos para atender 
            às necessidades específicas do seu negócio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico) => (
            <Card
              key={servico.title}
              className="bg-card border-border hover:border-accent/50 transition-colors group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <servico.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                  {servico.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 leading-relaxed">
                  {servico.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
