import { HorizontalColorfulRectangle } from "../../layout/components/HorizontalColorfulRectangle"
import { VerticalColorfulRectangle } from "../../layout/components/VerticalColorfulRectangle"

export const HeroSection = () => {
  return (
    <>
        {/* First article */}
        <article className='flex flex-col w-full justify-center md:flex-row-reverse md:h-[490px]'>
            {/* Image of the article for small screens*/}
            <div className='h-[375px] overflow-hidden md:hidden'>
                <img className='h-[375px] w-full object-cover' src="features/mobile/hero.jpg" alt="" />
            </div>
            {/* Image of the article for medium screens */}
            <div className='h-full overflow-hidden md:w-1/3 lg:w-[57.5%] hidden md:block lg:hidden'>
                <img className='h-full w-full md:object-cover' src="features/tablet/hero.jpg" alt="" />
            </div>
            {/* Image of the article for large screens*/}
            <div className='hidden overflow-hidden lg:w-[57.5%] lg:block'>
                <img className='h-[375px] lg:h-full w-full object-cover' src="features/desktop/hero.jpg" alt="" />
            </div>

            {/* Description of the article */}
            <div className="px-7 bg-black text-white md:w-2/3 md:px-0 lg:w-[42.5%]">
                {/* Colorful rectangle */}
                <HorizontalColorfulRectangle />

                <div className='md:h-full md:flex md:flex-col md:justify-center'>
                    <div className="flex flex-row">
                        {/* Colorful vertical rectangle */}
                        <VerticalColorfulRectangle />
                        {/* Main text */}
                        <div className="py-[72px] md:flex md:flex-col md:justify-center md:p-0 md:px-14 lg:max-w-[700px] lg:mx-auto lg:px-[112px]">
                            <h1 className="font-bold font-dm-sans text-[32px] tracking-[3.33px] mb-4 uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px] md:mb-[21px]">Features</h1>
                            <p className="font-dm-sans text-[15px] leading-[25px] opacity-60">
                                We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}
