const PropertyServiceSumary: React.FC = () => {
    return(
        <div className="flex flex-row gap-1 lg:gap-2 py-3.5 px-[5px]">
            <div className="flex border-2 border-[#E9E9E9] py-[6.43px] px-[11.56] lg:py-[8.64px] lg:px-[20.84px] rounded-full items-center gap-2">
            <img src="/assets/bed.svg" alt="Bedrooms" className="h-[10px]"/>
                <span className="text-sm">4 Bedrooms</span>
            </div>
            <div className="flex border-2 border-[#E9E9E9] py-[6.64px] px-[11.84px] rounded-full items-center gap-2">
            <img src="/assets/bathtub.svg" alt="ButhTubs" className="h-[10px]"/>
            2 Bathroom
            </div>
            <div className="flex border-2 border-[#E9E9E9] py-[6.64px] px-[11.84px] rounded-full items-center gap-2">
            <img src="/assets/people.svg" alt="People" className="h-[10px]"/>
            2-4 guests
            </div>
        </div>
    )
}
export default PropertyServiceSumary