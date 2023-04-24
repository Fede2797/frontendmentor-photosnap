import { Link } from "react-router-dom"
import { ArrowButtonWhite } from "../../components/ArrowButtonWhite"

export const Footer = () => {
  return (
    <footer>
        <div className="flex w-full px-8 py-14 justify-center bg-black md:px-10 md:py-16">
            <div className="w-full max-w-[1100px] flex flex-col justify-between items-center text-white md:flex-row">
                {/* Logo, sections & social networks */}
                <div className="flex flex-col lg:w-full lg:flex-row">
                    {/* Logo & social networks & Horizontal sections */}
                    <div className="flex flex-col items-center md:items-start lg:justify-between">
                        {/* Logo & Horizontal sections */}
                        <div className="flex flex-col">
                            {/* Logo */}
                            <div className="mb-8">
                                <img src="shared/desktop/white-logo.svg" aria-label="photosnap logo" />
                            </div>
                            {/* Horizontal sections */}
                            <div className="hidden md:flex justify-between gap-[26px] lg:hidden">
                                <Link to="/"><h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase hover:cursor-pointer">Home</h4></Link>
                                <Link to="/stories"><h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase hover:cursor-pointer">Stories</h4></Link>
                                <Link to="/features"><h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase hover:cursor-pointer">Features</h4></Link>
                                <Link to="/pricing"><h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase hover:cursor-pointer">Pricing</h4></Link>
                            </div>
                        </div>
                        {/* Social networks */}
                        <div className="flex w-full max-w-[155px] justify-between md:mt-[72px]">
                            <img className="hover:cursor-pointer" src="shared/desktop/facebook.svg" alt="facebook link" />
                            <img className="hover:cursor-pointer" src="shared/desktop/youtube.svg" alt="youtube link" />
                            <img className="hover:cursor-pointer" src="shared/desktop/twitter.svg" alt="twitter link" />
                            <img className="hover:cursor-pointer" src="shared/desktop/pinterest.svg" alt="pinterest link" />
                            <img className="hover:cursor-pointer" src="shared/desktop/instagram.svg" alt="instagram link" />
                        </div>
                    </div>
                    {/* Vertical sections */}
                    <div className="flex flex-col gap-5 mt-12 text-center md:hidden lg:mt-0 lg:flex lg:text-left lg:ml-[20%] lg:justify-between lg:gap-0">
                        <Link to="/"><h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase hover:cursor-pointer">Home</h4></Link>
                        <Link to="/stories"><h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase hover:cursor-pointer">Stories</h4></Link>
                        <Link to="/features"><h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase hover:cursor-pointer">Features</h4></Link>
                        <Link to="/pricing"><h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase hover:cursor-pointer">Pricing</h4></Link>
                    </div>
                </div>
                {/* CTA and Copy */}
                <div className="flex flex-col mt-[120px] items-center md:mt-0 lg:w-full md:h-full md:justify-between md:items-end">
                    {/* CTA Button */}
                    <div className="mb-8">
                        <ArrowButtonWhite>Get an invite</ArrowButtonWhite>
                    </div>
                    {/* Copyright */}
                    <div className="">
                        <p className="font-dm-sans text-[15px] opacity-50">
                            Copyright 2019. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
