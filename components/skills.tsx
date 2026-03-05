"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Wrench, TrendingUp } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      name: "Backend & Frameworks",
      icon: Database,
      skills: [
        { name: "PERN Stack", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "SQL", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "Git/GitHub", level: 90 },
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS (EC2, S3)", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Automation Scripts", level: 80 },
        { name: "Networking Fundamentals", level: 70 },
      ],
    },
    {
      name: "Databases & Support",
      icon: Wrench,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "System Administration", level: 88 },
        { name: "IT Support", level: 92 },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ top: "10%", left: "10%" }}
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
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">Technical Expertise</p>
          <h2 className="text-4xl font-bold mt-2 mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning frontend, backend, cloud technologies, and system administration
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                variants={item}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills overview stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Technologies", value: "13+" },
            { label: "Years Experience", value: "3+" },
            { label: "Projects", value: "50+" },
            { label: "Certifications", value: "8" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg border border-border text-center hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
