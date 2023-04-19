import { MainLayout } from '../../layout/MainLayout'
import { Features, MainSection, Stories } from '../components'

export const Home = () => {
  return (
    <MainLayout>
        <div className="flex flex-col w-full">
            {/* Hero section */}
            <main>
                <MainSection />
            </main>

            {/* Stories section */}
            <section>
                <Stories />
            </section>

            {/* Features section */}
            <section>
                <Features />
            </section>

        </div>
    </MainLayout>
  )
}
