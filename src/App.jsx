import BackofficeSection from './components/BackofficeSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import GamesCatalog from './components/GamesCatalog';
import Header from './components/Header'
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import SolutionSection from './components/SolutionSection';
import StatsAndCTA from './components/StatsAndCTA';
import StatsSection from './components/StatsSection';
import StepsSection from './components/StepsSection';
import AnimatedSection from "./components/AnimatedSection";

function App() {
  return (
    <>
      <Header />

      <main className="font-poppins pt-40">

        <AnimatedSection>
          <Hero />
        </AnimatedSection>

        <AnimatedSection>
          <div id="a-propos">
            <SolutionSection />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <StepsSection />
        </AnimatedSection>

        <AnimatedSection>
          <FeaturesSection />
        </AnimatedSection>

        <AnimatedSection>
          <BackofficeSection />
        </AnimatedSection>

        <AnimatedSection>
          <StatsSection />
        </AnimatedSection>

        <AnimatedSection>
          <div id="offres">
            <Pricing />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="jeux">
            <GamesCatalog />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <StatsAndCTA />
        </AnimatedSection>

      </main>

      <Footer />
    </>
  )
}

export default App;