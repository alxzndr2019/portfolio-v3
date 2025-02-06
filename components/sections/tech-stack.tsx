"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useState, useEffect } from "react";

const technologies = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Claude", logo: "/logos/claude.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  // Add more technologies as needed
];

// Duplicate the array to create a seamless loop
const duplicatedTechnologies = [...technologies, ...technologies];

// Memoize the TechStack component
export const TechStack = memo(function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on server-side
  }

  return (
    <section className="py-3 overflow-hidden mt-9">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.ul
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-12 md:gap-16 shrink-0"
        >
          {duplicatedTechnologies.map((tech, i) => (
            <li
              key={`${tech.name}-${i}`}
              className="w-16 h-16 md:w-20 md:h-20 relative grayscale hover:grayscale-0 transition-all duration-200 hover:scale-110"
            >
              <div className="group relative flex items-center justify-center w-full h-full">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  priority={i < 4} // Prioritize loading first 4 images
                  className="object-contain p-2"
                />
                <span className="sr-only">{tech.name}</span>
                {/* Tooltip */}
                <div className="absolute -bottom-8 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                  {tech.name}
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
});
