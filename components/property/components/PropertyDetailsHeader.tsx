const PropertyDetailsHeader: React.FC = ({property}) => {
    return (
        <>
        <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex flex-row gap-[16px]">
          <div className="flex border-2 border-[#E9E9E9] rounded-full py-[13px] px-[13px] gap-2">
          <img 
          src="/assets/save.svg"
          alt="Save"/>
            save</div>
          <div className="flex border-2 border-[#E9E9E9] rounded-full py-[13px] px-[13px] gap-2">
          <img 
          src="/assets/heart.svg"
          alt="Rating_Star"/>
            share</div>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500 flex items-center gap-2 py-2">
          <img 
          src="/assets/star.svg"
          alt="Rating_Star"/>
          {property.rating} stars</span>
        <span className="flex items-center gap-2 py-2">
        <img 
          src="/assets/map.svg"
          alt="Rating_Star"/>
          {property.address.city}, {property.address.country}</span>
        </div>
        </>
    )
}
export default PropertyDetailsHeader