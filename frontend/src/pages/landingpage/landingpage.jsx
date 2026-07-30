import HeroSection from './components/herosection'
import FeaturesSection from './components/featuressection'
import StatSection from './components/statsection'
import './landingpage.css'

const LandingPage = () => {
  return (
    <main className="landing-page">
      <HeroSection />
      <StatSection />
      <FeaturesSection />
    </main>
  )
}

export default LandingPage
