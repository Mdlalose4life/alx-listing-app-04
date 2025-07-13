    
import HorizintalDevider from '@/components/common/Dividers/Horizontal-devider';
import React from 'react';

const PropatyDescription: React.FC = () => {
  return (
    <div className="mt-4">
      <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-241'/>
      <br/>
      <h2 className="text-2xl font-semibold">Description</h2>
      <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-241'/>
      <br/>
      <div className="flex flex-row">
        <div className=" flex flex-col gap-4">
          <div className="w-[1027px]">
            <p className="w-[95%]">
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
          <div>
            <p className="font-bold">The Space</p>
            <p className="uppercase">BedRoom & BathRoom</p> 
            <div className="w-[95%]">
            <ul className="list-disc list-inside">
              <li>
                Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
              </li>
            </ul>
            </div>
          </div>
          <HorizintalDevider color = 'bg-[#E6E6E6]' weight='w-241'/>
        </div>
      </div>
    </div>
  );
};
export default PropatyDescription;