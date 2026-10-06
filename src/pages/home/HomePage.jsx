import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { Wedding } from '@/widgets/wedding';
import { Sustainability } from '@/widgets/sustainability';
import { About } from '@/widgets/about';
import { OurJewelry } from '@/widgets/our-jewelry';
import { CustomDesign } from '@/widgets/custom-design';
import { LoveInAllWays } from '@/widgets/love-in-all-ways';
import { Footer } from '@/widgets/footer';

/**
 * HomePage — только композиция.
 * Никакой логики, только порядок виджетов.
 */
export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Wedding />
        <Sustainability />
        <About />
        <OurJewelry />
        <CustomDesign />
        <LoveInAllWays />
      </main>
      <Footer />
    </>
  );
}
