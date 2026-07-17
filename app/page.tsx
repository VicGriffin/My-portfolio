import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import AiSection from "@/components/ai-section"
import DevopsSection from "@/components/devops-section"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import InteractiveCanvas from "@/components/interactive-canvas"
import CinematicLoader from "@/components/cinematic-loader"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CinematicLoader />
      <InteractiveCanvas />
      <Hero />
      <About />
      <Skills />
      <AiSection />
      <DevopsSection />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
