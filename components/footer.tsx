import { Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  EMAIL,
  EMAIL_MAILTO,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "@/lib/contact-info"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-2 shadow-sm">
                  <Image
                    src="/logo-otaner.jpg"
                    alt="Logo Otaner Transportes"
                    width={64}
                    height={64}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-[family-name:var(--font-heading)] font-bold text-xl leading-tight">
                  <span className="block text-primary-foreground">Otaner</span>
                  <span className="block text-accent">Transportes</span>
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Soluções em logística e transporte de cargas com segurança, 
              pontualidade e compromisso com a excelência.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-4">
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-4">
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group flex items-start gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-3 transition-colors hover:text-primary-foreground"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-primary-foreground/55">Telefone</span>
                  <span className="block text-primary-foreground/75">{PHONE_DISPLAY}</span>
                </span>
              </a>
              <a
                href={EMAIL_MAILTO}
                className="group flex items-start gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-3 transition-colors hover:text-primary-foreground"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-primary-foreground/55">E-mail</span>
                  <span className="block break-all text-primary-foreground/75">{EMAIL}</span>
                </span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-3 transition-colors hover:text-primary-foreground"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Instagram className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-primary-foreground/55">Instagram</span>
                  <span className="block break-all text-primary-foreground/75">{INSTAGRAM_HANDLE}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Otaner Transportes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
