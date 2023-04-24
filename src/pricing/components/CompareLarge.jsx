import { features } from "../../data/data"

export const CompareLarge = () => {
  return (
    <div className="hidden md:flex flex-col w-full max-w-[700px] md:mx-auto md:mt-16 md:mb-[112px] lg:mb-[160px] lg:mt-[112px]">

        <h1 className="md:mb-16 lg:mb-14 font-bold font-dm-sans text-[40px] leading-[48px] tracking-[4.17px] uppercase text-center">Compare</h1>

        <table className="w-full">
            <tbody>
            <tr>
                <th className="pb-[23px] text-left border-b-[1px] border-black">
                    <h4 className="pl-6 font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase">
                        The features
                    </h4>
                </th>
                <th className="pb-[23px] text-left border-b-[1px] border-black">
                    <h4 className="font-bold text-center font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase">
                        Basic
                    </h4>
                </th>
                <th className="pb-[23px] text-left border-b-[1px] border-black">
                    <h4 className="font-bold text-center font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase">
                        Pro
                    </h4>
                </th>
                <th className="pb-[23px] text-left border-b-[1px] border-black">
                    <h4 className="font-bold text-center font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase">
                        Business
                    </h4>
                </th>
            </tr>
            {
                features.map( (feature, index) => (    
                    <tr key={index} className="border-b-[1px] border-[#DFDFDF]">
                        <td className="pt-[23px] w-2/5 pb-5">
                            <h4 className="pl-6 font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase">
                                {feature.title}
                            </h4>
                        </td>
                        <td className="w-1/5 pb-5">
                            {/* Covered or not */}
                            {
                                feature.basic 
                                ? (<div className="w-4 h-3 mx-auto">
                                        <img src="pricing/desktop/check.svg" alt="" />
                                    </div>) 
                                : ''
                            }
                        </td>
                        <td className="w-1/5 pb-5" >
                            {/* Covered or not */}
                            {
                                feature.pro 
                                ? (<div className="w-4 h-3 mx-auto">
                                        <img src="pricing/desktop/check.svg" alt="" />
                                    </div>) 
                                : ''
                            }
                        </td>
                        <td className="w-1/5 pb-5" >
                            {/* Covered or not */}
                            {
                                feature.business 
                                ? (<div className="w-4 h-3 mx-auto">
                                        <img src="pricing/desktop/check.svg" alt="" />
                                    </div>) 
                                : ''
                            }
                        </td>
                    </tr>        
                ))
            }
            </tbody>
        </table>
    </div>
  )
}
