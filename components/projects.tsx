"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import darubiniImg from "../src/darubini.jpg";
import universeImg from "../src/universe.jpg";
import mastoreImg from "../src/mastore-arise-and-shine-school.jpg";
import tangoGardensImg from "../src/tango gardens.jpg";
import urbanHavenImg from "../src/urban-haven-apartments.jpg";
import vitaAiImg from "../src/vita-ai.jpg";
import zaphToursImg from "../src/zaph-tours.jpg";

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
      featured: true,
    },
    {
      title: "Universe Social Media",
      description:
        "The ultimate social platform designed exclusively for university students to connect, explore, and thrive. Build networks, join communities, and discover opportunities.",
      image: universeImg,
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Social Platform"],
      liveLink: "https://v0-university-frontend-development.vercel.app/",
      githubLink: "#",
      featured: true,
    },
    {
      title: "Arise and Shine School Store",
      description:
        "Designed and developed a clean, user-friendly e-commerce platform to enable a school community to sell branded merchandise online, streamline purchases, and increase revenue opportunities.",
      image: mastoreImg,
      tags: ["React", "E-Commerce", "Next.js", "Tailwind CSS"],
      liveLink: "https://mastore-arise-and-shine-school.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Tango Gardens Website",
      description:
        "Built a visually appealing business website to showcase services, attract new clients, and establish a strong digital presence for a landscaping/gardens brand.",
      image: tangoGardensImg,
      tags: ["React", "Next.js", "Business Website", "Tailwind CSS"],
      liveLink: "https://tango-garderns.vercel.app/",
      githubLink: "#",
    },
        {
      title: "Urban Haven Apartments",
      description:
        "Developed a modern real estate showcase website to highlight apartment features, amenities, and contact information — increasing inquiries from potential tenants.",
      image: urbanHavenImg,
      tags: ["React", "Real Estate", "Next.js", "Tailwind CSS"],
      liveLink: "https://urban-haven-apartments-one.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Zaph Tours",
      description:
        "Created a dynamic travel website to promote tour packages, showcase destinations, and simplify customer engagement and bookings.",
      image: zaphToursImg,
      tags: ["React", "Travel", "Next.js", "Tourism"],
      liveLink: "https://zaph-tours-nine.vercel.app/",
      githubLink: "#",
    },
    {
      title: "VITA AI",
      description:
        "Designed a functional AI concept platform demonstrating an emergency-focused virtual assistant, integrating innovation, accessibility, and real-world problem solving.",
      image: vitaAiImg,
      tags: ["React", "AI", "Virtual Assistant", "Next.js"],
      liveLink: "https://vita-ai-tau.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Coming Soon",
      description: "An exciting new project in development. Stay tuned for updates!",
      image: null,
      tags: ["Future", "Project"],
      liveLink: null,
      githubLink: null,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
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
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Featured Projects</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
            <motion.div key={index} variants={item} className="group">
              <Card className={`h-full overflow-hidden transition-all duration-300 flex flex-col ${
                project.title === "Coming Soon" 
                  ? "bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/30 hover:from-primary/20 hover:to-purple-500/20" 
                  : "glass-effect border-border/50 hover:shadow-2xl hover:-translate-y-2"
              } ${project.featured ? "ring-2 ring-primary/20" : ""}`}>
                {project.image ? (
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-4 right-4"
                      >
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                          <Star className="w-3 h-3" />
                          Featured
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : project.title === "Coming Soon" ? (
                  <div className="h-56 flex items-center justify-center bg-gradient-to-br from-primary/5 to-purple-500/5">
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        className="text-5xl font-bold gradient-text mb-3"
                      >
                        BUILDING
                      </motion.div>
                      <div className="text-sm text-muted-foreground">Something amazing is coming</div>
                    </div>
                  </div>
                ) : (
                  <div className="h-56 bg-muted flex items-center justify-center">
                    <div className="text-muted-foreground">No Image</div>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className={`text-xl ${
                    project.title === "Coming Soon" ? "gradient-text" : ""
                  }`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant={project.title === "Coming Soon" ? "default" : "secondary"}
                        className={`text-xs ${
                          project.title === "Coming Soon" 
                            ? "bg-primary/20 text-primary border-primary/30" 
                            : "hover:scale-105 transition-transform"
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3 pt-0">
                  {project.liveLink && (
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button 
                        variant={project.title === "Coming Soon" ? "outline" : "default"} 
                        size="sm" 
                        className="rounded-full gap-1 hover:scale-105 transition-transform"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                  {project.githubLink && project.githubLink !== "#" && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="rounded-full gap-1 hover:scale-105 transition-transform">
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

        {/* Projects overview stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Total Projects", value: "8+" },
            { label: "Live Deployments", value: "7" },
            { label: "Technologies", value: "15+" },
            { label: "Industries", value: "6" }
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
  );
}
