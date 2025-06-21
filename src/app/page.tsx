 
import Header from '@/components/header/Header'; 
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';


export default function Home() {
  return (
    <main className=" ">
       <Header />
			 <Hero />
			 <div className="px-6">
				<About />
				<Skills />
				<Projects />
				
			  
			</div>
    </main>
  );
}
