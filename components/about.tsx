"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg leading-relaxed mb-6 font-semibold text-primary">
                Innovative and results-driven software developer, dedicated to delivering high-quality technical
                solutions and serving as a reliable point of reference for best practices in the tech industry.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate Software Engineer with expertise in the PERN stack (PostgreSQL, Express, React,
                Node.js) and strong foundations in cloud technologies like AWS and Firebase. My background in IT support
                and system administration gives me a holistic understanding of technology ecosystems, enabling me to
                build robust applications that balance user experience with architectural excellence.
              </p>
              <p className="text-lg leading-relaxed">
                I'm particularly driven by health tech, support systems, and community-driven tools. My goal is to
                leverage technology to solve real-world problems and improve people's lives, especially in my community
                in Nairobi. I'm a quick learner and adaptable professional with strong communication skills and a
                commitment to continuous growth in software engineering.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
