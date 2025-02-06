"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-[65ch] leading-relaxed">
            I&apos;m a passionate Full Stack Developer with a strong focus on
            building scalable web applications and implementing AI solutions.
            With {new Date().getFullYear() - 2020}+ years of experience,
            I&apos;ve developed a deep understanding of modern web technologies
            and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What I Do</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Build scalable full-stack applications with modern technologies
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Implement AI/ML solutions to solve complex problems
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Design and optimize database architectures
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Create responsive and accessible user interfaces
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Current Focus</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Exploring Large Language Models and their applications
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Building with Next.js 14 App Router and Server Components
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Implementing real-time features with WebSockets
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Cloud infrastructure and DevOps practices
              </li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <Button className="text-black" size="lg" variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
