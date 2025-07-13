'use client';

import { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import TechFilter from './TechFilter';
import projectList from './projectList';
import allTech from './allTech';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {  duration: 0.6, ease: 'easeOut' },
  },
};

export default function Projects() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

   

  const filteredProjects = useMemo(() => {
    if (!activeTech) return projectList;
    return projectList.filter((p) => p.tech.includes(activeTech));
  }, [activeTech]);

  const displayedProjects = useMemo(() => {
    return showAll ? filteredProjects : filteredProjects.slice(0, 4);
  }, [filteredProjects, showAll]);

  const handleToggleShow = () => {
    setShowAll((prev) => {
      const next = !prev;
      if (!next && gridRef.current) {
        // Scroll to top of grid on "Show Less"
        gridRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      return next;
    });
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 md:px-0  ">
      <motion.h2
        className="text-center text-4xl md:text-5xl font-bold text-zinc-100 mb-16"
        variants={fadeUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
      >
				My <span className="text-red-800">Projects</span> 
      </motion.h2>

      <TechFilter
        allTech={allTech}
        activeTech={activeTech}
        setActiveTech={setActiveTech}
      />

      <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
        {displayedProjects.map((project, i) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
									
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {(filteredProjects.length > 4) && (
        <motion.div className="text-center mt-10"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
          <button
            onClick={handleToggleShow}
            className="px-6 py-2 bg-red-800 text-white rounded-lg cursor-pointer  hover:bg-red-900 transition"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </motion.div>
      )}
    </section>
  );
}
