    
import HorizintalDevider from '@/components/common/Dividers/Horizontal-devider';
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const PropatyDescription: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4">
      <HorizintalDevider color ='bg-[#E6E6E6]' weight='w-[100%] hidden lg:flex'/>
      <br/>
      <h2 className="text-sm lg:text-2xl font-semibold px-[20px] lg:px-[30px]">Description</h2>
      <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-[100%]'/>
      <br/>
      <div className="flex flex-row px-[21px]">
        <div className=" flex flex-col gap-4">
          <div className="w-full lg:w-[1027px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sequi possimus 
              fugiat doloremque quisquam, commodi exercitationem, aspernatur officiis tempore, repellendus aut! Optio modi consectetur, autem maxime dolore minus doloremque 
              quidem impedit corporis cupiditate iure itaque, vero vitae assumenda veniam sint architecto ipsum quae laborum, aspernatur similique beatae necessitatibus. Vel 
              nobis totam laborum quas aut doloribus ea commodi adipisci, ducimus a nihil error architecto sequi animi harum eveniet mollitia placeat temporibus saepe ut, 
              reprehenderit sit repellendus magni tenetur. Delectus quia ipsum fuga aperiam magnam beatae. Inventore sequi possimus fugiat doloremque quisquam, commodi 
              exercitationem, aspernatur officiis tempore, repellendus aut! Optio modi consectetur, autem maxime dolore minus doloremque quidem impedit corporis cupiditate 
              iure itaque, vero vitae assumenda veniam sint architecto ipsum quae laborum, aspernatur similique beatae necessitatibus. Vel nobis totam laborum quas aut doloribus 
              ea commodi adipisci, ducimus a nihil error architecto sequi animi harum eveniet mollitia placeat temporibus saepe ut, reprehenderit sit repellendus magni tenetur. 
              Delectus quia ipsum fuga aperiam magnam beatae.
            </p>
          </div>
          <div
           className={`w-full transition-all duration-500 ease-in-out overflow-hidden ${
              expanded ? '' : 'line-clamp-[1] lg:line-clamp-none'
            }`}>
            <p className="font-bold">The Space</p>
            <p className="uppercase">BedRoom & BathRoom</p> 
            <div className="w-[100%] lg:w-[95%]">
            <ul className="list-disc list-inside">
              <li>
                Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
              </li>
            </ul>
            </div>
          </div>
        {!expanded && (
          <div
            className="flex items-center gap-[10px] text-[#34967C] lg:hidden cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            See more <FaArrowRight />
          </div>
        )}
          <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-[100%]'/>
        </div>
      </div>
    </div>
  );
};
export default PropatyDescription;