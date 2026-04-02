 
import Header from "@/components/project-detail/Header";
import HeroSection from "@/components/project-detail/HeroSection"; 
import OverviewSection from "@/components/project-detail/OverviewSection"; 
import ProblemRoleSection from "@/components/project-detail/ProblemRoleSection"; 
import ArchitectureSection from "@/components/project-detail/ArchitectureSection"; 

  

import {
  heroData,   
	overviewData,
	problemRoleData,
	architectureData
} from "@/lib/project-detail-data/skillvilla/data";


export default function SkillVilla() {
  return (
    <>
			<Header  />
			<main>
				<HeroSection {...heroData} />
				<OverviewSection {...overviewData} />
				<ProblemRoleSection {...problemRoleData} />
				<ArchitectureSection {...architectureData} />
			 
				 
				 
			</main>
    </>
  );
}
