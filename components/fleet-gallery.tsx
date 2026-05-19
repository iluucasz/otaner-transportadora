import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const galleryItems = [
  {
    src: "/van/0b56ee93-6164-4e05-87d4-984b3c7e8dba.jpeg",
    alt: "Van branca estacionada vista pela lateral",
    title: "Van para apoio logístico",
    category: "Van",
  },
  {
    src: "/van/349787bd-2e6f-46c0-b8ee-e5d7b5310d4a.jpeg",
    alt: "Baú de caminhão com caixas organizadas para entrega",
    title: "Carga organizada",
    category: "Caminhão",
  },
  {
    src: "/van/805a3669-3787-4b82-9403-feb784bd167f.jpeg",
    alt: "Van branca vista de frente em área aberta",
    title: "Frota leve",
    category: "Van",
  },
  {
    src: "/van/91037e82-c1c5-4a4e-a76c-1cc06d528009.jpeg",
    alt: "Interior espaçoso da van",
    title: "Interior confortável",
    category: "Van",
  },
  {
    src: "/van/c6fa158d-ad18-4b07-9ec9-32150602aaea.jpeg",
    alt: "Caminhão branco em operação próximo ao galpão",
    title: "Operação de coleta",
    category: "Caminhão",
  },
  {
    src: "/van/f8a12d83-f713-4af5-b00b-5f7c951a2280.jpeg",
    alt: "Van branca de carga estacionada em área aberta",
    title: "Entrega dedicada",
    category: "Van",
  }
]

export function FleetGallery() {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            Galeria da Frota
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Vans e caminhões em operação
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Uma visão rápida da nossa estrutura para transporte de passageiros,
            coletas, entregas e apoio logístico.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mx-auto max-w-6xl"
        >
          <CarouselContent>
            {galleryItems.map((item) => (
              <CarouselItem
                key={item.src}
                className="md:basis-1/2 xl:basis-1/3"
              >
                <div className="h-full overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.alt}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {item.category}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-3 border-border bg-background/95 text-foreground shadow-sm md:-left-4" />
          <CarouselNext className="right-3 border-border bg-background/95 text-foreground shadow-sm md:-right-4" />
        </Carousel>
      </div>
    </section>
  )
}