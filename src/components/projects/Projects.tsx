'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const PROJECTS_PER_PAGE = 4;

export default function Projects() {
  const [activeTech, setActiveTech] = useState<string | null>('All');
  const [currentPage, setCurrentPage] = useState(0);
  const hasRestoredState = useRef(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Restore state from sessionStorage only once
  useEffect(() => {
    if (!hasRestoredState.current) {
      const savedPage = sessionStorage.getItem('currentPage');
      const savedTech = sessionStorage.getItem('activeTech');
      if (savedPage !== null) {
        setCurrentPage(Number(savedPage));
      }
      if (savedTech !== null) {
        setActiveTech(savedTech);
      }
      hasRestoredState.current = true;
    }
  }, []);

  // Save state to sessionStorage
  useEffect(() => {
    sessionStorage.setItem('currentPage', String(currentPage));
  }, [currentPage]);

  useEffect(() => {
    sessionStorage.setItem('activeTech', activeTech ?? '');
  }, [activeTech]);

  // Reset page to 0 if activeTech changes AFTER initial restoration
  const previousTech = useRef<string | null>(null);
  useEffect(() => {
    if (hasRestoredState.current && previousTech.current !== null && activeTech !== previousTech.current) {
      setCurrentPage(0);
    }
    previousTech.current = activeTech;
  }, [activeTech]);






  const filteredProjects = useMemo(() => {
    if (!activeTech || activeTech === 'All') return projectList;
    return projectList.filter((p) => p.tech.includes(activeTech));
  }, [activeTech]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    const start = currentPage * PROJECTS_PER_PAGE;
    return filteredProjects.slice(start, start + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleScrollToGrid = () => {
    const el = document.getElementById('projects');
    if (el) {
      window.scrollBy(0, -50);
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 10);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      handleScrollToGrid();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      handleScrollToGrid();
    }
  };

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 md:px-0">
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

      <div ref={gridRef} className="grid md:grid-cols-2 gap-8 min-h-[400px]">
        {paginatedProjects.map((project) => (
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

      {totalPages > 1 && (
        <motion.div
          className="flex justify-center items-center gap-4 mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="px-6 py-2 bg-zinc-800 text-white rounded-lg disabled:opacity-50 cursor-pointer hover:bg-zinc-700 transition"
          >
            Prev
          </button>
          <span className="text-zinc-300">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage >= totalPages - 1}
            className="px-6 py-2 bg-red-800 text-white rounded-lg disabled:opacity-50 cursor-pointer hover:bg-red-900 transition"
          >
            Next
          </button>
        </motion.div>
      )}
    </section>
  );
}
