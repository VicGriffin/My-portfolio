import { Github, Heart, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              <span className="text-primary">V</span>ictor Kamau
            </Link>
            <p className="text-sm text-muted-foreground mt-1">Software Engineer based in Nairobi, Kenya</p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/VicGriffin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/victor-muthui-9351b3355"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:vickamu20@gmail.com"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-6 pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Victor Kamau. All rights reserved. Made with
            <Heart size={14} className="text-red-500" /> in Nairobi
          </p>
        </div>
      </div>
    </footer>
  )
}
