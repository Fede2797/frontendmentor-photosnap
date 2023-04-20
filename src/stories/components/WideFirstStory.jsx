import { ArrowButtonWhite } from "../../components/ArrowButtonWhite"

export const WideFirstStory = () => {
  return (
    <div className='hidden md:flex flex-col w-full justify-center'>
        {/* Image of the article */}
        <div className='w-full min-h-[650px] flex overflow-hidden bg-[url(stories/tablet/moon-of-appalacia.jpg)] bg-no-repeat bg-cover lg:bg-[url(stories/desktop/moon-of-appalacia.jpg)]'>
            <div className="mx-[5%] text-white w-[50%] py-[48px] my-auto lg:mx-[7.77%] lg:max-w-[400px]">
                <h4 className="mb-6 font-bold font-dm-sans text-xs tracking-[2px] uppercase">Last month’s featured story</h4>
                <h1 className="mb-4 font-bold font-dm-sans text-[32px] tracking-[3.33px] uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px]">Hazy full moon of appalachia</h1>
                <div className='flex mb-6'>
                    <span className='font-bold font-dm-sans text-[13px] opacity-75 mr-[9px]'>March 2nd 2020</span>
                    <span className='font-bold font-dm-sans text-[13px]'>by John Appleseed</span>
                </div>
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
