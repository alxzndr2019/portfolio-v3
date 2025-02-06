"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-[60ch]">
            My professional journey in software development.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative border-l border-border pl-8 pb-8 last:pb-0"
            >
              <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-border bg-background" />
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-semibold">
                      {experience.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className="bg-purple-500/10 text-purple-300 border-purple-800/50"
                    >
                      {experience.period}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground">
                      {experience.company}
                    </p>
                    {experience.companyUrl && (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                      >
                        <ArrowUpRight className="w-3 h-3" />
                        <span className="sr-only">
                          Visit {experience.company} website
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-400 text-lg">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
