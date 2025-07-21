import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";

const BookingHeader: React.FC = () => {
    const router = useRouter();
      const returnTo = typeof router.query.returnTo === 'string'
    ? router.query.returnTo
    : '/';

    return (
        <button 
            onClick={() => router.push(returnTo)} 
            className="flex flex-row px-[23.02px] gap-[7.87px] text-[#34967C] items-center border-1 border-[#EBEBEB] bg-[#F8FAFC] h-[48px] lg:h-[80px] "
            >
            <FaArrowLeft />
            Return
        </button>
    );
};
export default BookingHeader;