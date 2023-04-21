import { BlackButton } from "../../components/BlackButton"
import { WhiteButton } from "../../components/WhiteButton"

export const Options = ({yearlyPlan}) => {
  return (
    <div className="w-full mb-6 flex flex-col justify-center items-center lg:flex-row lg:gap-[30px]">
        {/* First option */}
        <article className="mb-6 flex flex-col max-w-[350px] justify-center mx-7 px-5 text-center bg-[#F5F5F5] md:max-w-[700px] md:flex-row lg:max-w-[350px] lg:mb-0 lg:mx-0">
            <div className="w-full md:text-left md:ml-5 lg:text-center lg:mx-5">
                <h2 className="mb-[18px] mt-14 font-bold font-dm-sans text-2xl leading-[25px] md:mt-10">Basic</h2>
                <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                {/* Pricing for small and large screens */}
                <div className="flex flex-col md:hidden lg:flex">
                    <h2 className="font-bold font-dm-sans text-[40px] leading-[48px] tracking-[4.17px]">
                        ${ yearlyPlan ? 190 : 19 }.00
                    </h2>
                    <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">per month</p>
                </div>
                <div className="max-w-[240px] mx-auto mb-10 md:mx-0 md:max-w-[270px]">
                    <BlackButton>Pick plan</BlackButton>
                </div>
            </div>
            {/* Pricing for medium screens */}
            <div className="hidden md:flex w-full flex-col mt-10 lg:hidden text-right mr-7">
                <h2 className="font-bold font-dm-sans text-[40px] leading-[48px] tracking-[4.17px]">
                    ${ yearlyPlan ? 190 : 19 }.00
                </h2>
                <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">per month</p>
            </div>
        </article>
        {/* Second option */}
        <article className="mb-6 flex flex-col max-w-[350px] justify-center mx-7 text-center bg-black text-white md:max-w-[700px] md:flex-row lg:max-w-[350px] lg:flex-col lg:mb-0 lg:mx-0">

            {/* Horizontal colorful rectangle */}
            <div className='w-full h-[6px] bg-gradient-to-tr from-[#FFC593] via-[#BC7198] to-[#5A77FF] md:hidden lg:block' />
            {/* Vertical colorful rectangle */}
            <div className='hidden min-w-[6px] h-[278px] bg-gradient-to-t from-[#FFC593] via-[#BC7198] to-[#5A77FF] md:block lg:hidden'/>

            {/* Main card */}
            <div className="flex flex-col px-5 md:flex-row lg:mt-[25px] lg:mb-[30px]">
                <div className="w-full md:text-left md:ml-5 lg:text-center lg:mx-5">
                    <h2 className="mb-[18px] mt-14 font-bold font-dm-sans text-2xl leading-[25px] md:mt-10">Pro</h2>
                    <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">More advanced features available. Recommended for photography veterans and professionals.</p>
                    {/* Pricing for small and large screens */}
                    <div className="flex flex-col md:hidden lg:flex">
                        <h2 className="font-bold font-dm-sans text-[40px] leading-[48px] tracking-[4.17px]">
                            ${ yearlyPlan ? 390 : 39 }.00
                        </h2>
                        <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">per month</p>
                    </div>
                    <div className="max-w-[240px] mx-auto mb-10 md:mx-0 md:max-w-[270px]">
                        {/* <div className="max-w-[270px] mx-auto mb-10 md:mx-0 "> */}
                            <WhiteButton>Pick plan</WhiteButton>
                        {/* </div> */}
                    </div>
                </div>
                {/* Pricing for medium screens */}
                <div className="hidden md:flex w-full flex-col mt-10 lg:hidden text-right mr-7">
                    <h2 className="font-bold font-dm-sans text-[40px] leading-[48px] tracking-[4.17px]">
                        ${ yearlyPlan ? 390 : 39 }.00
                    </h2>
                    <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">per month</p>
                </div>
            </div>
        </article>
        {/* Third option */}
        <article className="mb-6 flex flex-col max-w-[350px] justify-center mx-7 px-5 text-center bg-[#F5F5F5] md:max-w-[700px] md:flex-row lg:max-w-[350px] lg:mb-0 lg:mx-0">
            <div className="w-full md:text-left md:ml-5 lg:text-center lg:mx-5">
                <h2 className="mb-[18px] mt-14 font-bold font-dm-sans text-2xl leading-[25px] md:mt-10">Business</h2>
                <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">Additional features available such as more detailed metrics. Recommended for business owners.</p>
                {/* Pricing for small and large screens */}
                <div className="flex flex-col md:hidden lg:flex">
                    <h2 className="font-bold font-dm-sans text-[40px] leading-[48px] tracking-[4.17px]">
                        ${ yearlyPlan ? 990 : 99 }.00
                    </h2>
                    <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">per month</p>
                </div>
                <div className="max-w-[240px] mx-auto mb-10 md:mx-0 md:max-w-[270px]">
                    <BlackButton>Pick plan</BlackButton>
                </div>
            </div>
            {/* Pricing for medium screens */}
            <div className="hidden md:flex w-full flex-col mt-10 lg:hidden text-right mr-7">
                <h2 className="font-bold font-dm-sans text-[40px] leading-[48px] tracking-[4.17px]">
                ${ yearlyPlan ? 990 : 99 }.00
                </h2>
                <p className="mb-10 font-dm-sans text-[15px] leading-[25px] opacity-60">per month</p>
            </div>
        </article>
    </div>
  )
}
