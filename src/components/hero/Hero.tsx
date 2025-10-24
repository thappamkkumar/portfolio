'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import HeroText from './HeroText';
import SocialLinks from './SocialLinks';


/*
const arrowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.6 },
  },
};*/

const arrowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: 0.6, 
      ease: [0.43, 0.13, 0.23, 0.96], // cubic-bezier array instead of 'easeOut'
    },
  },
};


export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['50%', '45%']);
  const bgPosition = useTransform(bgY, (y) => `center ${y}`);

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      className="w-full min-h-screen bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/images/img4.jpg')", 
        backgroundPosition: bgPosition,
      }}
    >
			<div className="relative w-full min-h-screen   bg-zinc-950/80 px-6 py-10   flex flex-col justify-end ">
				{/* Hero Text */}
				<div className="w-full max-w-7xl mx-auto">
					<HeroText />
				</div>
				
					<div className="  absolute right-6 top-1/2 transform -translate-y-1/2 hidden lg:flex">
					<SocialLinks />
				</div>

				{/* Arrow Down */}
				<div className="w-full  flex justify-center lg:justify-end pt-10">
					<motion.a
						href="#about"
						variants={arrowVariants}
						initial="hidden"
						animate="visible"
						className="  text-zoinc-400 hover:text-white transition-all animate-bounce"
					>
						<ArrowDown size={28} />
					</motion.a>
				</div>
			</div>
			
			
    </motion.section>
  );
}
