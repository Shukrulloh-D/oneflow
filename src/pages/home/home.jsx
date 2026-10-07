import { Header } from '@/widgets/header/header'
import { Footer } from '@/widgets/footer/footer'
import { Hero } from './hero/hero'
import { ClientLogos } from './client-logos/client-logos'
import { SmartContracts } from './smart-contracts/smart-contracts'
import { FeaturesTabs } from './features-tabs/features-tabs'
import { PressPlay } from './press-play/press-play'
import { PlatformFeatures } from './platform-features/platform-features'
import { BelieveYourEyes } from './believe-your-eyes/believe-your-eyes'
import { Testimonials } from './testimonials/testimonials'
import { Integrations } from './integrations/integrations'
import { Resources } from './resources/resources'
import { MoreFromOneflow } from './more-from-oneflow/more-from-oneflow'

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
