"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import Link from "next/link"
import { GitHubRepo, getRelativeTime } from "@/lib/github"

interface GitHubProjectsProps {
  repos: GitHubRepo[]
}

export default function GitHubProjects({ repos }: GitHubProjectsProps) {
  const [displayRepos, setDisplayRepos] = useState<GitHubRepo[]>([])

  useEffect(() => {
    // Filter out forks and sort by stars and recent updates
    const filtered = repos
      .filter((repo) => !repo.name.includes("test") && repo.description) // Basic filtering
      .slice(0, 6) // Show top 6 repos
    setDisplayRepos(filtered)
  }, [repos])

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

  if (displayRepos.length === 0) {
    return null
  }

  return (
    <section id="github-projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Recent GitHub Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work and contributions on GitHub. These are my most recently updated public repositories.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayRepos.map((repo) => (
            <motion.div key={repo.id} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Github className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {repo.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Updated {getRelativeTime(repo.updated_at)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {repo.description || "No description provided"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {repo.language && (
                      <Badge variant="secondary" className="text-xs">
                        {repo.language}
                      </Badge>
                    )}
                    {repo.topics.slice(0, 2).map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="px-6 pb-6 pt-0 flex gap-2">
                  <Link href={repo.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full gap-1"
                    >
                      <ExternalLink size={16} />
                      Repository
                    </Button>
                  </Link>
                  {repo.homepage && (
                    <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1"
                      >
                        <ExternalLink size={16} />
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
