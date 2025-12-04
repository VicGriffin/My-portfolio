"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-8 border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Software Developer Intern
                    </CardTitle>
                    <CardDescription className="text-base mt-1">Teach 2 Give</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>3 months</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Contributions:</h4>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Provided technical support and troubleshooting for internal users</li>
                  <li>Assisted in developing, configuring, and maintaining software applications</li>
                  <li>Monitored system performance and reported issues to the development team</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Data Science
                    </CardTitle>
                    <CardDescription className="text-base mt-1">Clinton Health Access Initiative</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>2025</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Contributions:</h4>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Participated in gathering, recording, and analyzing data to generate actionable insights</li>
                  <li>Contributed to key projects by providing data-driven analysis and insights</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
