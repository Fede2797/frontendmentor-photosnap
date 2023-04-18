import { SectionsMenu } from "./SectionsMenu"
import { BlackButton } from "../../components/BlackButton"

export const Navbar = () => {
    
  return (
    <nav className='flex w-full max-w-[1110px] h-[72px] px-6 items-center justify-between md:px-10 md:mx-auto'>
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

        {/* Hamburger button*/}
        <div className="md:hidden">
            <img src="shared/mobile/menu.svg" alt="" />
        </div>
    </nav>
  )
}
