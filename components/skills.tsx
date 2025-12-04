"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming",
      icon: <Code className="w-8 h-8" />,
      skills: ["JavaScript", "React", "Node.js", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      name: "Backend & Frameworks",
      icon: <Wrench className="w-8 h-8" />,
      skills: ["PERN Stack", "Express.js", "SQL", "PostgreSQL", "Git/GitHub"],
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS (EC2, S3)", "Firebase", "Automation Scripts", "Networking Fundamentals"],
    },
    {
      name: "Databases & Support",
      icon: <Database className="w-8 h-8" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "System Administration", "IT Support"],
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
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="w-full space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{
                            width: `${Math.floor(70 + Math.random() * 30)}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
