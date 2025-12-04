"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import darubiniImg from "../src/darubini.jpg"
import universeImg from "../src/universe.jpg"

export default function Projects() {
  const projects = [
    {
      title: "Darubini ya Afya",
      description:
        "A comprehensive health platform for community wellness in Kenya, enhancing community health through digital solutions and health information access.",
      image: darubiniImg,
      tags: ["React", "Node.js", "MongoDB", "Express", "Health Tech"],
      liveLink: "https://darubini-improved.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Universe Social Media",
      description:
        "The ultimate social platform designed exclusively for university students to connect, explore, and thrive. Build networks, join communities, and discover opportunities.",
      image: universeImg,
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Social Platform"],
      liveLink: "https://v0-university-frontend-development.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Glimz E-Commerce",
      description: "Online store for watches, shades, and candles with a modern UI and seamless checkout experience.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Stripe", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Coming Soon",
      description: "An exciting new project in development. Stay tuned for updates!",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Future", "Project"],
      liveLink: null,
      githubLink: null,
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
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience, focusing on real-world solutions.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.liveLink && (
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="gap-1">
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {project.githubLink && project.githubLink !== "#" && (
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Github size={16} />
                        Code
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
