'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};



export default function Introduction() {
  return (
    <div className=" relative  flex   flex-col  lg:flex-row  items-start gap-8 w-full">
       
			  
      <motion.div
        className=" lg:sticky lg:top-20    w-full lg:w-1/2 pb-10 lg:pb-0 flex justify-center lg:justify-start  "
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className=" relative  w-64 h-64 sm:w-80 sm:h-80 md:w-90 md:h-90  ">
          <Image
            src="/images/profile-image.jpg"
            alt="Mukesh Kumar"
            fill
            className="object-cover   z-10  bg-zinc-900   "
						sizes="(max-width:  768px) 80vw, 400px"
            priority
          />
					<div className="absolute top-8  left-8 z-9 w-full h-full  border border-15 border-red-700    ">
						 
					</div>
        </div>
      </motion.div>
			 
			 
			<motion.div
				className="w-full lg:w-1/2 text-zinc-400 text-lg leading-relaxed"
				variants={fadeLeft}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<p className="text-center lg:text-left">
					I am a Full Stack Developer focused on building scalable, production-ready web applications and complex full stack systems. My experience includes developing e-commerce platforms, media-sharing applications, and multi-vendor marketplaces from the ground up.
				</p>

				<br />

				<p className="text-center lg:text-left">
					I work across the full stack using React, Next.js, Laravel, and modern database systems such as MySQL and PostgreSQL. My development approach emphasizes clean architecture, reusable components, and maintainable backend structures.
				</p>

				<br />

				<p className="text-center lg:text-left">
					I am comfortable handling complete application lifecycles — from UI implementation and API design to authentication systems and database modeling — ensuring performance, scalability, and long-term maintainability.
				</p>
			</motion.div>

      
     
    </div>
  );
}
