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
        <div className=" relative  w-[250px] h-[250px]  lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]        ">
          <Image
            src="/images/profile-image.png"
            alt="Mukesh Kumar"
            fill
            className="object-cover   z-10    "
						sizes="(max-width: 1024px) 100vw, 450px"
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
				 
        <p className="text-center lg:text-left  ">
					<span className="hidden lg:inline-block w-[30px] h-[10px]  me-3 border-t-4 border-red-700"></span>
					I’m Mukesh Kumar, a dedicated Full Stack Web Developer with a strong passion for building dynamic and user-focused web applications. Although I’m a fresher with no formal industry experience, I’ve developed several real-world projects independently that reflect the standards and complexity of production environments.
        </p>
        <br />
				<p className="text-center lg:text-left">
					<span className="hidden lg:inline-block w-[30px] h-[10px]  me-3 border-t-4 border-red-700"></span>
					My work includes building complete e-commerce platforms, a professional media-sharing application, and a multi-vendor marketplace — all from scratch. These projects have sharpened my ability to design scalable architectures, write clean code, and deliver responsive user interfaces.
				</p>
        <br />
        <p className="text-center lg:text-left">
					<span className="hidden lg:inline-block w-[30px] h-[10px]  me-3 border-t-4 border-red-700"></span>
					I work confidently across the full stack, using technologies like Laravel, React.js, Next.js, Tailwind CSS, Bootstrap, MySQL, and PostgreSQL. 
        </p>
				 <br />
				<p className="text-center lg:text-left">
					<span className="hidden lg:inline-block w-[30px] h-[10px]  me-3 border-t-4 border-red-700"></span>
					I’m always exploring new tools and frameworks, and I’m eager to join a team where I can contribute, learn, and grow by solving real-world problems through thoughtful and modern web development.
        </p>
      </motion.div>

      
     
    </div>
  );
}
