import Hero from "@/components/hero-section/Hero";
import TopBook from "@/components/body/top-book";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import MoreListing from "@/components/body/more-listing";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <section className="w-full text-center rounded-full">
          <Hero />
        </section>
      </div>

      {/* Top Book Section */}
      <section className="px-4 md:px-8 lg:px-16 mt-8">
        {/* <TopBook /> */}
      </section>

      {/* Property Listings Section */}
      <section className="flex flex-col justify-center gap-10 px-4 md:px-8 lg:px-16 pt-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE?.map(({ name, address, rating, category, price, offers, image }, index) => (
            <Card
              key={index}
              name={name}
              address={address}
              rating={rating}
              category={category}
              price={price}
              offers={offers}
              image={image}
            />
          ))}
        </div>
        <MoreListing />
      </section>
    </main>
  );
};

export default Home;
