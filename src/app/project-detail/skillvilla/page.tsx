 
import Header from "@/components/project-detail/Header";
import HeroSection from "@/components/project-detail/HeroSection"; 
import OverviewSection from "@/components/project-detail/OverviewSection"; 
import ProblemRoleSection from "@/components/project-detail/ProblemRoleSection"; 
  

import {
  heroData,   
	overviewData,
	problemRoleData,
} from "@/lib/project-detail-data/skillvilla/data";


export default function SkillVilla() {
  return (
    <>
			<Header  />
			<main>
				<HeroSection {...heroData} />
				<OverviewSection {...overviewData} />
				<ProblemRoleSection {...problemRoleData} />
			 
				 
				 
			</main>
    </>
  );
}
