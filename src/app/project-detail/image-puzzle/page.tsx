 
import Header from "@/components/project-detail/Header";
import HeroSection from "@/components/project-detail/HeroSection";
import TechStack from "@/components/project-detail/TechStack";
import Overview from "@/components/project-detail/overview/image-puzzle/Overview";
import Feature from "@/components/project-detail/feature/Feature";
 
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

import {
  heroProps, 
  techStackProps,
  featureProps,
} from "@/lib/project-detail-data/image-puzzle/data";


export default function ImagePuzzle() {
  return (
    <>
			<Header data={featureProps}/>
			<main>
				<HeroSection {...heroProps} />
				<div className="px-6">
					<Overview />
					<TechStack stack={techStackProps.stack} />
					
					<Feature data={featureProps} />

				</div>
				
				<ScrollToTopButton />
				 
			</main>
    </>
  );
}
