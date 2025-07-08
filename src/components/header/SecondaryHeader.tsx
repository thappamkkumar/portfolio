'use client';

import React from 'react';
//import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';  
 

 
/*const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};*/

const ProjectsHeader: React.FC = () => {
  const router = useRouter();

  return (
    <div 
      className="sticky z-50 w-full   top-0  px-4 py-3 overflow-auto  backdrop-blur-md flex justify-between items-center    "
			 
    >
      <button
        onClick={() => router.back()}
        className="text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors duration-300"
        aria-label="Go Back"
        title="Back"
				 
      >
        <ArrowLeft   />
      </button>
			<div className="w-full   flex justify-center items-center">
				<h1
					className="text-xl font-bold flex items-center gap-1"
					
				>
					<span className="text-lg bg-red-800 text-white rounded-md px-2 py-1">Mk</span>
					<span>Portfolio</span>
				</h1>
			</div>
    </div>
  );
};

export default ProjectsHeader;
