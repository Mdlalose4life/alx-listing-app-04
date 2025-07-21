import Link from "next/link";
import { useRouter } from "next/router";

const ReserveBox: React.FC = () => {
    const router = useRouter()
    const currentUrl = router.asPath || '/';

  return (
    <div className="lg:hidden border border-[#C5C5C5] fixed bottom-0 left-0 w-full bg-white border-t p-4 z-50">
        <div className="flex justify-between items-center">
            <div>
                <p className="text-lg font-semibold">$2,500 <span className="text-sm font-normal text-[#8E8E8E]">/night</span></p>
                <input 
                type="text"
                placeholder="Add date"
                 />
            </div>
            <button className="bg-[#34967C] text-white px-6 py-2 rounded-md">
                <Link href={`/booking?returnTo=${encodeURIComponent(currentUrl)}`}>
                    Reserve now
                </Link>
            </button>
        </div>
    </div>
  )
}
export default ReserveBox;