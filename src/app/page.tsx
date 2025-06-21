 
import Header from '@/components/header/Header'; 
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';


export default function Home() {
  return (
    <main className=" ">
       <Header />
			 <Hero />
			 <div className="px-6">
				<About />
				<Skills />
				<Projects />
				<Contact /> 
			</div>	
			<Footer />
    </main>
  );
}
