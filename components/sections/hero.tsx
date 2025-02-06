"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { TechStack } from "./tech-stack";

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative">
      {/* Background gradient */}
      {/* <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-background to-transparent" />
      </div> */}

      <div className="space-y-12">
        {/* Main heading */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              Building Digital
              <span className="block mt-1 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-[45ch]"
          >
            Full-stack engineer crafting elegant solutions with modern
            technologies and pixel-perfect precision.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <Button asChild>
            <a href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <TechStack />
        {/* Floating Elements */}
        <div className="absolute -z-10 blur-3xl opacity-20">
          <div className="absolute top-[20%] -left-[10%] h-72 w-72 rounded-full bg-purple-500/30" />
          <div className="absolute bottom-[20%] -right-[10%] h-72 w-72 rounded-full bg-blue-500/30" />
        </div>
      </div>
    </section>
  );
}
