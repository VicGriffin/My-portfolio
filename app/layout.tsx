import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import CursorEffect from "@/components/cursor-effect"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: "Victor Kamau | Software Engineer",
  description: "Personal portfolio of Victor Kamau, Software Engineer based in Nairobi, Kenya",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning style={{ "--font-playfair": playfair.style.fontFamily } as React.CSSProperties}>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="bg-background text-foreground min-h-screen">
            <CursorEffect />
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
