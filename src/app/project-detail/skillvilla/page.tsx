 
import Header from "@/components/project-detail/Header";
import HeroSection from "@/components/project-detail/HeroSection"; 
import OverviewSection from "@/components/project-detail/OverviewSection"; 
import ProblemRoleSection from "@/components/project-detail/ProblemRoleSection"; 
import ArchitectureSection from "@/components/project-detail/ArchitectureSection"; 
import CoreSystemsSection from "@/components/project-detail/CoreSystemsSection";
import TechnicalChallengesSection from "@/components/project-detail/TechnicalChallengesSection";



import {
  heroData,   
	overviewData,
	problemRoleData,
	architectureData,
	coreSystemsData,
	technicalChallengesData
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
				<CoreSystemsSection {...coreSystemsData} />
				<TechnicalChallengesSection {...technicalChallengesData} />
				 
			</main>
    </>
  );
}
