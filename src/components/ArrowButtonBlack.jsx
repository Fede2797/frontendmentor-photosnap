
export const ArrowButtonBlack = ({children}) => {
  return (
    <>
      <button className="flex gap-4 font-dm-sans font-bold text-xs leading-[16px] text-right tracking-[2px] uppercase hover:underline duration-150">
        {children}
        <img src="shared/desktop/arrow.svg" alt="" />
      </button>
    </>
  )
}
