import { SectionsMenu } from "./SectionsMenu"
import { BlackButton } from "../../components/BlackButton"
import { useState } from "react"
import { MenuButton } from "./MenuButton";

export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu( !showMenu )
    }
    
    return (
        <nav className='relative flex w-full max-w-[1440px] h-[72px] px-6 items-center justify-between md:px-10 md:mx-auto'>
            {/* Logo & Name */}
            <div className="hover:cursor-pointer">
                <img src="shared/desktop/logo.svg" aria-label="photosnap logo" />
            </div>

            {/* Menus */}
            <SectionsMenu />

            {/* CTA Button */}
            <div className="hidden md:block">
                <BlackButton>
                    Get an invite
                </BlackButton>
            </div>

            {/* Menu button*/}
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
            
            
            {/* Mobile menu shown */}
            {
                ( showMenu ) 
                    ? (
                        <div className="absolute flex flex-col w-full gap-5 top-[71px] left-0 right-0 p-8 mb-5 bg-white text-center">

                            {/* Menus */}
                            <span className="font-bold font-dm-sans text-[15px] leading-[20px] tracking-[2.5px] uppercase">Stories</span>
                            <span className="font-bold font-dm-sans text-[15px] leading-[20px] tracking-[2.5px] uppercase">Features</span>
                            <span className="font-bold font-dm-sans text-[15px] leading-[20px] tracking-[2.5px] uppercase">Pricing</span>

                            {/* Separator */}
                            <hr className="border-black border-opacity-25"/>

                            {/* CTA Button */}
                            <button className="w-full min-w-[158px] px-6 py-3 bg-black text-white font-dm-sans font-bold text-[15px] text-center tracking-[2.5px] uppercase hover:bg-light-grey hover:text-black">
                                Get an invite
                            </button>
                            {/* Shadow */}
                        </div> )
                    : ('')
            }
        </nav>
    )
}
