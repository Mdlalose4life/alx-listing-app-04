const RightContent: React.FC = () => {
    return (
      <div className="">
        <div className="flex flex-row text-white gap-50">
            <div className="flex flex-col gap-5">
                <h3>Explore</h3>
                <p>Apartments in Duba</p>
                <p>Hotels in New York</p>
                <p>Villa in Spain</p>
                <p>Mansion in Indonesia</p>
            </div>
            <div className="flex flex-col gap-5">
                <h3>Company</h3>
                    <p>About us</p>
                    <p>blog</p>
                    <p>Career</p>
                    <p>Customers</p>
                    <p>Brand</p>     
            </div>
            <div className="flex flex-col gap-5">
                <h3>Help</h3>
                <p>Support</p>
                <p>Cancel booking</p>
                <p>Refunds Process</p>
            </div>
        </div>
      </div>
    )
  }
  export default RightContent;