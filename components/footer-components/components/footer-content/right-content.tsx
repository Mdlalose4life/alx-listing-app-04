const LeftContent: React.FC = () => {
    return (
      <div className="w-full">
        <div className="flex flex-col justify-center lg:justify-start w-[100%] lg:w-[635px] pl-6 gap-7 mt-6">
          <img src="/assets/alx-white-logo.svg" alt="logo" className="h-10 w-25"/>
          <p className="text-white text-[11px] lg:text-[16px]">
            ALX is a platform where travelers can
            discover and book unique, comfortable,
            and affordable lodging options worldwide. 
            From cozy city apartments and tranquil countryside 
            retreats to exotic beachside villas, ALX connects you 
            with the perfect place to stay for any trip.
          </p>
        </div>
      </div>
    )
  }
  export default LeftContent;