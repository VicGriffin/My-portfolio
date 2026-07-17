"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Send, Terminal as TermIcon, Check, ArrowRight } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface TerminalLine {
  id: number
  text: string
  type: "input" | "system" | "success" | "error"
}

export default function Contact() {
  const { toast } = useToast()
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([
    { id: 1, text: "ssh-agent client.vickamau.dev --authenticated", type: "system" },
    { id: 2, text: "Connection established over secure layer.", type: "success" },
    { id: 3, text: "Type message credentials or use shortcuts below:", type: "system" },
  ])
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [activeField, setActiveField] = useState<"name" | "email" | "subject" | "message">("name")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const terminalEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of terminal when lines update
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [terminalLines])

  const handleShortcutClick = (shortcutType: "hire" | "consult" | "hi") => {
    let presetSubject = ""
    let presetMessage = ""

    if (shortcutType === "hire") {
      presetSubject = "Contract / Full-time Collaboration opportunity"
      presetMessage = "Hi Victor, we would love to schedule an interview to discuss a prospective engineering role on our team."
    } else if (shortcutType === "consult") {
      presetSubject = "Architecture Consulting Request"
      presetMessage = "Hi Victor, we have a custom serverless/AI deployment project we would love your guidance on."
    } else {
      presetSubject = "Developer Alliance / Say Hi"
      presetMessage = "Hey Victor! Just saw your world-class interactive portfolio and wanted to reach out to connect."
    }

    setFormData((prev) => ({
      ...prev,
      subject: presetSubject,
      message: presetMessage,
    }))
    
    // Add terminal action log
    const newLineId = Date.now()
    setTerminalLines((prev) => [
      ...prev,
      { id: newLineId, text: `inject-preset-shortcut --type=${shortcutType}`, type: "input" },
      { id: newLineId + 1, text: `Preset data injected. Subject set to "${presetSubject}"`, type: "success" },
    ])

    setActiveField("message") // Jump to message editing
    toast({
      title: "Preset Loaded",
      description: "Predefined template has been loaded into your communication terminal.",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      setTerminalLines((prev) => [
        ...prev,
        { id: Date.now(), text: "validate-fields --check", type: "input" },
        { id: Date.now() + 1, text: "CRITICAL ERROR: Missing required parameters (name, email, message)", type: "error" },
      ])
      toast({
        title: "Validation Error",
        description: "Please complete Name, Email, and Message fields.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)
    
    const sendLineId = Date.now()
    setTerminalLines((prev) => [
      ...prev,
      { id: sendLineId, text: `mail-agent send --from="${formData.name}" --email="${formData.email}"`, type: "input" },
      { id: sendLineId + 1, text: "Encrypting package streams and handshaking with delivery relay...", type: "system" },
    ])

    try {
      const { sendEmail } = await import("@/lib/email")
      const result = await sendEmail(formData)

      if (result.success) {
        setTerminalLines((prev) => [
          ...prev,
          { id: Date.now(), text: "STATUS 200: Handshake success. Package routed to vickamau20@gmail.com", type: "success" },
        ])
        toast({
          title: "🎉 Secure Payload Transmitted!",
          description: "Thank you for reaching out. Victor will review your message within 24 hours.",
        })

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setShowConfirmation(true)
      } else {
        setTerminalLines((prev) => [
          ...prev,
          { id: Date.now(), text: "STATUS 503: Transmission failed. Relay server timeout.", type: "error" },
        ])
        toast({
          title: "❌ Transmission Failure",
          description: "Relay timeout. Please email me directly at vickamau20@gmail.com",
          variant: "destructive"
        })
      }
    } catch (error) {
      setTerminalLines((prev) => [
        ...prev,
        { id: Date.now(), text: "FATAL: Handshake dropped over runtime exception.", type: "error" },
      ])
      toast({
        title: "⚠️ Relay Exception",
        description: "Something went wrong. Please connect at vickamau20@gmail.com",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background Volumetric Radiance */}
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-rose-500/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-amber-500/5 filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4"
          >
            <TermIcon className="w-4 h-4 text-amber-500" />
            <span className="text-xs text-amber-400 font-mono tracking-widest uppercase">Secure Terminal</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">
            Establish Connection
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-amber-500 via-rose-500 to-sky-500 mx-auto rounded-full mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-base">
            Initiate an encrypted transport loop directly to my inbox. Type custom parameters or execute preset handshake commands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Metadata Sidebar details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <Card className="glass-card rounded-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CardContent className="p-6">
                  <h3 className="text-lg font-mono font-bold tracking-wider text-white mb-4 uppercase border-b border-white/5 pb-2">
                    Core Directory
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase text-neutral-500">VOIP Handshake</p>
                        <p className="text-sm font-semibold text-neutral-200">+254 112 570 156</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase text-neutral-500">Primary SMTP Inbox</p>
                        <p className="text-sm font-semibold text-neutral-200">vickamau20@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase text-neutral-500">Nodal Geolocation</p>
                        <p className="text-sm font-semibold text-neutral-200 font-sans">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Predefined handshake macros */}
              <Card className="glass-card rounded-2xl border border-white/5">
                <CardContent className="p-6">
                  <h3 className="text-xs font-mono tracking-wider text-neutral-400 mb-3 uppercase">
                    handshake pre-sets
                  </h3>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleShortcutClick("hire")}
                      className="text-left w-full p-2.5 rounded-lg bg-black/40 border border-white/5 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all text-xs font-mono flex items-center justify-between group"
                    >
                      <span className="text-neutral-300 group-hover:text-rose-400">➜ load_preset_hire.sh</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all text-rose-400" />
                    </button>
                    <button
                      onClick={() => handleShortcutClick("consult")}
                      className="text-left w-full p-2.5 rounded-lg bg-black/40 border border-white/5 hover:border-sky-500/30 hover:bg-sky-500/5 transition-all text-xs font-mono flex items-center justify-between group"
                    >
                      <span className="text-neutral-300 group-hover:text-sky-400">➜ load_preset_consult.sh</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all text-sky-400" />
                    </button>
                    <button
                      onClick={() => handleShortcutClick("hi")}
                      className="text-left w-full p-2.5 rounded-lg bg-black/40 border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all text-xs font-mono flex items-center justify-between group"
                    >
                      <span className="text-neutral-300 group-hover:text-amber-400">➜ load_preset_sayhi.sh</span>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all text-amber-400" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-3 pt-6 border-t border-white/5 mt-6 lg:mt-0">
              <a
                href="https://github.com/VicGriffin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/10 transition-all shadow-lg"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/victor-kamau-987951392"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white hover:border-white/10 transition-all shadow-lg"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Secure Interactive Console */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8 glass-card rounded-2xl border border-white/5 p-6 flex flex-col justify-between"
          >
            {/* Top Bar terminal decoration */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="font-mono text-xs text-neutral-400 ml-2">VICTOR_TERMINAL_V1.12</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500">SECURE SHELL v2.0</span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              {/* Terminal Logs View */}
              <div className="bg-black/40 rounded-xl border border-white/5 p-4 font-mono text-xs space-y-2 max-h-[160px] overflow-y-auto mb-6 scrollbar-thin">
                {terminalLines.map((line) => (
                  <div key={line.id} className="flex items-start gap-1.5">
                    {line.type === "input" && <span className="text-sky-400 select-none">vickamau:~ $</span>}
                    {line.type === "system" && <span className="text-neutral-500 select-none">SYSTEM:</span>}
                    {line.type === "success" && <span className="text-emerald-400 select-none">SUCCESS:</span>}
                    {line.type === "error" && <span className="text-rose-500 select-none">ERROR:</span>}
                    <span className={
                      line.type === "input"
                        ? "text-neutral-200"
                        : line.type === "success"
                        ? "text-emerald-300"
                        : line.type === "error"
                        ? "text-rose-300"
                        : "text-neutral-400"
                    }>
                      {line.text}
                    </span>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className={`p-3 rounded-xl border transition-all duration-300 ${
                    activeField === "name" ? "bg-amber-500/5 border-amber-500/30" : "bg-black/20 border-white/5"
                  }`}>
                    <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">
                      01. SENDER_IDENTITY
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      placeholder="Input name..."
                      className="w-full bg-transparent border-none text-sm text-white focus:outline-none placeholder-neutral-700 font-sans"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className={`p-3 rounded-xl border transition-all duration-300 ${
                    activeField === "email" ? "bg-amber-500/5 border-amber-500/30" : "bg-black/20 border-white/5"
                  }`}>
                    <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">
                      02. SENDER_SMTP_MAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      placeholder="Input email address..."
                      className="w-full bg-transparent border-none text-sm text-white focus:outline-none placeholder-neutral-700 font-mono"
                      required
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className={`p-3 rounded-xl border transition-all duration-300 ${
                  activeField === "subject" ? "bg-amber-500/5 border-amber-500/30" : "bg-black/20 border-white/5"
                }`}>
                  <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">
                    03. TRANSMISSION_TOPIC
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField("subject")}
                    placeholder="Input topic header (optional)..."
                    className="w-full bg-transparent border-none text-sm text-white focus:outline-none placeholder-neutral-700 font-sans"
                  />
                </div>

                {/* Message field */}
                <div className={`p-3 rounded-xl border transition-all duration-300 ${
                  activeField === "message" ? "bg-amber-500/5 border-amber-500/30" : "bg-black/20 border-white/5"
                }`}>
                  <label className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">
                    04. CONSOLE_PAYLOAD
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField("message")}
                    placeholder="Compile and write message payloads here..."
                    className="w-full bg-transparent border-none text-sm text-white focus:outline-none placeholder-neutral-700 font-sans resize-none"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-black font-bold text-xs uppercase tracking-widest font-mono flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(244,63,94,0.15)] disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>transmitting payload...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>transmit_secure_handshake()</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
