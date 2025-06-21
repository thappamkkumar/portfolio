 
import Header from '@/components/header/Header'; 
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';


export default function Home() {
  return (
    <main className=" ">
       <Header />
			 <Hero />
			 <div className="px-6">
				<About />
				<Skills />
				
			  <div className="h-screen px-6"></div>
			  <div className="h-screen px-6"></div>
			  <div className="h-screen px-6"></div>
			  <div className="h-screen px-6"></div>
				
			</div>
    </main>
  );
}
