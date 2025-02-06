"use client";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-[60ch]">
            A collection of projects that showcase my expertise in building
            modern web applications.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((project, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              key={project.title}
              className="group"
            >
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
                {/* Project Image */}
                <div className="lg:col-span-3">
                  {project.image && (
                    <div className="relative aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-500 rounded-xl border border-border/50 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-purple-500/10 text-purple-300 border-purple-800/50"
                        >
                          {project.architecture}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium uppercase text-muted-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium uppercase text-muted-foreground">
                      Key Features
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-2 text-muted-foreground marker:text-purple-400">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group text-black"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="group " asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="w-4 h-4 mr-2" />
                          Live Demo
                          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
