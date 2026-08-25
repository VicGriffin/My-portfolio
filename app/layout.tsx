import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })
const plex = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "600"] })

export const metadata: Metadata = {
  title: "Victor Kamau — Software Engineer",
  description: "Victor Kamau builds full-stack products, AI-powered applications, and reliable cloud systems from Nairobi, Kenya.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${space.variable} ${plex.variable}`}>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
