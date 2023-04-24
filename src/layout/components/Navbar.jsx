import { SectionsMenu } from "./SectionsMenu"
import { BlackButton } from "../../components/BlackButton"
import { useState } from "react"
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu( !showMenu )
    }
    
    return (
        <nav className='fixed flex w-full h-[72px] px-6 mt-[-72px] items-center justify-between shadow-sm bg-white md:px-10 md:mx-auto z-[999]'>
            {/* Logo & Name */}
            <div className="hover:cursor-pointer">
                <Link to="/">
                    <img src="shared/desktop/logo.svg" aria-label="photosnap logo" />
                </Link>
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
            <MobileMenu showMenu={showMenu} />
        </nav>
    )
}
