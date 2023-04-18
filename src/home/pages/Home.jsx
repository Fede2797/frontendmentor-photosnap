import React from 'react'
import { MainLayout } from '../../layout/MainLayout'
import { ArrowButtonWhite } from '../../components/ArrowButtonWhite'
import { ArrowButtonBlack } from '../../components/ArrowButtonBlack'
import { MobileColorfulRectangle } from '../../layout/components/MobileColorfulRectangle'
import { ArrowButtonWide } from '../../components/ArrowButtonWide'
import { Stories } from '../components/Stories'
import { Features } from '../components/Features'

export const Home = () => {
  return (
    <MainLayout>
        <div className="flex flex-col w-full">
            {/* Hero section */}
            <main>
                {/* First article */}
                <article className='flex flex-col w-full md:flex-row justify-center'>
                    {/* Image of the article */}
                    <div className='h-full max-h-[300px] overflow-hidden'>
                        <img className='h-full w-full' src="home/desktop/create-and-share.jpg" alt="" />
                    </div>

                    {/* Description of the article */}
                    <div className="pl-[33px] pr-6 bg-black text-white">
                        {/* Colorful rectangle */}
                        <MobileColorfulRectangle />

                        <div className="py-[72px]">
                            <h1 className="font-bold font-dm-sans text-[32px] tracking-[3.33px] mb-4 uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px]">Create and share your photo stories</h1>
                            <p className="font-dm-sans text-[15px] leading-[25px] opacity-60 mb-[23px]">
                                Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                            </p>
                            <ArrowButtonWhite>
                                Get an invite
                            </ArrowButtonWhite>
                        </div>
                    </div>
                </article>
                <article className='flex flex-col w-full md:flex-row'>
                    {/* Image of the article */}
                    <div className='h-full max-h-[270px] overflow-hidden'><img className='h-full w-full' src="home/desktop/beautiful-stories.jpg" alt=""/></div>
                    {/* Description of the article */}
                    <div className="py-[72px] pl-[33px] pr-6">
                        <h1 className="font-bold font-dm-sans text-[32px] tracking-[3.33px] mb-4 uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px]">Create and share your photo stories</h1>
                        <p className="font-dm-sans text-[15px] leading-[25px] opacity-60 mb-[23px]">
                            Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                        </p>
                        <ArrowButtonBlack>
                            Get an invite
                        </ArrowButtonBlack>
                    </div>
                </article>
                <article className='flex flex-col w-full md:flex-row'>
                    {/* Image of the article */}
                    <div className='h-full max-h-[270px] overflow-hidden'><img className='h-full w-full' src="home/desktop/designed-for-everyone.jpg" alt="" /></div>
                    {/* Description of the article */}
                    <div className="py-[92px] pl-[33px] pr-6">
                        <h1 className="font-bold font-dm-sans text-[32px] tracking-[3.33px] mb-4 uppercase md:text-[40px] md:leading-[48px] md:tracking-[4.17px]">Create and share your photo stories</h1>
                        <p className="font-dm-sans text-[15px] leading-[25px] opacity-60 mb-[23px]">
                            Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.
                        </p>
                        <ArrowButtonBlack>
                            Get an invite
                        </ArrowButtonBlack>
                    </div>
                </article>
            </main>

            {/* Stories section */}
            <section>
                <Stories />
            </section>

            {/* Features section */}
            <section>
                <Features />
            </section>
            <footer>

            </footer>
        </div>
    </MainLayout>
  )
}
