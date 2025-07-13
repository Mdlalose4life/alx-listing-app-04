import HorizintalDevider from "@/components/common/Dividers/Horizontal-devider"

const PropertyAmneties: React.FC = () => {
    return (
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <p>Each home is fully equipped to meet your needs, with ample space and privacy.</p>
        <ul className="inline-grid grid-cols-2 gap-y-2 list-none mb-10">
            <li className="flex items-center gap-2">
            <img src="/assets/mountain.svg" alt="Save" />
            <span>Mountain view</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/sunrise.svg" alt="Save" />
            <span>Shared beach access</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/chef.svg" alt="Save" />
            <span>Chef</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/cleaning.svg" alt="Save" />
            <span>Cleaning available during stay</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/pool.svg" alt="Save" />
            <span>Pool - infinity</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/pan.svg" alt="Save" />
            <span>Kitchen</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/bell.svg" alt="Save" />
            <span>Butler</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/shaker.svg" alt="Save" />
            <span>Bartender</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/hot-tub.svg" alt="Save" />
            <span>Hot tub</span>
            </li>
            <li className="flex items-center gap-2">
            <img src="/assets/wifi.svg" alt="Save" />
            <span>Wifi</span>
            </li>
        </ul>
        {/* <ul className="flex flex-wrap space-x-4">
            {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
            </li>
            ))}
        </ul> */}
        <HorizintalDevider color="bg-[#E6E6E6]" weight="w-[1027.01px]"/>
    </div>
    )
}
export default PropertyAmneties