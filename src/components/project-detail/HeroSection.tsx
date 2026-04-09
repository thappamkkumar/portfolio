"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {  ExternalLink, Github } from "lucide-react";

interface HeroSectionProps {
  projectName: string;
  headline: string;
  description: string;
  techStack: string[];
  image: string;
  liveDemoUrl?: string;
  codeUrl?: string;
  scrollToId?: string;
}

/* Animation System */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function HeroSection({
  projectName,
  headline,
  description,
  techStack,
  image,
  liveDemoUrl,
  codeUrl,
  
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="w-full max-w-7xl mx-auto px-6 py-16 min-h-[95vh] flex flex-col lg:flex-row items-center justify-between gap-12 bg-zinc-950 overflow-hidden"
    >
      {/* LEFT SIDE */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex-1    text-left"
      >
        {/* Intro Label */}
        <motion.h3
          variants={fadeUp}
          className="text-xl md:text-3xl font-extrabold text-zinc-300 flex items-center  justify-start gap-4"
        >
          <span className="w-12 border-b-2 border-red-700"></span>
          Introducing
        </motion.h3>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-extrabold text-zinc-100 mt-3 leading-tight"
        >
          {projectName}
        </motion.h1>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="mt-4 text-xl md:text-3xl font-medium text-red-700"
        >
          {headline}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-zinc-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0"
        >
          {description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap  justify-start gap-2"
        >
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 bg-zinc-800 text-zinc-200 rounded-full border border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap sm:flex-nowrap gap-4 justify-center lg:justify-start"
        >
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-auto flex justify-center items-center gap-2 bg-red-700 text-white rounded-md hover:bg-red-900 transition"
            >
              <ExternalLink size={18} /> <strong>Live Demo</strong>
            </a>
          )}

          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-auto flex justify-center items-center gap-2 border border-red-700 text-red-700 rounded-md hover:bg-red-700/10 transition"
            >
              <Github size={18} /> <strong>View Code</strong>
            </a>
          )}
        </motion.div>

         
      </motion.div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 w-full"
      >
        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={`${projectName} project preview`}
            fill
            priority
            className="object-contain "
          />
        </div>
      </motion.div>
    </section>
  );
}
