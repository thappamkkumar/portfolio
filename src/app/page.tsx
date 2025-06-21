 
import Header from '@/components/header/Header'; 
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';


export default function Home() {
  return (
    <main className=" ">
       <Header />
			 <Hero />
			 <div className="px-6">
				<About />
				
			  <div className="h-screen px-6"></div>
			  <div className="h-screen px-6"></div>
			  <div className="h-screen px-6"></div>
			  <div className="h-screen px-6"></div>
				
			</div>
    </main>
  );
}
