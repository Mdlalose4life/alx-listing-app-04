import HorizintalDevider from "../../common/Dividers/Horizontal-devider";
import CancellationPolicy from "./CancellationPolicy";
import GroundRules from "./GroundRules";

const BookingForm = () => (
  <div className="bg-white p-6 rounded-lg">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="font-semibold">
          <label>First Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md border-[#E7E6E6]" />
        </div>
        <div className="font-semibold">
          <label>Last Name</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md border-[#E7E6E6]" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 rounded-md border-[#E7E6E6]">
        <div className="font-semibold">
          <label>Email</label>
          <input type="email" className="border p-2 w-full mt-2 rounded-md border-[#E7E6E6]" />
        </div>
        <div className="font-semibold">
          <label>Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2 rounded-md border-[#E7E6E6]" />
        </div>
        <div className="flex flex-row items-center gap-1.5">
            <input
            type="checkbox"
            id="Alert"
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-sm text-black mb-[22px]">
                Receive text message update about your booking. Messages rates may apply.
            </label>
        </div>
        <div className="inline lg:hidden">
            <HorizintalDevider color="bg-[#E6E6E6]"/>
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-[37px]">Pay with</h2>
        <div className="mt-[32px]">
            <input 
                type="text" 
                className="border p-2 w-full rounded-t border-[#E7E6E6]"
                placeholder="Card Number"
            />

            <div className="grid grid-cols-2">
                <input 
                type="text" 
                className="border p-2 w-full rounded-b border-[#E7E6E6]"
                placeholder="Expiration Date" 
                />
                <input 
                type="text" className="border p-2 w-full rounded-b border-[#E7E6E6]"
                placeholder="CVV" />
            </div>
        </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-[32px] mb-[46px]">
            <input 
                type="text" 
                className="border p-2 w-full rounded-t border-[#E7E6E6]"
                placeholder="Street Address"
            />
                <input
                type="text" 
                className="border p-2 w-full border-[#E7E6E6]" 
                placeholder="City"
                />

            <div className="grid grid-cols-2">
                <input 
                type="text" 
                className="border p-2 w-full border-[#E7E6E6]"
                placeholder="State"
                />
                <input 
                type="text" 
                className="border p-2 w-full border-[#E7E6E6]"
                placeholder="Zip Code" 
                />
            </div>

            <input 
                type="text" 
                className="border p-2 w-full rounded-b border-[#E7E6E6]"
                placeholder="Country"
            />
        </div>

      <HorizintalDevider color="bg-[#E6E6E6]"/>
      <div>
        <CancellationPolicy/>
        <HorizintalDevider color="bg-[#E6E6E6]"/>
        <GroundRules/>
        <HorizintalDevider color="bg-[#E6E6E6]"/>
      </div>

      {/* Submit Button */}
      <button className="mt-6 lg:mb-[90px] bg-[#34967C] text-white py-2 px-4 rounded-md w-full lg:w-[30%]">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;