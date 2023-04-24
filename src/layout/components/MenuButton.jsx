
export const MenuButton = ({showMenu, toggleMenu}) => {
  return (
    <>
        {
            ( showMenu ) 
                ? (
                    <button 
                        className="md:hidden"
                        onClick={ toggleMenu }
                    >
                        <img src="shared/mobile/close.svg" alt="" />
                    </button> ) 
                : (
                    <button 
                        className="md:hidden"
                        onClick={ toggleMenu }
                    >
                        <img src="shared/mobile/menu.svg" alt="" />
                    </button> )
        }
    </>
  )
}
