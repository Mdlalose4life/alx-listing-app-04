import HorizintalDevider from "@/components/common/Dividers/Horizontal-devider"
import { useState } from "react"

const PropertyAmneties: React.FC = () => {
    const [expanded, setExpanded] = useState(false)
    
    return (
      <div className="flex flex-col lg:w-[700px]">
        <div className="px-[20px] lg:px-[30px] mb-[49px]">
            <h2 className="text-sm lg:text-2xl font-semibold">What this place offers</h2>
            <p>Each home is fully equipped to meet your needs, with ample space and privacy.</p>
            <ul className={`inline-grid grid-cols-1 lg:grid-cols-2 gap-y-2 list-none mb-10 transition-all duration-500 ease-in-out overflow-hidden ${
                    expanded ? '' : 'max-h-[250px]'
                }`}>
                <li className="flex items-center gap-2">
                <img src="/assets/mountain.svg" alt="Save" />
                <span>Mountain view</span>
                </li>
                <li className="flex items-center gap-2">
                <img src="/assets/sunrise.svg" alt="Save" />
                <span>Shared beach access</span>
                </li>
                <li className="flex items-center gap-2">
                <img src="/assets/chef.svg" alt="Save"/>
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
        { !expanded && (<div 
            className="flex flex-nowrap text-sm justify-center border border-[#AEAEAE] py-[15px] px-[99px] rounded-[8px] lg:hidden"
            onClick={() => setExpanded(true)}
            >
                Show all Amenities
            </div>)}
        </div>
        {/* <ul className="flex flex-wrap space-x-4">
            {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
            </li>
            ))}
        </ul> */}
        <HorizintalDevider color="bg-[#E6E6E6]" weight="w-full lg:w-[1027.01px]"/>
    </div>
    )
}
export default PropertyAmneties