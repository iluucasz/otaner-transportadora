import { Clock, Instagram, Mail, Phone } from "lucide-react"

import {
  EMAIL,
  EMAIL_MAILTO,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/contact-info"

export function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">
              Contato
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Entre em Contato Conosco
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Estamos prontos para atender suas necessidades de transporte. 
              Entre em contato através dos nossos canais ou envie uma mensagem 
              direto pelo WhatsApp para orçamentos rápidos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Telefone</p>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">E-mail</p>
                  <a
                    href={EMAIL_MAILTO}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Horário de Atendimento</p>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 08h às 18h<br />
                    Sábado: 08h às 12h
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
