'use client'
 
import { Github, Linkedin, MessageCircle } from 'lucide-react'
import { SkillvillaIcon } from '@/components/icons/SkillvillaIcon' // update path as needed
  

const socialLinks = [
	{ href: 'http://52.53.160.90/user/dev-with-mk/23/profile', icon: <SkillvillaIcon /> }, 
  { href: 'https://github.com/thappamkkumar', icon: <Github size={24} /> },
  { href: 'https://www.linkedin.com/in/engineer-mukesh-kumar/', icon: <Linkedin size={24} /> },
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
