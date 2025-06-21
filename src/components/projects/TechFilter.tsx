'use client';

import { motion } from 'framer-motion';


const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};


export default function TechFilter({
  allTech,
  activeTech,
  setActiveTech,
}: {
  allTech: string[];
  activeTech: string | null;
  setActiveTech: (tech: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12  ">
      <motion.button
        onClick={() => setActiveTech(null)}
        className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
          activeTech === null
            ? 'bg-red-800 text-white border-red-800'
            : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-red-800 hover:text-red-500'
        }`}
				
				variants={fadeLeft}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				custom={0}
      >
        All
      </motion.button>
      {allTech.map((tech, i) => (
        <motion.button
          key={tech}
          onClick={() => setActiveTech(tech)}
          className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
            activeTech === tech
              ? 'bg-red-800 text-white border-red-800'
              : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-red-800 hover:text-red-500'
          }`}
					variants={fadeLeft}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					custom={i+1}
        >
          {tech}
        </motion.button>
      ))}
    </div>
  );
}
