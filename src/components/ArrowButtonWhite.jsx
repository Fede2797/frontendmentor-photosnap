
export const ArrowButtonWhite = ({children}) => {
  return (
    <>
        <button className="flex gap-4 font-dm-sans font-bold text-xs text-white leading-[16px] text-right tracking-[2px] uppercase hover:underline">
            {children}
            <img className="invert" src="shared/desktop/arrow.svg" alt="" />
        </button>
    </>
  )
}
