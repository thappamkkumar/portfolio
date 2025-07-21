'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function SecondaryHeader() {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-2   py-2   sticky top-0 bg-zinc-950/20  backdrop-blur-md">
			{/* Back button with animation */}
      <motion.button
        onClick={() => router.back()}
        className="  text-zinc-400 cursor-pointer  hover:text-zinc-100 transition-colors " 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <ArrowLeft size={25} />  
      </motion.button>
			
			
      {/* Logo with animation */}
			<motion.div
          className="w-full flex justify-center  "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease: 'easeOut', duration: 0.5 }}
        >
          <h1 className="text-xl font-bold flex items-center gap-1">
           <span className="text-lg bg-red-700 text-white rounded-md px-2 py-1">Mk</span>
						<span>Portfolio</span>
          </h1>
        </motion.div>


      
    </header>
  );
}
