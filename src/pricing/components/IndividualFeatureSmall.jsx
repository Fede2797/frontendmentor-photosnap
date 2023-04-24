
export const IndividualFeatureSmall = ({feature}) => {
  return (
    <>
        <tr>
            <td colSpan={3} className="pt-[23px] pb-4">
                <h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase">
                    {feature.title}
                </h4>
            </td>
        </tr>
        <tr className="">
            <td className="w-1/3">
                {/* Name of the plan */}
                <h5 className="font-bold font-dm-sans text-[10px] leading-[16px] tracking-[1.67px] uppercase mb-2 opacity-50">Basic</h5>
            </td>
            <td className="w-1/3">
                {/* Name of the plan */}
                <h5 className="font-bold font-dm-sans text-[10px] leading-[16px] tracking-[1.67px] uppercase mb-2 opacity-50">Pro</h5>
            </td>
            <td className="w-1/3">
                {/* Name of the plan */}
                <h5 className="font-bold font-dm-sans text-[10px] leading-[16px] tracking-[1.67px] uppercase mb-2 opacity-50">Business</h5>
            </td>
        </tr>
        <tr className="border-b-[1px] border-[#DFDFDF]">
            <td className="w-1/3 pb-5">
                {/* Covered or not */}
                {
                    feature.basic 
                    ? (<div className="w-4 h-3">
                            <img src="pricing/desktop/check.svg" alt="" />
                        </div>) 
                    : ''
                }
            </td>
            <td className="w-1/3 pb-5" >
                {/* Covered or not */}
                {
                    feature.pro 
                    ? (<div className="w-4 h-3">
                            <img src="pricing/desktop/check.svg" alt="" />
                        </div>) 
                    : ''
                }
            </td>
            <td className="w-1/3 pb-5" >
                {/* Covered or not */}
                {
                    feature.business 
                    ? (<div className="w-4 h-3">
                            <img src="pricing/desktop/check.svg" alt="" />
                        </div>) 
                    : ''
                }
            </td>
        </tr>
    </>
  )
}
