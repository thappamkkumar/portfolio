
import Header from "@/components/project-detail/Header";
import HeroSection from "@/components/project-detail/HeroSection"; 
import OverviewSection from "@/components/project-detail/OverviewSection"; 
import ProblemRoleSection from "@/components/project-detail/ProblemRoleSection"; 
import ArchitectureSection from "@/components/project-detail/ArchitectureSection"; 
import CoreSystemsSection from "@/components/project-detail/CoreSystemsSection";
import TechnicalChallengesSection from "@/components/project-detail/TechnicalChallengesSection";
import DeploymentSection from "@/components/project-detail/DeploymentSection"; 



import {
  heroData,   
	overviewData,
	problemRoleData,
	architectureData,
	coreSystemsData,
	technicalChallengesData,
	deploymentData
} from "@/lib/project-detail-data/multi-vendor-ecommerse/data";


export default function MultiVendorEcommerce() {
  return (
    <>
			<Header />
			<main className=" bg-zinc-950">
				 <HeroSection {...heroData} />
                <OverviewSection {...overviewData} />
                <ProblemRoleSection {...problemRoleData} />
                <ArchitectureSection {...architectureData} />
                <CoreSystemsSection {...coreSystemsData} />
                <TechnicalChallengesSection {...technicalChallengesData} />
                <DeploymentSection {...deploymentData} />
				 
			</main>
    </>
  );
}
