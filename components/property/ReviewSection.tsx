import HorizintalDevider from "../common/Dividers/Horizontal-devider";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
    return (
      <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-xl mb-6">
            <strong>${price}</strong><span className="text-[#8E8E8E]">/night</span>
          </h3>
        <HorizintalDevider color="bg-gray-200" thickness="h-[1px]"/>
        <div className="mt-4">
          <label className="font-semibold rounded-lg">Check-in</label>
          <input type="date" className="border border-gray-300 p-2 w-full mt-2 rounded-md text-[#BEBEBE]"/>
        </div>
        <div className="mt-4">
          <label className="font-semibold">Check-out</label>
          <input type="date" className="border border-gray-300 p-2 w-full mt-2 rounded-md text-[#BEBEBE]"/>
        </div>

        <div className="mt-4 flex flex-row justify-between">
          <p className="font-semibold text-[#8F8F8F]">$50 x 7 nights:</p>
          <span className="font-bold">$350</span>
        </div>

        <div className="mt-4 flex flex-row justify-between">
          <p className="font-semibold text-[#8F8F8F]">Weekly discounts:</p>
          <span className="font-bold">$88</span>
        </div>

        <div className="mt-4 mb-4 flex flex-row justify-between">
          <p className="font-semibold text-[#8F8F8F]">Service fee:</p>
          <span className="font-bold">$33</span>
        </div>

        <HorizintalDevider color="bg-gray-200" thickness="h-[1px]"/>

        {/* Total payment */}
        <div className="mt-4 flex flex-row justify-between">
          <p className="font-semibold text-[#8F8F8F]">Total payment:</p>
          <span className="font-bold text-[#34967C]">${price * 7}</span>
        </div>

        {/* Reserve button */}
        <button className="mt-4 bg-[#34967C] text-white py-2 px-4 rounded-md w-full font-semibold">Reserve now</button>
      </div>
    );
  };

  export default BookingSection;
  