import { MainLayout } from '../../layout/MainLayout'
import { MainSection } from '../components/MainSection'
import { HeroSection } from '../components/HeroSection'

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

        </div>
    </MainLayout>
  )
}
