import React from 'react';
const TopBook: React.FC = () => {
  return (
    <div className='flex overflow-x-scroll justify-between'>
        <div className='flex flex-row items-center gap-2'>
            <div className='border-1 border-[#E9E9E9] rounded-full px-[16px] py-[10px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] cursor-pointer'>
                <p>All</p>
            </div>
            <div className='border-1 border-[#E9E9E9] rounded-full px-[17px] py-[10px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] whitespace-nowrap cursor-pointer'>
                <p>Top Villa</p> 
            </div>
            <div className='border-1 border-[#E9E9E9] rounded-full px-[17px] py-[10px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] whitespace-nowrap cursor-pointer'>
                <p>Free Reschedule</p>
            </div>
            <div className='border-1 border-[#E9E9E9] rounded-full px-[17px] py-[10px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] whitespace-nowrap cursor-pointer'>
                <p>Book Now, Pay later</p>
            </div>
            <div className='border-1 border-[#E9E9E9] rounded-full px-[17px] py-[10px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] whitespace-nowrap cursor-pointer'>
                <p>Self CheckIn</p>
            </div>
            <div className='border-1 border-[#E9E9E9] rounded-full px-[17px] py-[10px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] whitespace-nowrap cursor-pointer'>
                <p>Instant Book</p>
            </div>
        </div>
        <div className='flex flex-row items-center gap-2'>
            <div className='flex flex-row gap-2 border-1 border-[#E9E9E9] rounded-full px-[17px] py-[14px] font-semibold hover:border-[#34967C] whitespace-nowrap hover:bg-[#F0FFFB]'>
                <p>Filter</p>
                <img src="/assets/Filter.svg" alt="logo" className="h-[24px]"/>
            </div>
            <div className='border-1 border-[#E9E9E9] rounded-full px-[17px] py-[14px] hover:border-[#34967C] hover:bg-[#F0FFFB] whitespace-nowrap cursor-pointer'>
                <p>Sort by: Highest Price</p>
            </div>
        </div>
    </div>
  );
};

export default TopBook;