 
import Header from '@/components/header/Header'; 
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';
import ScrollToTopButton from "@/components/common/ScrollToTopButton";


export default function Home() {
  return (
    <main className=" bg-zinc-950">
       <Header />
			 <Hero />
			 <div className="px-4 overflow-hidden">
				<About />
				<Skills />
				<Projects />
				<Contact /> 
			</div>	
			<Footer />
			<ScrollToTopButton />
    </main>
  );
}
