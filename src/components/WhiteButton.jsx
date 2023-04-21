
export const WhiteButton = ({children}) => {
  return (
    <>
        <button className="w-full min-w-[158px] px-6 py-3 bg-white text-black font-dm-sans font-bold text-xs leading-[16px] text-center tracking-[2px] uppercase hover:bg-light-grey hover:text-black">
            {children}
        </button>
    </>
  )
}
