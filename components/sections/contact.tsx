"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-[60ch]">
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll get back to you!
          </p>
        </div>

        <div className="space-y-8">
          {/* Primary Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="group" asChild>
              <a href="mailto:ohiozepmiunu@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Say Hello
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="outline" className="group text-black" asChild>
              <a
                href="https://github.com/alxzndr2019"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
                <ArrowUpRight className="ml-2 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button variant="outline" className="group text-black" asChild>
              <a
                href="https://www.linkedin.com/in/alex-omiunu-2b2968169"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="ml-2 h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>

          {/* Additional Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border border-border rounded-lg p-6 space-y-4"
          >
            <h3 className="text-lg font-semibold">Availability</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Open to full-time positions and freelance projects
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Available for technical consultations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg">▹</span>
                Interested in collaborating on open-source projects
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
