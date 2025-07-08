"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Github } from "lucide-react";

interface HeroSectionProps {
  title: string;
  tagline: string;
  images: string[];
  liveDemoUrl?: string;
  codeUrl?: string;
  scrollToId?: string;
}

const titles = [
  "Multi-vendor Marketplace",
  "Built with Laravel + MySQL",
  "Admin, Vendor & Customer Roles",
  "Bootstrap, JS, Auth, Dashboard",
];

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

export default function HeroSection({
  title,
  tagline,
  images,
  liveDemoUrl,
  codeUrl,
  scrollToId = "project-content",
}: HeroSectionProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Typing animation
  useEffect(() => {
    if (index === titles.length) setIndex(0);
    const currentTitle = titles[index];

    if (subIndex === currentTitle.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(currentTitle.substring(0, subIndex));
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section className="relative w-full h-screen bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 h-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
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
            className="mt-8 flex flex-wrap sm:flex-nowrap gap-4"
          >
            {liveDemoUrl && (
              <a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 w-full sm:w-auto flex justify-center items-center gap-2 bg-red-800 text-white hover:bg-red-900 transition"
              >
                <ExternalLink /> <strong>Live Demo</strong>
              </a>
            )}
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 w-full sm:w-auto flex justify-center items-center gap-2 border border-red-800 text-red-800 hover:bg-red-900/10 transition"
              >
                <Github /> <strong>View Code</strong>
              </a>
            )}
          </motion.div>

          <motion.button
            variants={fadeUp}
            onClick={() => {
              const el = document.getElementById(scrollToId);
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-6 text-white hover:text-gray-300 transition flex items-center gap-2 mx-auto"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
            
          </motion.button>
        </motion.div>

        {/* Right Side */}
        <div className="flex-1 relative group">
          <div className="rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition duration-500">
            <img
              src={images[currentImage]}
              alt="Hero Screenshot"
              className="w-full h-auto object-cover border-4 border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
