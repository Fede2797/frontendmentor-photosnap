import { ArrowButtonWhite } from '../../components/ArrowButtonWhite'
import { MainLayout } from '../../layout/MainLayout'
import { MobileFirstStory } from '../components/MobileFirstStory'
import { StoriesGrid } from '../components/StoriesGrid'
import { WideFirstStory } from '../components/WideFirstStory'

export const Stories = () => {
  return (
    <MainLayout>
        <div className="flex flex-col w-full">
            {/* First story */}
            <main>
                {/* First story displayed for small screens */}
                <MobileFirstStory />
                {/* First story displayed for wide screens */}
                <WideFirstStory />
            </main>
            {/* Stories grid */}
            <section>
                <StoriesGrid />
            </section>
        </div>
    </MainLayout>
  )
}
