import { MainLayout } from '../../layout/MainLayout'
import { BetaCTA } from '../../components/BetaCTA'
import { HeroSection } from '../components'
import { Subscriptions } from '../components/Subscriptions'

export const Pricing = () => {
  return (
    <MainLayout>
        <div className="flex flex-col w-full">
            {/* Hero section */}
            <main>
                <HeroSection />
            </main>

            {/* Subscription options */}
            <section>
                <Subscriptions />
            </section>

            {/* Compare chart */}
            <section>
                
            </section>

            {/* Beta invite */}
            <section>
              <BetaCTA />
            </section>
        </div>
    </MainLayout>
  )
}
