import { useState } from "react"
import { Toggle, Options, CompareSmall } from "./";
import { CompareLarge } from "./CompareLarge";


export const Subscriptions = () => {

    const [yearlyPlan, setYearlyPlan] = useState(false);

  return (
    <div className="flex flex-col">
        {/* Monthly & Yearly toggle */}
        <Toggle yearlyPlan={yearlyPlan} setYearlyPlan={setYearlyPlan} />

        {/* Options */}
        <Options yearlyPlan={yearlyPlan} />

        {/* Comparation table for small screens */}
        <CompareSmall />
        {/* Comparation table for wider screens */}
        <CompareLarge />
    </div>
  )
}
