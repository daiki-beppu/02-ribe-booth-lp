import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/common/header';
import MobileMenu from './components/common/mobile-menu';
import Footer from './components/footer';
import MemberDetailPage from './components/pages/member-detail-page';
import ConceptSection from './components/sections/concept-section';
import ExperienceSection from './components/sections/experience-section';
import HeroSection from './components/sections/hero-section';
import PricingSection from './components/sections/pricing-section';
import TeamSection from './components/sections/team-section';
import { conceptData } from './data/sections/concept';
import { experienceData } from './data/sections/experience';
import { heroData } from './data/sections/hero';
import { pricingData } from './data/sections/pricing';
import { teamData } from './data/sections/team';

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

function App() {
  return (
    <Router>
      <Header />
      <MobileMenu />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<MemberDetailPage />} path="/member/:memberName" />
      </Routes>
    </Router>
  );
}

export default App;
