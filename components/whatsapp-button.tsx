"use client"

import { MessageCircle } from "lucide-react"

import { WHATSAPP_NUMBER } from "@/lib/contact-info"

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de solicitar um orçamento de transporte."
)

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white font-semibold py-3 px-5 rounded-full shadow-lg hover:shadow-xl transition-all group"
      aria-label="Abrir WhatsApp para solicitar orçamento"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Orçamento via WhatsApp</span>
    </button>
  )
}
