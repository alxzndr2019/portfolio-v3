"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="scroll-mt-16 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-muted-foreground text-lg max-w-[60ch]">
            My academic background and achievements.
          </p>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative border-l border-border pl-8 pb-8 last:pb-0"
            >
              <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-border bg-background" />
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <Badge
                      variant="outline"
                      className="bg-purple-500/10 text-purple-300 border-purple-800/50 w-fit"
                    >
                      {edu.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mt-2">{edu.school}</p>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  {edu.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-400 text-lg">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {edu.achievements && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium uppercase text-muted-foreground">
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <span className="text-purple-400">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
