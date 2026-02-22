'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export default function HeroText() {
  return (
    <motion.div
      className="w-auto inline-block"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Top Line */}
      <motion.h3
        variants={fadeUp}
        className="text-md md:text-xl font-medium text-red-600 tracking-wide  "
      >
        Full Stack Developer
      </motion.h3>

      {/* Name */}
      <motion.h1
        variants={fadeUp}
        className="mt-3 text-3xl md:text-6xl font-extrabold text-zinc-100 leading-tight tracking-tight"
      >
        Mukesh Kumar
      </motion.h1>

      {/* Value Proposition */}
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-xl md:text-2xl font-medium text-zinc-300 max-w-2xl"
      >
         Building scalable, production-ready web applications with React, Next.js & Laravel.
      </motion.h2>

      {/* Supporting Line */}
      <motion.p
        variants={fadeUp}
        className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl"
      >
        Focused on performance, clean architecture, and maintainable code.
				<br/>
        Open to remote opportunities worldwide.
      </motion.p>

      {/* Buttons */}
      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-wrap sm:flex-nowrap gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 w-full sm:w-auto flex justify-center items-center gap-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
        >
          <strong>View Projects</strong>
        </a>
				 <a
          href="/resume/mukesh_kumar_resume.pdf"
          download
          rel="noopener noreferrer"
          className="px-6 py-3 w-full sm:w-auto flex justify-center items-center gap-2 border border-red-700 text-red-700 rounded-md hover:bg-red-700/10 transition"
				
        >
          <Download size={18} />
          <strong>Download Resume</strong>
        </a>
				 <a
          href="#contact"
        	className="px-6 py-3 w-full sm:w-auto flex justify-center items-center gap-2 text-zinc-300 hover:text-white transition"
        >
          <Mail size={18} />
          <strong>Contact Me</strong>
        </a>
				
       

       
      </motion.div>
    </motion.div>
  );
}