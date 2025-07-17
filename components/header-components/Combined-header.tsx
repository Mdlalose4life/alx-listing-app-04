import { usePathname } from "next/navigation";
import LowerHeader from "./components/Lower-header";
import MiddleHeader from "./components/Middle-header";
import UpperHeader from "./components/Upper-header";
import { useEffect, useState } from "react";

const CombinedHeader: React.FC = () => {
    const pathname = usePathname();
    const [innerWindow, setInnerWindow] = useState<number | null>(null);

    useEffect(()=> {
      const handleResize = () => {
        setInnerWindow(window.innerWidth);
      }

      handleResize()
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [])
    
    const renderResponsiveComponent = () => {
      if (innerWindow == null) return null

      if (innerWindow <= 600) {
        return <div>Mobile</div>;
      } else if (innerWindow < 1200) {
        return <div>Tablet</div>;
      } else {
        return <MiddleHeader />;
      }
    }

    return (
      <div className='grid grid-row-3 top-0 w-full space-y-3 bg-white fixed'>
          <UpperHeader/>
          {renderResponsiveComponent()}
          {pathname === "/" && <LowerHeader/>}
      </div>
    );
  };
  
  export default CombinedHeader;