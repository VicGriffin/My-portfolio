import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Instrument_Sans, Phudu } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Preloader from "@/components/preloader"
import MagicCursor from "@/components/magic-cursor"

const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" })
const phudu = Phudu({ subsets: ["latin"], variable: "--font-phudu", display: "swap", weight: ["400", "500", "600", "700"] })
const plex = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "600"], display: "swap" })

export const metadata: Metadata = {
  title: "Victor Kamau — Software Engineer",
  description: "Victor Kamau builds full-stack products, AI-powered applications, and reliable cloud systems from Nairobi, Kenya.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrument.variable} ${phudu.variable} ${plex.variable}`}>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background text-foreground">
            <Preloader />
            <MagicCursor />
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
