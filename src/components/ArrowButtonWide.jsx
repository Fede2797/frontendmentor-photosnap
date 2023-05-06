
export const ArrowButtonWide = ({children, extraStyle}) => {
  return (
    <button className={`flex w-full justify-between font-dm-sans font-bold text-xs text-white leading-[16px] text-right tracking-[2px] uppercase hover:underline duration-150 ${extraStyle}`}>
        {children}
        <img className="invert" src="shared/desktop/arrow.svg" alt="" />
    </button>
  )
}
