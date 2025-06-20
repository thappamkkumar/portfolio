'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { navItems } from './navItems';

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
  }),
};

interface NavProps {
  currentHash: string;
}

const Navigation: React.FC<NavProps> = ({ currentHash }) => {
	
  return (
    <nav className="flex flex-col md:flex-row w-full items-center gap-4 md:gap-0 md:justify-end">
			 
      {navItems.map(({ name, href }, i) => (
        <motion.a
          key={name}
          href={href}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className={`text-center w-full md:w-auto  px-4 py-2  text-sm md:text-base transition-all duration-300 ${
            currentHash === href
              ? '  text-zinc-100 font-bold'
              : 'text-zinc-400     hover:text-zinc-100 transition-color duration-300'
          }`}
        >
          {name}
        </motion.a>
      ))}
    </nav>
  );
};

export default Navigation;
