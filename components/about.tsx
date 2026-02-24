"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Code, Heart, Target } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <User className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Get to know me</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-full glass-effect border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-start gap-3">
                      <Code className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Innovative and results-driven software developer, dedicated to delivering high-quality technical
                          solutions and serving as a reliable point of reference for best practices in the tech industry.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-start gap-3">
                      <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Expertise & Focus</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          I'm a passionate Software Engineer with expertise in the PERN stack (PostgreSQL, Express, React,
                          Node.js) and strong foundations in cloud technologies like AWS and Firebase. My background in IT support
                          and system administration gives me a holistic understanding of technology ecosystems.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-start gap-3">
                      <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Passion & Purpose</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          I'm particularly driven by health tech, support systems, and community-driven tools. My goal is to
                          leverage technology to solve real-world problems and improve people's lives, especially in my community
                          in Nairobi. I'm a quick learner and adaptable professional with strong communication skills.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side stats card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="glass-effect border-none shadow-xl">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-semibold gradient-text">Quick Stats</h3>
                
                <div className="space-y-4">
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="text-3xl font-bold text-primary mb-1">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-purple-500/5 border border-purple-500/10">
                    <div className="text-3xl font-bold text-purple-600 mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-pink-500/5 border border-pink-500/10">
                    <div className="text-3xl font-bold text-pink-600 mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-none shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">Core Values</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="px-3 py-1">Innovation</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Quality</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Collaboration</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Continuous Learning</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Problem Solving</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Community Impact</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
