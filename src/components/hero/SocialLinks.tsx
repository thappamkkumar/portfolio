'use client'

import { motion, Variants} from 'framer-motion'
import { Github, Instagram, MessageCircle } from 'lucide-react'
import { SkillvillaIcon } from '@/components/icons/SkillvillaIcon' // update path as needed

/*
const iconVariants = {
  hidden: { opacity: 0, x: 10 },
	visible: (i: number) => ({
    opacity: 1,
    x: 0, 
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};*/

const iconVariants: Variants = {
  hidden: { opacity: 0, x: 10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { 
      delay: i * 0.2, 
      duration: 0.6, 
      ease: [0.43, 0.13, 0.23, 0.96] // cubic-bezier equivalent of easeOut
    },
  }),
};

const socialLinks = [
	{ href: 'https://skillvilla.com/your-profile', icon: <SkillvillaIcon /> }, 
  { href: 'https://github.com/thappamkkumar', icon: <Github size={24} /> },
  { href: 'https://www.instagram.com/mu_ke_sh_ku_mar/?hl=en#', icon: <Instagram size={24} /> },
  { href: 'https://wa.me/6005819576', icon: <MessageCircle size={24} /> },
   
]

export default function SocialLinks() {
  return (
    <div className="h-full flex lg:flex-col flex-row items-center lg:justify-center gap-6 text-zinc-300">
      {socialLinks.map((link, i) => (
        <motion.a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
					custom={i}
          variants={iconVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
          className="text-zinc-400 hover:text-red-700 transition-color"
					
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  )
}
