
export const Toggle = ({yearlyPlan, setYearlyPlan}) => {

    const toggleYearlyPlan = () => {
        setYearlyPlan( !yearlyPlan );
    }

    const yearlyOpacity = ( yearlyPlan ) ? 'opacity-100' : 'opacity-50';
    const monthlyOpacity  = ( yearlyPlan ) ? 'opacity-50' : 'opacity-100';

    return (
        <div className="w-full mt-14 mb-10 flex items-center justify-center">
            <h3 className={`${monthlyOpacity} font-bold font-dm-sans text-lg leading-[25px]`}>Monthly</h3>
            {/* Toggle */}
            <label className="relative mx-8 cursor-pointer">
                <input 
                    type="checkbox" 
                    checked={yearlyPlan} 
                    onChange={toggleYearlyPlan}
                    className="sr-only peer" 
                    onClick={ () => toggleYearlyPlan() }
                />
                <div className="w-[64px] h-[32px] bg-light-grey rounded-[16px] peer-checked:after:translate-x-[32px] peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-black after:rounded-full after:h-[24px] after:w-[24px] after:transition-all dark:border-gray-600 peer-checked:bg-black peer-checked:after:bg-white"></div>
            </label>
            <h3 className={`${yearlyOpacity} font-bold font-dm-sans text-lg leading-[25px]`}>Yearly</h3>
        </div>
    )
}
