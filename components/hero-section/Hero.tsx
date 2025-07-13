const Hero: React.FC = () => {
    return (
      <>
        {/* Mobile Hero */}
        <div className="block md:hidden">
          <img
            src="/assets/HeroMobile.svg"
            alt="mobile hero"
            className="w-full h-auto rounded-md"
          />
        </div>
  
        {/* Tablet Hero */}
        <div className="hidden md:block lg:hidden">
          <img
            src="/assets/HeroTablet.svg"
            alt="tablet hero"
            className="w-full h-auto rounded-md"
          />
        </div>
  
        {/* Desktop Hero */}
        <div className="hidden lg:flex justify-center">
          <img
            src="/assets/HeroSection.svg"
            alt="desktop hero"
            className="h-[481px]"
          />
        </div>
      </>
    );
  };
  
  export default Hero;
  