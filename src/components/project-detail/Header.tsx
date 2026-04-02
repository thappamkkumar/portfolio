'use client';
 
import { useRouter } from 'next/navigation';
import { ArrowLeft,   } from 'lucide-react';

  

const Header  = () => {
  const router = useRouter();
  
	
	
  return (
    
      <header className="sticky z-40 w-full top-0 backdrop-blur-sm bg-zinc-950/20 px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => router.back()}
          className="text-zinc-400 cursor-pointer  hover:text-zinc-100 transition-colors"
          aria-label="Go Back"
          title="Back"
        >
          <ArrowLeft />
        </button>

        <div className="w-full flex justify-center items-center">
          <h1 className="text-xl font-bold flex items-center gap-1">
            
             Mukesh Kumar 
          </h1>
        </div>

        
      </header>
 
  );
};

export default Header;
