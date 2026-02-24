"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Wrench, TrendingUp } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 95 },
        { name: "Node.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ],
    },
    {
      name: "Backend & Frameworks",
      icon: <Wrench className="w-8 h-8" />,
      skills: [
        { name: "PERN Stack", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "SQL", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "Git/GitHub", level: 90 }
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "AWS (EC2, S3)", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "Automation Scripts", level: 80 },
        { name: "Networking Fundamentals", level: 70 }
      ],
    },
    {
      name: "Databases & Support",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "System Administration", level: 88 },
        { name: "IT Support", level: 92 }
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
    <section id="skills" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full filter blur-3xl"></div>
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
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive skill set spanning frontend, backend, cloud technologies, and system administration
          </p>
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
              className="group"
            >
              <div className="h-full glass-effect rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border/50">
                <div className="flex flex-col items-center text-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary mb-4 group-hover:shadow-lg transition-shadow"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold gradient-text">{category.name}</h3>
                </div>
                
                <div className="w-full space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * skillIndex }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + 0.1 * skillIndex }}
                          className="text-xs font-bold gradient-text"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.3 + 0.1 * skillIndex,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills overview stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Technologies", value: "13+" },
            { label: "Years Experience", value: "3+" },
            { label: "Projects", value: "50+" },
            { label: "Certifications", value: "8" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="text-center p-6 rounded-2xl glass-effect border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
