const RightContent: React.FC = () => {
    return (
      <div className="">
        <div className="flex flex-wrap lg:flex-nowrap text-white text-[12px] lg:text-[16px] gap-[60px] lg:gap-50">
            <div className="flex flex-col gap-[9px] lg:gap-5">
                <h3 className="font-semibold">Explore</h3>
                <p>Apartments in Duba</p>
                <p>Hotels in New York</p>
                <p>Villa in Spain</p>
                <p>Mansion in Indonesia</p>
            </div>
            <div className="flex flex-col gap-[9px] lg:gap-5">
                <h3 className="font-semibold">Company</h3>
                    <p>About us</p>
                    <p>blog</p>
                    <p>Career</p>
                    <p>Customers</p>
                    <p>Brand</p>     
            </div>
            <div className="flex flex-col gap-[9px] lg:gap-5">
                <h3 className="font-semibold">Help</h3>
                <p>Support</p>
                <p>Cancel booking</p>
                <p>Refunds Process</p>
            </div>
        </div>
      </div>
    )
  }
  export default RightContent;