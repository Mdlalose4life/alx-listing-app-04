import React from 'react';

const images = [
  "/assets/Frame28.svg",
  "/assets/Frame32.svg", 
  "/assets/Frame33.svg", 
  "/assets/Frame46.svg", 
  "/assets/Frame28.svg", 
  "/assets/Frame32.svg", 
  "/assets/Frame33.svg", 
  "/assets/Frame46.svg", 
  "/assets/Frame28.svg", 
  "/assets/Frame32.svg", 
  "/assets/Frame33.svg", 
  "/assets/Frame46.svg", 
  "/assets/Frame28.svg", 
  "/assets/Frame32.svg", 
  "/assets/Frame33.svg", 
  "/assets/Frame46.svg", 
  "/assets/Frame28.svg", 
  "/assets/Frame32.svg", 
  "/assets/Frame33.svg", 
  "/assets/Frame46.svg", 
  "/assets/Frame28.svg", 
  "/assets/Frame32.svg", 
  "/assets/Frame33.svg", 
  "/assets/Frame46.svg", 
  "/assets/Frame33.svg", 
  "/assets/Frame46.svg", 
  "/assets/Frame28.svg", 
];

const LowerHeader: React.FC = () => {
  return (
    <section className="flex overflow-x-scroll md:flex-row gap-3 justify-center items-center
                        animate-slideIn transition-all duration-500">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`logo-${index}`}
          className="h-12 w-12 md:h-16 md:w-16 transition-transform duration-300 
                     hover:scale-105 cursor-pointer"
        />
      ))}
    </section>
  );
};

export default LowerHeader; 