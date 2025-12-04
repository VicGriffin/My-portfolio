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
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      BSc in Computer Technology
                    </CardTitle>
                    <CardDescription className="text-base mt-1">Murang'a University of Technology</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>2021-2025</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive education in computer systems, programming, networking, and IT infrastructure. Developed
                  strong problem-solving skills and technical knowledge through practical projects and coursework
                  covering computer technology, professional writing, and editorial practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline" className="flex items-center gap-1 w-fit">
                      <Calendar className="h-3 w-3" />
                      <span>{cert.date}</span>
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
