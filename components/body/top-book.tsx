import React from 'react';
const TopBook: React.FC = () => {
  return (
    <div className='flex flex-row justify-between pl-12 pr-12'>
        <div className='flex flex-row justify-center gap-2'>
            <div className='border-1 rounded-full px-[24px] py-[14px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] cursor-pointer'>
                <p>All</p>
            </div>
            <div className='border-1 rounded-full px-[24px] py-[14px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] cursor-pointer'>
                <p>Top Villa</p> 
            </div>
            <div className='border-1 rounded-full px-[24px] py-[14px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] cursor-pointer'>
                <p>Free Reschedule</p>
            </div>
            <div className='border-1 rounded-full px-[24px] py-[14px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] cursor-pointer'>
                <p>Book Now, Pay later</p>
            </div>
            <div className='border-1 rounded-full px-[24px] py-[14px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] cursor-pointer'>
                <p>Self CheckIn</p>
            </div>
            <div className='border-1 rounded-full px-[24px] py-[14px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB] cursor-pointer'>
                <p>Instant Book</p>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-2'>
            <div className='flex flex-row gap-2 border-1 rounded-full px-[24px] py-[14px] font-semibold hover:border-[#34967C] hover:bg-[#F0FFFB]'>
                <p>Filter</p>
                <img src="/assets/Filter.svg" alt="logo" className="h-[24px]"/>
            </div>
            <div className='border-1 rounded-full px-[24px] py-[14px] hover:border-[#34967C] hover:bg-[#F0FFFB] cursor-pointer'>
                <p>Sort by: Highest Price</p>
            </div>
        </div>
    </div>
  );
};

export default TopBook;