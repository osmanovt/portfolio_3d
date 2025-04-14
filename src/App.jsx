import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import Navbar from './components/Navbar.jsx';
import LogoSection from './sections/LogoSection.jsx';
import FeatureCards from './sections/FeatureCards.jsx';
import ExperienceSection from './sections/ExperienceSection.jsx';
import TechStackSection from './sections/TechStackSection.jsx';
import TestimonialSection from './sections/TestimonialSection.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStackSection />
      <TestimonialSection />
    </>
  );
};

export default App;
