const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg h-full">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex flex-col mt-4">
      <img src="/assets/414521765.jpg" alt="Property" className="w-full h-full lg:h-[342px] lg:w-[539px] object-cover rounded-md" />
      <div className="ml-1">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <div className="flex gap-[5.38px] mb-2">
            <img src="/assets/star.svg" alt="Rating_Star" className="h-[17px]"/>
            <p className="text-sm text-gray-500">4.76 <span className="text-[#8F8F8F8]">(345 reviews)</span></p>
        </div>
        <p className="flex flex-row gap-1.5 text-sm text-gray-500"> 
            <span className="border-1 border-[#EEEEEE] bg-[#EEEEEE] rounded-[2.79px] px-[5.5px] py-[3.37px]">{bookingDetails.startDate}</span> 
            <span className="border-1 border-[#EEEEEE] bg-[#EEEEEE] rounded-[2.79px] px-[5.5px] py-[3.37px]">1 PM </span> 
            <span className="border-1 border-[#EEEEEE] bg-[#EEEEEE] rounded-[2.79px] px-[5.5px] py-[3.37px]">{bookingDetails.totalNights} Nights</span>
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between font-semibold">
        <p className="text-gray-500">Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p className="text-gray-500">Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-[25.7px]">
        <p>Grand Total</p>
        <p className="font-semibold">${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;