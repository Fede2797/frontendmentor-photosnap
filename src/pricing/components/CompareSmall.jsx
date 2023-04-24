import { features } from "../../data/data"
import { IndividualFeatureSmall } from "./IndividualFeatureSmall"

export const CompareSmall = () => {
  return (
    <div className="flex flex-col mx-7 md:hidden mb-16 mt-4">
        <table className="w-full">
            <tr>
                <th colSpan={3}className="pb-[23px] text-left border-b-[1px] border-black">
                    <h4 className="font-bold font-dm-sans text-xs leading-[16px] tracking-[2px] uppercase">
                        The features
                    </h4>
                </th>
            </tr>
            {
                features.map( (feature, index) => (
                    <IndividualFeatureSmall key={index} feature={feature} />
                ))
            }
        </table>
    </div>
  )
}
