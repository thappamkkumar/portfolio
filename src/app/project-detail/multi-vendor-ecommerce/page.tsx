import HeroSection from "@/components/project-detail/HeroSection";
import TechStack from "@/components/project-detail/TechStack";
import Overview from "@/components/project-detail/overview/multi-vendor-ecommerse/Overview";
import Feature from "@/components/project-detail/feature/Feature";

import {
  heroProps, 
  techStackProps,
  featureProps,
} from "@/lib/project-detail-data/multi-vendor-ecommerce/data";

export default function MultiVendorEcommerce() {
  return (
    <main>
      <HeroSection {...heroProps} />
      <div className="px-6">
        <Overview />
        <TechStack {...techStackProps} />
				
				<Feature data={...featureProps} />

      </div>
			
			<div className="px-6 h-screen">
			
      </div>
    </main>
  );
}
