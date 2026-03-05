"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Code, Heart, Target } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ top: "50%", right: "10%" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Get to know me</p>
          <h2 className="text-4xl font-bold mt-2">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Technical Excellence
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Innovative and results-driven software developer, dedicated to delivering high-quality
                    technical solutions and serving as a reliable point of reference for best practices in
                    the tech industry.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Expertise & Focus
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate Software Engineer with expertise in the PERN stack (PostgreSQL,
                    Express, React, Node.js) and strong foundations in cloud technologies like AWS and
                    Firebase. My background in IT support and system administration gives me a holistic
                    understanding of technology ecosystems.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Passion & Purpose
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm particularly driven by health tech, support systems, and community-driven tools.
                    My goal is to leverage technology to solve real-world problems and improve people's
                    lives, especially in my community in Nairobi. I'm a quick learner and adaptable
                    professional with strong communication skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="sticky top-24 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Quick Stats
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-sm font-semibold mb-3">Core Values</p>
                  <div className="flex flex-wrap gap-2">
                    {["Innovation", "Quality", "Collaboration", "Continuous Learning", "Problem Solving", "Community Impact"].map(
                      (value) => (
                        <Badge key={value} variant="secondary">
                          {value}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
