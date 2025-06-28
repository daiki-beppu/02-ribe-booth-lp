import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/sections/HeroSection";
import ConceptSection from "./components/sections/ConceptSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import TeamSection from "./components/sections/TeamSection";
import PricingSection from "./components/sections/PricingSection";
import Footer from "./components/Footer";
import MemberDetailPage from "./components/pages/MemberDetailPage";
import Header from "./components/common/Header";
import MobileMenu from "./components/common/MobileMenu";

import { heroData } from "./data/sections/hero";
import { conceptData } from "./data/sections/concept";
import { experienceData } from "./data/sections/experience";
import { teamData } from "./data/sections/team";
import { pricingData } from "./data/sections/pricing";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー分のスペースを確保 */}
      <div className="h-16 md:block hidden"></div>
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
        <Route path="/" element={<HomePage />} />
        <Route path="/member/:memberName" element={<MemberDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
