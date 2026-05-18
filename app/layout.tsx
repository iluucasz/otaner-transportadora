import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Otaner Transportes - Logística e Transporte de Cargas',
  description: 'Soluções em transporte de cargas e logística. Entregas rápidas, seguras e pontuais para todo o Brasil. Solicite seu orçamento!',
  generator: 'v0.app',
  icons: {
    icon: '/logo-otaner.jpg',
    shortcut: '/logo-otaner.jpg',
    apple: '/logo-otaner.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
