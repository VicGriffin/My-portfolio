"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "AWS Academy",
      date: "2024",
    },
    {
      title: "Data Science",
      issuer: "Cisco Academy",
      date: "2024",
    },
    {
      title: "Operating Systems",
      issuer: "Cisco Academy",
      date: "2024",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Learning & Growth</p>
          <h2 className="text-4xl font-bold mt-2">Education & Certifications</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  BSc in Computer Technology
                </CardTitle>
                <CardDescription>Murang'a University of Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="mb-4" variant="outline">
                  <Calendar className="w-3 h-3 mr-1" />
                  2021-2025
                </Badge>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive education in computer systems, programming, networking, and IT infrastructure.
                  Developed strong problem-solving skills and technical knowledge through practical projects
                  and coursework covering computer technology, professional writing, and editorial practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>

            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge variant="secondary" className="ml-4">
                      {cert.date}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
