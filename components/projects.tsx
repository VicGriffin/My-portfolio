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
 image: zaphToursImg,
 tags: ["React", "Travel", "Next.js", "Tourism"],
 liveLink: null,
 githubLink: null,
 showOnlyImage: true,
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
 <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 relative overflow-hidden">
 {/* Background decoration */}
 <div className="absolute inset-0 -z-10">
 <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
 <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
 </div>

 <div className="max-w-7xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: -20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="text-center mb-12"
 >
 <div className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
 <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
 Featured Projects
 </span>
 </div>
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
 My Projects
 </h2>
 <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
 Here are some of the projects I've worked on. Each project represents a unique challenge and learning
 experience, focusing on real-world solutions.
 </p>
 </motion.div>

 <motion.div
 variants={container}
 initial="hidden"
 whileInView="show"
 viewport={{ once: true }}
 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
 >
 {projects.map((project, index) => (
 <motion.div key={index} variants={item}>
 <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:border-gray-700">
 {project.image ? (
 <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
 <Image
 src={project.image}
 alt={project.title}
 fill
 className="object-cover w-full h-full"
 />
 {project.featured && (
 <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
 <Star size={14} />
 Featured
 </div>
 )}
 </div>
 ) : project.title === "Coming Soon" ? (
 <div className="flex items-center justify-center w-full h-48 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-800">
 <div className="text-center">
 <Rocket className="w-12 h-12 mx-auto mb-2 text-blue-400" />
 <p className="text-white text-sm font-medium">
 BUILDING
 </p>
 <p className="text-gray-400 text-xs">Something amazing is coming </p>
 </div>
 </div>
 ) : (
 <div className="flex items-center justify-center w-full h-48 bg-gray-200 dark:bg-gray-800">
 No Image 
 </div>
 )}

 {!project.showOnlyImage && (
 <>
 <CardHeader className="flex-grow">
 <CardTitle className="text-xl">{project.title}</CardTitle>
 <CardDescription className="mt-2">
 {project.description}
 </CardDescription>
 </CardHeader>

 <CardContent className="space-y-4">
 <div className="flex flex-wrap gap-2">
 {project.tags.map((tag, tagIndex) => (
 <Badge key={tagIndex} variant="secondary">
 {tag}
 </Badge>
 ))}
 </div>
 </CardContent>

 <CardFooter className="flex gap-3 pt-0">
 {project.liveLink && (
 <Link href={project.liveLink} target="_blank" className="flex-1">
 <Button
 variant="default"
 size="sm"
 className="w-full"
 >
 <ExternalLink size={16} className="mr-2" />
 Live Demo
 </Button>
 </Link>
 )}
 {project.githubLink && project.githubLink !== "#" && (
 <Link href={project.githubLink} target="_blank" className="flex-1">
 <Button
 variant="outline"
 size="sm"
 className="w-full"
 >
 <Github size={16} className="mr-2" />
 Code
 </Button>
 </Link>
 )}
 </CardFooter>
 </>
 )}
 </Card>
 </motion.div>
 ))}
 </motion.div>

 {/* Projects overview stats */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="grid grid-cols-2 md:grid-cols-4 gap-4"
 >
 {[
 { label: "Total Projects", value: "7+" },
 { label: "Live Deployments", value: "6" },
 { label: "Technologies", value: "15+" },
 { label: "Industries", value: "5" }
 ].map((stat, index) => (
 <Card key={index} className="text-center dark:border-gray-700">
 <CardContent className="pt-6">
 <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
 <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
 </CardContent>
 </Card>
 ))}
 </motion.div>
 </div>
 </section>
 );
}
