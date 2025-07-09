import HeroSection from "@/components/project-detail/HeroSection";
import TechStack from "@/components/project-detail/TechStack";
import Overview from "@/components/project-detail/multi-vendor-ecommerce/Overview";

import {
  heroProps, 
  techStackProps,
} from "@/lib/project-detail-data/multi-vendor-ecommerce/data";

export default function MultiVendorEcommerce() {
  return (
    <main>
      <HeroSection {...heroProps} />
      <div className="px-6">
        <Overview />
        <TechStack {...techStackProps} />
      </div>
			
			<div className="px-6 h-screen">
      </div>
    </main>
  );
}
