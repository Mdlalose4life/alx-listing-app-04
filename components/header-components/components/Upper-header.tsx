const UpperHeader: React.FC = () => {
  return (
    <div className="bg-[#34967C] h-[92px] lg:h-[47px] p-[21px] text-sm lg:text-[16px] flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center text-white gap-[17px] h-[30px]">
            <img src="/assets/Case.svg" alt="logo" className="h-[24px]"/>
            <p className="font-quicksand">Overseas trip? Get the latest information on travel guides</p>
            <div className="flex items-center justify-center text-white bg-black rounded-full h-[30px] py-[6px] px-[11px] whitespace-nowrap">
                <span className="font-quicksand">More Info</span>
            </div>
        </div>
    </div>
  );
};

export default UpperHeader;