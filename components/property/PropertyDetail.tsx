import { PropertyProps } from "@/interfaces/index";
import ReviewSection from "./BookingSection";
import BookingSection from "./ReviewSection";
import PropertyPictures from "./components/PropertyPictures";
import PropatyDescription from "./components/PropertyDescriptio";
import PropertyAmneties from "./components/PropertyAmneties";
import PropertyServiceSumary from "./components/PropertService";
import PropertyDetailsHeader from "./components/PropertyDetailsHeader";
import HorizintalDevider from "../common/Dividers/Horizontal-devider";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto">
      <div>
        <PropertyDetailsHeader property={property}/>
      </div>
      <PropertyPictures/>
      <section>
        <PropertyServiceSumary/>
      </section>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col flex-1/2">
          <section>
            <PropatyDescription/>
          </section>
          <section>
        <div className="flex flex-col">
          <div className="mt-6">
            <PropertyAmneties/>
          </div>
          <div className="py-16">
            <ReviewSection/>
          </div>
        </div>
      </section>
        </div>
        <section className="flex flex-1/2">
          <aside className="w-[535px]">
              <BookingSection price={0}/>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default PropertyDetail;