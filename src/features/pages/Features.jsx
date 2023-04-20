import { MainLayout } from '../../layout/MainLayout'
import { BetaCTA } from '../../components/BetaCTA'
import { HeroSection, MainSection } from '../components'

export const Features = () => {
  return (
    <MainLayout>
        <div className="flex flex-col w-full">
            {/* Hero section */}
            <main>
                <HeroSection />
            </main>

            {/* Features section */}
            <section>
                <MainSection />
            </section>

            {/* Beta invite */}
            <section>
              <BetaCTA />
            </section>
        </div>
    </MainLayout>
  )
}
