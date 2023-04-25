import { ArrowButtonWhite } from "../../components/ArrowButtonWhite"

export const MobileFirstStory = () => {
  return (
    <div className='flex flex-col w-full justify-center md:hidden'>
        {/* Image of the article */}
        <div className='h-[375px]'>
            <img className='h-full w-full object-cover' src="stories/mobile/moon-of-appalacia.jpg" alt="" />
        </div>
        {/* Description of the article */}
        <div className="px-[29px] bg-black text-white">
            {/* Main text */}
            <div className="py-[48px]">
                {/* Description of the article */}
                <h4 className="mb-4 font-bold font-dm-sans text-xs tracking-[2px] uppercase">Last month’s featured story</h4>
                {/* Title of the article */}
                <h1 className="mb-4 font-bold font-dm-sans text-[32px] tracking-[3.33px] uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px]">Hazy full moon of appalachia</h1>
                {/* Date & Author */}
                <div className='flex mb-6'>
                    <span className='font-bold font-dm-sans text-[13px] opacity-75 mr-[9px]'>March 2nd 2020</span>
                    <span className='font-bold font-dm-sans text-[13px]'>by John Appleseed</span>
                </div>
                {/* Story description */}
                <p className="mb-6 font-dm-sans text-[15px] leading-[25px] opacity-60">
                    The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
                </p>
                <ArrowButtonWhite>
                    Read the story
                </ArrowButtonWhite>
            </div>
        </div>
    </div>
  )
}
