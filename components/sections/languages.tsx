"use client";
import { motion } from "framer-motion";
import { languages } from "@/lib/data";

export function Languages() {
  return (
    <section className="scroll-mt-16 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Languages</h2>
          <p className="text-muted-foreground text-lg max-w-[60ch]">
            Languages I speak and communicate in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card/80 transition-colors"
            >
              <div className="flex items-center gap-3">
                {language.flag && (
                  <span className="text-2xl">{language.flag}</span>
                )}
                <div>
                  <h3 className="font-semibold">{language.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {language.proficiency}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
