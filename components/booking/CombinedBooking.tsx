import BookingForm from "./components/BookingForm";
import OrderSummary from "./components/OrderSummary";

  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

const CombinedBooking = () => (
  <div className="flex flex-col-reverse lg:flex-row gap-6">
    <BookingForm/>
    <OrderSummary bookingDetails={bookingDetails} />
  </div>
);

export default CombinedBooking;