const PropertyServiceSumary: React.FC = () => {
    return(
        <div className="flex flex-row gap-3 py-3.5">
            <div className="flex border-2 border-[#E9E9E9] py-[8.64px] px-[20.84px] rounded-full items-center gap-2">
            <img src="/assets/bed.svg" alt="Bedrooms"/>
            4 Bedrooms
            </div>
            <div className="flex border-2 border-[#E9E9E9] py-[8.64px] px-[20.84px] rounded-full items-center gap-2">
            <img src="/assets/bathtub.svg" alt="ButhTubs"/>
            2 Bathroom
            </div>
            <div className="flex border-2 border-[#E9E9E9] py-[8.64px] px-[20.84px] rounded-full items-center gap-2">
            <img src="/assets/people.svg"/>
            2-4 guests
            </div>
        </div>
    )
}
export default PropertyServiceSumary