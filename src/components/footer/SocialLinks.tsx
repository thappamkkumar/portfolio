'use client'
 
import { Github, Instagram, MessageCircle } from 'lucide-react'
import { SkillvillaIcon } from '@/components/icons/SkillvillaIcon' // update path as needed
  

const socialLinks = [
	{ href: 'https://skillvilla.com/your-profile', icon: <SkillvillaIcon /> }, 
  { href: 'https://github.com/thappamkkumar', icon: <Github size={24} /> },
  { href: 'https://www.instagram.com/mu_ke_sh_ku_mar/?hl=en#', icon: <Instagram size={24} /> },
  { href: 'https://wa.me/6005819576', icon: <MessageCircle size={24} /> },
   
]

export default function SocialLinks() {
  return (
    <div className="flex justify-center md:justify-end ">
      {socialLinks.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer" 
          className="text-zinc-400 hover:bg-red-700 hover:text-white  hover:scale-110 p-2 rounded-full transition-color duration-300"
					
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
