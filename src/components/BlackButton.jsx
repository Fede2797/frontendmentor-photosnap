
export const BlackButton = ({children}) => {
  return (
    <>
        <button className="min-w-[158px] px-6 py-3 bg-black text-white font-dm-sans font-bold text-xs leading-[16px] text-center tracking-[2px] uppercase hover:bg-light-grey hover:text-black">
            {children}
        </button>
    </>
  )
}
