"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulating email send
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out! I'll review your message and get back to you within 24 hours.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setShowConfirmation(true)
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or email me directly at vickamau20@gmail.com",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Let's Connect</p>
          <h2 className="text-4xl font-bold mt-2 mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you have any questions, project ideas, or just want to connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

                <motion.a
                  href="tel:+254112570156"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-muted-foreground">+254112570156</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:vickamau20@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-muted-foreground break-all">vickamau20@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Location</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </motion.div>

                <div className="pt-6 border-t">
                  <p className="text-sm font-semibold mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    <Button size="icon" variant="outline" asChild className="rounded-full">
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild className="rounded-full">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild className="rounded-full">
                      <a href="mailto:vickamau20@gmail.com">
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Confirmation Message */}
                {showConfirmation && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20"
                  >
                    <p className="font-semibold text-primary mb-2">Message Sent Successfully!</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Thank you for reaching out! I've received your message and will get back to you within 24 hours.
                    </p>
                    <p className="text-sm">
                      You can also email me directly at{" "}
                      <a href="mailto:vickamau20@gmail.com" className="text-primary font-semibold hover:underline">
                        vickamau20@gmail.com
                      </a>
                    </p>
                    <Button
                      onClick={() => setShowConfirmation(false)}
                      variant="outline"
                      size="sm"
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
