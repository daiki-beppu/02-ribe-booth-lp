import { Analytics } from '@vercel/analytics/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from '@/components/common/header.tsx';
import MobileMenu from '@/components/common/mobile-menu.tsx';
import Footer from '@/components/footer.tsx';
import BoothDetailPage from '@/components/pages/booth-detail-page.tsx';
import MemberDetailPage from '@/components/pages/member-detail-page.tsx';
import ConceptSection from '@/components/sections/concept-section.tsx';
import ExperienceSection from '@/components/sections/experience-section.tsx';
import HeroSection from '@/components/sections/hero-section.tsx';
import PricingSection from '@/components/sections/pricing-section.tsx';
import TeamSection from '@/components/sections/team-section.tsx';
import { conceptData } from '@/data/sections/concept.ts';
import { experienceData } from '@/data/sections/experience.ts';
import { heroData } from '@/data/sections/hero.ts';
import { pricingData } from '@/data/sections/pricing.ts';
import { teamData } from '@/data/sections/team.ts';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー分のスペースを確保 */}
      <div className="hidden h-16 md:block" />
      <HeroSection data={heroData} />
      <ConceptSection data={conceptData} />
      <ExperienceSection data={experienceData} />
      <TeamSection data={teamData} />
      <PricingSection data={pricingData} />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <MobileMenu />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<BoothDetailPage />} path="/booth" />
        <Route element={<MemberDetailPage />} path="/member/:memberName" />
      </Routes>
      <Analytics />
    </Router>
  );
}
