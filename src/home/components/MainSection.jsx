import { Link } from "react-router-dom"
import { ArrowButtonBlack } from "../../components/ArrowButtonBlack"
import { ArrowButtonWhite } from "../../components/ArrowButtonWhite"
import { HorizontalColorfulRectangle } from "../../layout/components/HorizontalColorfulRectangle"
import { VerticalColorfulRectangle } from "../../layout/components/VerticalColorfulRectangle"

export const MainSection = () => {
  return (
    <>
        {/* First article */}
        <article className='flex flex-col w-full justify-center md:flex-row-reverse md:h-[650px]'>
            {/* Image of the article */}
            <div className='h-full overflow-hidden md:w-1/3 lg:w-[57.5%]'>
                <img className='h-full w-full md:object-cover' src="home/desktop/create-and-share.jpg" alt="" />
            </div>

            {/* Description of the article */}
            <div className="pl-[33px] pr-6 bg-black text-white md:w-2/3 md:px-0 lg:w-[42.5%]">
                {/* Colorful rectangle */}
                <HorizontalColorfulRectangle />

                <div className='md:h-full md:flex md:flex-col md:justify-center'>
                    <div className="flex flex-row">
                        {/* Colorful vertical rectangle */}
                        <VerticalColorfulRectangle />
                        {/* Main text */}
                        <div className="py-[72px] md:flex md:flex-col md:justify-center md:p-0 md:px-14">
                            <h1 className="font-bold font-dm-sans text-[32px] tracking-[3.33px] mb-4 uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px] md:mb-12">Create and share your photo stories</h1>
                            <p className="font-dm-sans text-[15px] leading-[25px] opacity-60 mb-[23px] md:mb-12">
                                Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                            </p>
                            <ArrowButtonWhite>
                                Get an invite
                            </ArrowButtonWhite>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        {/* Second article */}
        <article className='flex flex-col w-full md:flex-row justify-center md:h-[600px]'>
            {/* Image of the article */}
            <div className='h-full overflow-hidden md:w-1/3 lg:w-[60%]'><img className='h-full w-full md:object-cover' src="home/desktop/beautiful-stories.jpg" alt=""/></div>
            {/* Description of the article */}
            <div className="py-[72px] pl-[33px] pr-6 md:w-2/3 md:mx-0 md:my-auto md:px-14 lg:w-[40%]">
                <h1 className="font-bold font-dm-sans text-[32px] tracking-[3.33px] mb-4 uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px] md:mb-12">Beautiful stories every time</h1>
                <p className="font-dm-sans text-[15px] leading-[25px] opacity-60 mb-[23px] md:mb-12">
                    We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
                </p>
                <ArrowButtonBlack>
                    <Link to="/stories"> 
                        View the stories
                    </Link>
                </ArrowButtonBlack>
            </div>
        </article>
        {/* Third article */}
        <article className='flex flex-col w-full md:flex-row-reverse justify-center md:h-[600px]'>
            {/* Image of the article */}
            <div className='h-full overflow-hidden md:w-1/3 lg:w-[57.5%]'><img className='h-full w-full md:object-cover' src="home/desktop/designed-for-everyone.jpg" alt="" /></div>
            {/* Description of the article */}
            <div className="py-[92px] pl-[33px] pr-6 md:w-2/3 md:mx-0 md:my-auto md:px-14 lg:w-[42.5%]">
                <h1 className="font-bold font-dm-sans text-[32px] tracking-[3.33px] mb-4 uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px] md:mb-12">Designed for everyone</h1>
                <p className="font-dm-sans text-[15px] leading-[25px] opacity-60 mb-[23px] md:mb-12">
                    Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. 
                </p>
                <ArrowButtonBlack>
                    <Link to="/stories"> 
                        View the stories
                    </Link>
                </ArrowButtonBlack>
            </div>
        </article>
    </>
  )
}
