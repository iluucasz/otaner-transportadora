import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock3, MapPin, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

const executiveImage = {
  src: "/executivo/2d972aee-6954-4d9d-a4f1-7ba48eaaf023.jpeg",
  alt: "Van executiva branca Mercedes-Benz para transporte de passageiros",
}

const highlights = [
  {
    icon: Users,
    title: "Atendimento para grupos",
    description: "Solução prática para deslocamentos de equipes, famílias e pequenos grupos.",
  },
  {
    icon: Clock3,
    title: "Pontualidade executiva",
    description: "Agendamentos com foco em horário, organização e atendimento direto.",
  },
  {
    icon: Shield,
    title: "Conforto e segurança",
    description: "Viagens planejadas para oferecer tranquilidade do embarque ao destino.",
  },
  {
    icon: MapPin,
    title: "Rotas sob medida",
    description: "Atendimento para transfers, eventos, viagens programadas e trajetos personalizados.",
  },
]

export function PassengerTransport() {
  return (
    <section id="passageiros" className="py-20 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
              Transporte Executivo
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Também atendemos passageiros com vans executivas
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Oferecemos atendimento para passageiros com foco em conforto,
              segurança e pontualidade. Uma solução ideal para deslocamentos
              corporativos, transfers, eventos e viagens agendadas.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background/80 p-5 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contato">
                  Solicitar atendimento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Fale conosco para organizar o transporte de passageiros de forma
                personalizada.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-3xl bg-accent/10 blur-2xl" />
            <div className="absolute -bottom-6 -right-2 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-background shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src={executiveImage.src}
                  alt={executiveImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/20 to-transparent p-6">
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white/85 backdrop-blur-sm">
                  Vans executivas para passageiros
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}