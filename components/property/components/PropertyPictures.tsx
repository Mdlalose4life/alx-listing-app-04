import React from 'react';

const PropertyPictures: React.FC = () => {
  return (
    <>
    <div className="flex lg:hidden flex-col">
        <div className="h-1/2">
            <img 
            src="/assets/414521765.jpg" 
            alt="Top Right View" 
            className="w-full h-full object-cover" 
            />
        </div>
          <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500 flex items-center gap-2 py-2">
            <img 
            src="/assets/star.svg"
            alt="Rating_Star"/>
            4.6 stars</span>
          <span className="flex items-center gap-2 py-2">
          <img 
            src="/assets/map.svg"
            alt="Rating_Star"/>
            Johannesburg Hillbrow
          </span>
        </div>
    </div>
    <div className="hidden lg:flex lg:gap-2 lg:w-full lg:h-[600px]">
        <div className="w-1/2 h-full">
        <img 
            src="/assets/414521748.jpg" 
            alt="Main Villa View" 
            className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg" 
        />
        </div>

        {/* Right side - 3 smaller images stacked (50%) */}
        <div className="w-1/2 h-full flex flex-col gap-2">
        
        {/* Top full-width image */}
        <div className="h-1/2">
            <img 
            src="/assets/414521765.jpg" 
            alt="Top Right View" 
            className="w-full h-full object-cover rounded-tr-lg rounded-br-lg" 
            />
        </div>

        {/* Bottom two side-by-side images */}
        <div className="flex gap-2 h-1/2">
            <div className="w-1/2">
            <img 
                src="/assets/pexels-fotoaibe-1571463.jpg" 
                alt="Bottom Left" 
                className="w-full h-full object-cover" 
            />
        </div>
        <div className="w-1/2">
        <img 
            src="/assets/pexels-fotoaibe-1571460.jpg" 
            alt="Bottom Right" 
            className="w-full h-full object-cover rounded-tr-lg rounded-br-lg" 
        />
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default PropertyPictures;