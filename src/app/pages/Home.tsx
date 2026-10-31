import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 13-Section Core Architecture Components
import HomeHero from '../components/home/HomeHero';
import TrustedBySection from '../components/home/TrustedBySection';
import HomeChallenges from '../components/home/HomeChallenges';
import HomeOfferingsGrid from '../components/home/HomeOfferingsGrid';
import HomeGrowthJourney from '../components/home/HomeGrowthJourney';
import HomeAiSalesSection from '../components/home/HomeAiSalesSection';
import HomeGrowthScienceSection from '../components/home/HomeGrowthScienceSection';
import HomeIndustriesSection from '../components/home/HomeIndustriesSection';
import HomeGlobalAccelerationSection from '../components/home/HomeGlobalAccelerationSection';
import HomeExecutiveTelemetrySection from '../components/home/HomeExecutiveTelemetrySection';
import HomeCaseStudiesSection from '../components/home/HomeCaseStudiesSection';
import HomeAboutSection from '../components/home/HomeAboutSection';
import HomeConversionSection from '../components/home/HomeConversionSection';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <main className="bg-white min-h-screen overflow-x-hidden selection:bg-blue-600 selection:text-white">
            {/* Section 1 — Hero */}
            <HomeHero />

            {/* Strategic Partner & Ingestion Ecosystem Trust Bar */}
            <TrustedBySection />

            {/* Section 2 — Growth Challenges */}
            <HomeChallenges />

            {/* Section 3 — All Eight Offerings */}
            <HomeOfferingsGrid />

            {/* Section 4 — Connected Revenue Growth Journey */}
            <HomeGrowthJourney />

            {/* Section 5 — AI-Native Sales */}
            <HomeAiSalesSection />

            {/* Section 6 — Growth & Acceleration Science */}
            <HomeGrowthScienceSection />

            {/* Section 7 — Industries and Business Models */}
            <HomeIndustriesSection />

            {/* Section 8 — Global Business Acceleration */}
            <HomeGlobalAccelerationSection />

            {/* Section 9 — Growth Intelligence and Business Outcomes */}
            <HomeExecutiveTelemetrySection />

            {/* Section 10 — Case Studies and Trust */}
            <HomeCaseStudiesSection />

            {/* Section 11 — About ProfitMachines */}
            <HomeAboutSection />

            {/* Section 12 — Final Conversion Section */}
            <HomeConversionSection />

            {/* Section 13 (Footer) is rendered persistently in App.tsx */}
        </main>
    );
}
