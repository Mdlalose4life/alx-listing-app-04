import { usePathname } from "next/navigation";
import LowerHeader from "./components/Lower-header";
import MiddleHeader from "./components/Middle-header";
import UpperHeader from "./components/Upper-header";

const CombinedHeader: React.FC = () => {
    const pathname = usePathname();
    return (
      <div className='grid grid-row-3 top-0 w-full space-y-3 bg-white fixed'>
          <UpperHeader/>
          <MiddleHeader/>
          {pathname === "/" && <LowerHeader/>}
      </div>
    );
  };
  
  export default CombinedHeader;