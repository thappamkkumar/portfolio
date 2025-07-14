 
"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Github } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface HeroTextProps {
  title: string;
  text: string;
  tagline: string;
  liveDemoUrl?: string;
  codeUrl?: string;
  scrollToId: string;
}

export default function HeroText({
  title,
  text,
  tagline,
  liveDemoUrl,
  codeUrl,
  scrollToId,
}: HeroTextProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex-1"
    >
      <motion.h3
        variants={fadeUp}
        className="text-2xl md:text-4xl font-extrabold text-zinc-200 leading-tight tracking-tight flex items-center gap-4"
      >
        <span className="w-[3rem] border border-b-2 border-zinc-100"></span>
        <span>Introducing</span>
      </motion.h3>

      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-6xl font-extrabold text-zinc-100 leading-tight tracking-tight mt-2"
      >
        {title}
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        className="mt-4 text-2xl md:text-3xl font-medium text-red-700 min-h-[2.5rem]"
      >
        <span>{text}</span>
        <span className="border-r-2 border-red-700 animate-pulse ml-1" />
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-zinc-400 text-base md:text-lg"
      >
        {tagline}
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex  flex-wrap sm:flex-nowrap   gap-4"
      >
        {liveDemoUrl && (
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6  py-3 w-full flex justify-center items-center gap-2  bg-red-700 text-white rounded-md   hover:bg-red-900 transition"
          >
            <ExternalLink /> <strong>Live Demo</strong>
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6  py-3 w-full flex justify-center items-center gap-2  border border-red-700 text-red-700 rounded-md  hover:bg-red-700/10 transition"
          >
            <Github /> <strong>View Code</strong>
          </a>
        )}
      </motion.div>
			<div className="w-full flex justify-center   pt-10">
					<motion.a
						href={scrollToId}
						variants={fadeUp}
						initial="hidden"
						animate="visible"
						className="  text-zoinc-400 hover:text-white transition-all animate-bounce"
					>
						<ArrowDown size={28} />
					</motion.a>
				</div>
       
    </motion.div>
  );
}
