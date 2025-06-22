'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';

const titles = ['Full Stack Developer', 'Web Developer','UI/UX Designer', 'Frontend Developer', 'Tech Enthusiast','Backend Developer']; 

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function HeroText() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

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
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <motion.div
      className="w-auto inline-block  "
      variants={container}
      initial="hidden"
      animate="visible"
    >
			<motion.h3
        variants={fadeUp}
        className="text-2xl md:text-4xl font-extrabold text-zinc-200 leading-tight tracking-tight flex items-center gap-4"
      >
				<span className="w-[3rem] border border-b-2 border-zinc-100"></span><span>Hello world</span>
			</motion.h3>
      <motion.h1
        variants={fadeUp}
        className="text-4xl md:text-6xl font-extrabold text-zinc-100 leading-tight tracking-tight"
      >
         I'm <span className="text-white">Mukesh Kumar</span>
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        className="mt-4 text-2xl md:text-3xl font-medium text-red-800/80 min-h-[2.5rem]"
      >
        <span>{text}</span>
        <span className="border-r-2 border-red-800 animate-pulse ml-1" />
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mt-6 text-zinc-400 text-base md:text-lg"
      >
        I specialize in building seamless digital experiences with clean code and modern design.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex  flex-wrap sm:flex-nowrap   gap-4"
      >
        <a
          href="#contact"
          className="px-6  py-3 w-full flex justify-center items-center gap-2  bg-red-800 text-white   hover:bg-red-900 transition"
        >
          <Mail /> <strong>GET IN TOUCH</strong>
        </a>
        <a
           href="/resume/mukesh_kumar_resume.pdf"
					download
          rel="noopener noreferrer"
          className="px-6  py-3 w-full flex justify-center items-center gap-2  border border-red-800 text-red-800  hover:bg-red-900/10 transition"
        >
          <Download /> <strong>GET MY RESUME </strong>
        </a>
      </motion.div>
    </motion.div>
  );
}
