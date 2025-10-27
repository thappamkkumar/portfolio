'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, LayoutGrid, X } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  image: string|null;
	points?: string[];
}

interface FeatureCategoryData {
  category: string;
  features: Feature[];
	
}

interface FeaturesSectionProps {
  data: FeatureCategoryData[];
}

// Utility to scroll with offset
const scrollToIdWithOffset = (id: string, offset = -80) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const Header: React.FC<FeaturesSectionProps> = ({ data }) => {
  const router = useRouter();
  const [featureBox, setFeatureBox] = useState(false);
	const boxRef = useRef<HTMLDivElement>(null);

  const toggleFeatureBox = () => setFeatureBox(prev => !prev);
	
	
	// Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setFeatureBox(false);
      }
    };

    if (featureBox) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [featureBox]);
	
	
	
  return (
    <>
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
            <span className="text-lg bg-red-700 text-white rounded-md px-2 py-1">Mk</span>
            <span>Portfolio</span>
          </h1>
        </div>

        <button
          onClick={toggleFeatureBox}
          className="text-zinc-400 cursor-pointer  hover:text-zinc-100 transition-colors flex items-center gap-1"
          aria-label="Features"
          title="Features"
        >
          <LayoutGrid size={20} />
					<span className="hidden md:inline">Features</span>
        </button>
      </header>

      {featureBox && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80">
					<div 
						ref={boxRef}
						className="bg-zinc-900 rounded-lg shadow-lg w-[90vw] max-w-4xl h-[80vh] overflow-hidden"
					>
						<div className="overflow-y-auto h-full p-4 lg:p-6">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-xl font-semibold text-zinc-200">Pages & Features</h2>
								<button
									onClick={toggleFeatureBox}
									className="text-sm text-zinc-400 cursor-pointer hover:text-zinc-100 "
								>
										<X size={25} />
								</button>
							</div>

							{data.map((categoryData, catIndex) => (
								<div key={`${categoryData.category}-${catIndex}`} className="mb-4">
									<h3 className="font-semibold text-lg text-red-700 mb-1">{categoryData.category}</h3>
									<ul className="grid grid-cols-2 sm:grid-cols-3 gap-2  ">
										{categoryData.features.map((feature, idx) => {
											const id = `${feature.title.replace(/\s+/g, '-').toLowerCase()}-${catIndex}-${idx}`;

											return (
												<li key={id}  >
													<a
														href={`#${id}`}
														onClick={(e) => {
															e.preventDefault();
															scrollToIdWithOffset(id);
															toggleFeatureBox();
														}}
														className="block text-center w-full px-1 md:px-2 xl:px-4 py-2 rounded-md bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-all duration-300"
													>
														{feature.title}
													</a>

												</li>
											);
										})}
									</ul>
								</div>
							))}
						</div>
					</div>
        </div>
      )}
    </>
  );
};

export default Header;
