import Image from "next/image"
import { Wrench } from "lucide-react"

export function MaintenanceOverlay() {
  return (
    <div
      role="alert"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-primary px-4 py-10"
    >
      <div className="w-full max-w-xl text-center">
        <Image
          src="/logo-otaner.jpg"
          alt="Otaner Transportes"
          width={96}
          height={96}
          priority
          className="mx-auto mb-8 h-24 w-24 rounded-full object-cover ring-2 ring-accent/60"
        />

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 border border-accent/30">
          <Wrench className="h-8 w-8 text-accent" aria-hidden="true" />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
          Site em manutenção
        </p>
        <h1 className="mb-4 text-balance font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">
          Voltamos em breve
        </h1>
        <p className="mx-auto max-w-md text-balance text-lg leading-relaxed text-primary-foreground/80">
          Estamos fazendo melhorias no nosso site. Em breve estaremos de volta.
        </p>

        <p className="mt-12 text-sm text-primary-foreground/50">
          Otaner Transportes
        </p>
      </div>
    </div>
  )
}
