'use client'
  
import { SkillvillaIcon } from '@/components/icons/SkillvillaIcon' // update path as needed
  

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function NavLinks() {
  return (
    <nav className="flex flex-wrap justify-center gap-4  ">
			{navLinks.map((link) => (
				<a
					key={link.label}
					href={link.href}
					className="text-zinc-400 hover:text-zinc-100    transition duration-300"
				>
					{link.label}
				</a>
			))}
		</nav>
  )
}
