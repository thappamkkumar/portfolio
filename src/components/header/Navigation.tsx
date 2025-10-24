'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { navItems } from './navItems';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96], // cubic bezier instead of string
    },
  }),
};


interface NavProps {
  currentHash: string;
  onLinkClick?: () => void; // optional callback
}


const Navigation: React.FC<NavProps> = ({ currentHash, onLinkClick }) => {
	
  return (
    <nav className="flex flex-col md:flex-row w-full items-center gap-4 md:gap-0 md:justify-end">
			 
      {navItems.map(({ name, href }, i) => (
        <motion.a
          key={name}
          href={href}
					onClick={() => onLinkClick?.()}
          custom={i}
          variants={itemVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					
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
