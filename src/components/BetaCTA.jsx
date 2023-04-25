import { HorizontalColorfulRectangle } from "../layout/components/HorizontalColorfulRectangle"
import { VerticalColorfulRectangle } from "../layout/components/VerticalColorfulRectangle"
import { ArrowButtonWhite } from "./ArrowButtonWhite"

export const BetaCTA = () => {
  return (
    <div className="bg-beta-cta bg-no-repeat bg-cover text-white md:flex">
        {/* Colorful rectangle for small screens */}
        <div className="pl-[32px] md:hidden">
          <HorizontalColorfulRectangle />
        </div>
        {/* Colorful rectangle for wider screens */}
        <div className="hidden md:h-[272px] md:block z-50">
          <VerticalColorfulRectangle />
        </div>

        <div className="flex flex-col w-full py-16 px-8 md:flex-row md:justify-between xl:mx-[165px]">
          <div className="flex flex-col">
            <h1 className="font-bold font-dm-sans text-[32px] leading-[40px] tracking-[3.33px] uppercase md:text-[40px] md:tracking-[4.17px] md:leading-[48px] md:max-w-[464px] md:m-0">
              We’re in beta.
            </h1>
            <h1 className="mb-[24px] font-bold font-dm-sans text-[32px] leading-[40px] tracking-[3.33px] uppercase md:text-[40px] md:tracking-[4.17px] md:leading-[48px] md:max-w-[464px] md:m-0">
              Get your invite today!
            </h1>
          </div>
          <div className="md:flex md:items-center">
            <ArrowButtonWhite>
              Get an invite
            </ArrowButtonWhite>
          </div>
        </div>
    </div>
  )
}
