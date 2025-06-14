import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import ExperienceSection from './components/ExperienceSection';
import TeamSection from './components/TeamSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ConceptSection />
      <ExperienceSection />
      <TeamSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;