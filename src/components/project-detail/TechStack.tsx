'use client';

import { motion, Variants, easeOut } from 'framer-motion';
import { Wrench } from "lucide-react";

const fadeUp= {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
 const stackLi: Variants = {
  hidden: { opacity: 0, y: 30,   },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    
    transition: { delay: i * 0.1, duration: 0.6, ease: easeOut },
  }),
};

interface TechStackProps {
  stack: string[];  
}


export default function TechStack({ stack }: TechStackProps) {
  return (
    <motion.section 
			className=" max-w-5xl mx-auto p-4 rounded-xl bg-zinc-900 overflow-hidden"
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
       
			<motion.h2
        className="flex items-center gap-3  text-xl md:text-2xl font-bold text-red-700 mb-2"
				variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      > 
				 <Wrench   /> <span>Tech Stack</span>
      </motion.h2>
			
      <ul 
				className="list-disc list-inside space-y-2 text-zinc-200 text-base"
				
			>
        {stack.map((tech, index) => (
          <motion.li 
						key={index}
						custom={index}
						variants={stackLi}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						{tech}
					</motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
