import { useState } from "react"
import { Toggle } from "./Toggle";
import { Options } from "./Options";

export const Subscriptions = () => {

    const [yearlyPlan, setYearlyPlan] = useState(true);

  return (
    <div className="flex flex-col">
        {/* Monthly & Yearly toggle */}
        <Toggle yearlyPlan={yearlyPlan} setYearlyPlan={setYearlyPlan} />

        {/* Options */}
        <Options yearlyPlan={yearlyPlan} />
    </div>
  )
}
