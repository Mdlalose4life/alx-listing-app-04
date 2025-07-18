import { GoDotFill } from "react-icons/go";

const MobileMiddleHeader: React.FC = () => {
    return (
    <div className="flex flex-row justify-between items-center px-[20px]">
        <div className="flex items-center justify-between border border-gray-300 rounded-full max-w-[90%] px-[20px] py-[10px]">
        <div className="flex flex-col">
            <div className="font-semibold">Where to</div>
            <div className="flex items-center gap-2">
            <input
                type="text"
                placeholder="Location"
                className="outline-none text-sm w-[60px]"
            />
            <GoDotFill color="#9c9c9c" size={14} />
            <input
                type="text"
                placeholder="Date"
                className="outline-none text-sm w-[45px]"
            />
            <GoDotFill color="#9c9c9c" size={14} />
            <input
                type="text"
                placeholder="Add guest"
                className="outline-none text-sm w-[70px]"
            />
            </div>
        </div>
        <div>
            <img
            src="/assets/search.svg"
            alt="search"
            className="h-[42px] w-[42px]"
            />
        </div>
        </div>
        <div>
            <img 
            src="/assets/ProfileImage.svg"
            alt="ProfileImage" 
            className="h-[46px] w-[46px]"
            />
        </div>
    </div>
    )
};
export default MobileMiddleHeader;