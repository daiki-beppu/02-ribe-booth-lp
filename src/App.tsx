import HeroSection from './components/sections/HeroSection';
import ConceptSection from './components/sections/ConceptSection';
import ExperienceSection from './components/sections/ExperienceSection';
import TeamSection from './components/sections/TeamSection';
import PricingSection from './components/sections/PricingSection';
import Footer from './components/Footer';

import { heroData } from './data/sections/hero';
import { conceptData } from './data/sections/concept';
import { experienceData } from './data/sections/experience';
import { teamData } from './data/sections/team';
import { pricingData } from './data/sections/pricing';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection data={heroData} />
      <ConceptSection data={conceptData} />
      <ExperienceSection data={experienceData} />
      <TeamSection data={teamData} />
      <PricingSection data={pricingData} />
      <Footer />
    </div>
  );
}

export default App;