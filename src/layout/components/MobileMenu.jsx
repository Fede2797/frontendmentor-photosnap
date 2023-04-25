import React from 'react'
import { Link } from 'react-router-dom'

export const MobileMenu = ({showMenu}) => {
  return (
    <>
    {
        ( showMenu ) 
            ? (
                <>
                    <div className="absolute flex flex-col w-full gap-5 top-[71px] left-0 right-0 p-8 mb-5 bg-white text-center">

                        {/* Menus */}
                        <Link to="/stories"><span className="font-bold font-dm-sans text-[15px] leading-[20px] tracking-[2.5px] uppercase">Stories</span></Link>

                        <Link to="/features"><span className="font-bold font-dm-sans text-[15px] leading-[20px] tracking-[2.5px] uppercase">Features</span></Link>

                        <Link to="/pricing"><span className="font-bold font-dm-sans text-[15px] leading-[20px] tracking-[2.5px] uppercase">Pricing</span></Link>

                        {/* Separator */}
                        <hr className="border-black border-opacity-25"/>

                        {/* CTA Button */}
                        <button className="w-full min-w-[158px] px-6 py-3 bg-black text-white font-dm-sans font-bold text-[15px] text-center tracking-[2.5px] uppercase hover:bg-light-grey hover:text-black">
                            Get an invite
                        </button>
                    </div>
                    {/* Shadow */}
                    <div className="absolute bg-black opacity-50 top-[335px] left-0 right-0 h-screen"></div>
                </> )
            : ('')
        }
    </>
  )
}
