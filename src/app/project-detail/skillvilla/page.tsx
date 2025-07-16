 
import Header from "@/components/project-detail/Header";
import HeroSection from "@/components/project-detail/HeroSection";
import TechStack from "@/components/project-detail/TechStack";
import Overview from "@/components/project-detail/overview/skillvilla/Overview";
import Feature from "@/components/project-detail/feature/Feature";
 
import ScrollToTopButton from "@/components/common/ScrollToTopButton";

import {
  heroProps, 
  techStackProps,
  featureProps,
} from "@/lib/project-detail-data/skillvilla/data";


export default function SkillVilla() {
  return (
    <>
			<Header data={...featureProps}/>
			<main>
				<HeroSection {...heroProps} />
				<div className="px-6">
					<Overview />
					<TechStack {...techStackProps} />
					
					<Feature data={...featureProps} />

				</div>
				
				<ScrollToTopButton />
				 
			</main>
    </>
  );
}
