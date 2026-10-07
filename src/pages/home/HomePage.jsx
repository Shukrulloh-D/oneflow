import { Header } from '@/widgets/header/Header'
import { Footer } from '@/widgets/footer/Footer'
import { Hero } from './sections/Hero'
import { ClientLogos } from './sections/ClientLogos'
import { SmartContracts } from './sections/SmartContracts'
import { FeaturesTabs } from './sections/FeaturesTabs'
import { PressPlay } from './sections/PressPlay'
import { PlatformFeatures } from './sections/PlatformFeatures'
import { BelieveYourEyes } from './sections/BelieveYourEyes'
import { Testimonials } from './sections/Testimonials'
import { Integrations } from './sections/Integrations'
import { Resources } from './sections/Resources'
import { MoreFromOneflow } from './sections/MoreFromOneflow'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <SmartContracts />
        <FeaturesTabs />
        <PressPlay />
        <PlatformFeatures />
        <BelieveYourEyes />
        <Testimonials />
        <Integrations />
        <Resources />
        <MoreFromOneflow />
      </main>
      <Footer />
    </>
  )
}
