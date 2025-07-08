'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';  
import Logo from './Logo';

 
const fadeRight = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const ProjectsHeader: React.FC = () => {
  const router = useRouter();

  return (
    <motion.header 
      className="sticky z-50 w-full   top-0  px-4 py-3 overflow-auto  backdrop-blur-md flex justify-between items-center    "
    >
      <motion.button
        onClick={() => router.back()}
        className="text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors duration-300"
        aria-label="Go Back"
        title="Back"
				variants={fadeRight}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
      >
        <ArrowLeft   />
      </motion.button>
			<div className="w-full   flex justify-center items-center">
				<Logo />
			</div>
    </motion.header>
  );
};

export default ProjectsHeader;
