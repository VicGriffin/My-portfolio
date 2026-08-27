"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Check, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface TerminalLine { id: number; text: string; type: "input" | "system" | "success" | "error" }

type ShortcutType = "hire" | "consult" | "hi"

const shortcuts: Record<ShortcutType, { label: string; subject: string; message: string }> = {
  hire: { label: "I have a role in mind", subject: "Contract / Full-time Collaboration opportunity", message: "Hi Victor, we would love to schedule an interview to discuss a prospective engineering role on our team." },
  consult: { label: "I need architecture help", subject: "Architecture Consulting Request", message: "Hi Victor, we have a custom serverless/AI deployment project we would love your guidance on." },
  hi: { label: "I would like to connect", subject: "Developer Alliance / Say Hi", message: "Hey Victor! I saw your portfolio and wanted to reach out to connect." },
}

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [activeField, setActiveField] = useState("name")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([
    { id: 1, text: "contact.channel = open", type: "system" },
    { id: 2, text: "All enquiries route to vickamau20@gmail.com", type: "success" },
  ])
  const terminalEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => { terminalEndRef.current?.scrollIntoView({ behavior: "smooth" }) }, [terminalLines])

  const handleShortcutClick = (type: ShortcutType) => {
    const shortcut = shortcuts[type]
    setFormData((current) => ({ ...current, subject: shortcut.subject, message: shortcut.message }))
    setActiveField("message")
    setTerminalLines((lines) => [...lines, { id: Date.now(), text: `preset.load --type=${type}`, type: "input" }, { id: Date.now() + 1, text: "Message template loaded.", type: "success" }])
    toast({ title: "Message template loaded", description: "You can edit it before sending." })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setShowConfirmation(false)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setTerminalLines((lines) => [...lines, { id: Date.now(), text: "validate --required name email message", type: "input" }, { id: Date.now() + 1, text: "Missing required fields.", type: "error" }])
      toast({ title: "A few details are missing", description: "Please complete your name, email, and message.", variant: "destructive" })
      return
    }

    setIsSubmitting(true)
    setTerminalLines((lines) => [...lines, { id: Date.now(), text: `mail.send --from=${formData.email}`, type: "input" }, { id: Date.now() + 1, text: "Handshaking with delivery relay…", type: "system" }])
    try {
      const { sendEmail } = await import("@/lib/email")
      const result = await sendEmail(formData)
      if (result.success) {
        setTerminalLines((lines) => [...lines, { id: Date.now(), text: "Message delivered to Victor's inbox.", type: "success" }])
        toast({ title: "Message sent", description: "Victor will review your note and get back to you." })
        setFormData({ name: "", email: "", subject: "", message: "" })
        setShowConfirmation(true)
      } else {
        setTerminalLines((lines) => [...lines, { id: Date.now(), text: "Delivery relay timed out. Try direct email.", type: "error" }])
        toast({ title: "Message could not be sent", description: "Please email vickamau20@gmail.com directly.", variant: "destructive" })
      }
    } catch {
      setTerminalLines((lines) => [...lines, { id: Date.now(), text: "Unexpected relay error. Try direct email.", type: "error" }])
      toast({ title: "Something went wrong", description: "Please email vickamau20@gmail.com directly.", variant: "destructive" })
    } finally { setIsSubmitting(false) }
  }

  return (
    <section id="contact" className="section-space">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><p className="section-kicker">Contact</p><h2 className="display-face max-w-md text-5xl font-semibold leading-[.98] sm:text-6xl">Let&apos;s build something that holds up.</h2><p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">Available for software engineering, full-stack development, AI engineering, DevOps/cloud work, and product engineering.</p><div className="mt-10 space-y-4"><a href="mailto:vickamau20@gmail.com" className="group flex items-center gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Mail className="h-4 w-4" /></span><span><span className="eyebrow block">Email</span><span className="mt-1 block text-sm font-medium transition group-hover:text-primary">vickamau20@gmail.com</span></span><ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" /></a><a href="tel:+254112570156" className="group flex items-center gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent"><Phone className="h-4 w-4" /></span><span><span className="eyebrow block">Phone</span><span className="mt-1 block text-sm font-medium transition group-hover:text-primary">+254 112 570 156</span></span><ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" /></a><div className="flex items-center gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary text-muted-foreground"><MapPin className="h-4 w-4" /></span><span><span className="eyebrow block">Based in</span><span className="mt-1 block text-sm font-medium">Nairobi, Kenya</span></span></div></div><div className="mt-10 flex gap-2 border-t border-border pt-6"><a href="https://github.com/VicGriffin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted-foreground transition hover:border-primary/50 hover:text-foreground"><Github className="h-3.5 w-3.5" /> GitHub</a><a href="https://www.linkedin.com/in/victor-kamau-987951392" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted-foreground transition hover:border-primary/50 hover:text-foreground"><Linkedin className="h-3.5 w-3.5" /> LinkedIn</a></div></div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} className="surface rounded-3xl p-5 sm:p-8"><div className="flex flex-col justify-between gap-4 border-b border-border pb-5 sm:flex-row sm:items-center"><div><p className="font-display text-xl font-semibold">Start with the shape of the problem.</p><p className="mt-1 text-sm text-muted-foreground">A few lines are enough. The form does the rest.</p></div><span className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.13em] text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> All enquiries route to vickamau20@gmail.com</span></div><div className="mt-5 flex flex-wrap gap-2">{(Object.keys(shortcuts) as ShortcutType[]).map((type) => <button type="button" key={type} onClick={() => handleShortcutClick(type)} className="rounded-full border border-border bg-secondary/55 px-3 py-2 font-mono text-[0.61rem] uppercase tracking-[0.08em] text-muted-foreground transition hover:border-primary/50 hover:text-foreground">{shortcuts[type].label}</button>)}</div><div className="mt-5 h-24 overflow-y-auto rounded-2xl border border-border bg-foreground/[.04] p-4 font-mono text-[0.65rem] leading-5"><div className="space-y-1">{terminalLines.map((line) => <p key={line.id} className={line.type === "success" ? "text-accent" : line.type === "error" ? "text-destructive" : line.type === "input" ? "text-primary" : "text-muted-foreground"}>{line.type === "input" ? "$ " : ""}{line.text}</p>)}</div><div ref={terminalEndRef} /></div><form onSubmit={handleSubmit} className="mt-6 space-y-4"><div className="grid gap-4 sm:grid-cols-2">{[{ name: "name", label: "Your name", type: "text", placeholder: "Ada Lovelace" }, { name: "email", label: "Email address", type: "email", placeholder: "you@company.com" }].map((field) => <label key={field.name} className={`block rounded-2xl border bg-card px-4 py-3 transition ${activeField === field.name ? "border-primary/60" : "border-border"}`}><span className="eyebrow block">{field.label}</span><input required name={field.name} type={field.type} value={formData[field.name as "name" | "email"]} onChange={handleChange} onFocus={() => setActiveField(field.name)} placeholder={field.placeholder} className="mt-2 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/65" /></label>)}</div><label className={`block rounded-2xl border bg-card px-4 py-3 transition ${activeField === "subject" ? "border-primary/60" : "border-border"}`}><span className="eyebrow block">What are you working on?</span><input name="subject" type="text" value={formData.subject} onChange={handleChange} onFocus={() => setActiveField("subject")} placeholder="A product, a system, a hard problem…" className="mt-2 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/65" /></label><label className={`block rounded-2xl border bg-card px-4 py-3 transition ${activeField === "message" ? "border-primary/60" : "border-border"}`}><span className="eyebrow block">Message</span><textarea required name="message" rows={5} value={formData.message} onChange={handleChange} onFocus={() => setActiveField("message")} placeholder="Tell me what you are trying to make or solve…" className="mt-2 w-full resize-none bg-transparent text-sm leading-6 text-foreground placeholder:text-muted-foreground/65" /></label><button type="submit" disabled={isSubmitting} className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-4 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-background transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting ? "Sending message…" : "Send message"}<Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>{showConfirmation && <p className="flex items-center justify-center gap-2 font-mono text-xs text-accent"><Check className="h-4 w-4" /> Message sent successfully.</p>}</form></motion.div></div>
      </div>
    </section>
  )
}
