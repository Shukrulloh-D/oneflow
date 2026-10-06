import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { ClientLogos } from '@/widgets/client-logos'
import { SmartContracts } from '@/widgets/smart-contracts'
import { FeaturesTabs } from '@/widgets/features-tabs'
import { PressPlay } from '@/widgets/press-play'
import { PlatformFeatures } from '@/widgets/platform-features'
import { BelieveYourEyes } from '@/widgets/believe-your-eyes'
import { Testimonials } from '@/widgets/testimonials'
import { Integrations } from '@/widgets/integrations'
import { Resources } from '@/widgets/resources'
import { MoreFromOneflow } from '@/widgets/more-from-oneflow'
import { Footer } from '@/widgets/footer'

// A page only puts widgets in order. No own logic.
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
