import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface PropertyDetailsHeaderProps {
  property: {
    name: string;
    rating: number;
    address: {
      city: string;
      country: string;
    };
  };
}

const PropertyDetailsHeader: React.FC<PropertyDetailsHeaderProps> = ({ property }) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="lg:hidden">
          <Link href="/" className="flex flex-row items-center gap-[9px] p-[9px]">
            <FaArrowLeft />
            <span>Return</span>
          </Link>
        </div>
        <h1 className="hidden lg:inline text-4xl font-bold">{property.name}</h1>
        <div className="flex flex-row gap-[16px] px-[16px]">
          <div className="flex lg:border-2 border-[#E9E9E9] rounded-full lg:py-[13px] lg:px-[13px] gap-[40px] lg:gap-2">
            <img src="/assets/save.svg" alt="Save" />
            <span className="hidden lg:inline">save</span>
          </div>
          <div className="flex lg:border-2 border-[#E9E9E9] rounded-full lg:py-[13px] lg:px-[13px] gap-[40px] lg:gap-2">
            <img src="/assets/heart.svg" alt="Rating_Star" />
            <span className="hidden lg:inline">share</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-2 mt-2">
        <span className="text-yellow-500 flex items-center gap-2 py-2">
          <img src="/assets/star.svg" alt="Rating_Star" />
          {property.rating} stars
        </span>
        <span className="flex items-center gap-2 py-2">
          <img src="/assets/map.svg" alt="Location Icon" />
          {property.address.city}, {property.address.country}
        </span>
      </div>
    </>
  );
};

export default PropertyDetailsHeader;
