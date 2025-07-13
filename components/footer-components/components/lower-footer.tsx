import HorizintalDevider from "../../common/Dividers/Horizontal-devider";
import RightContent from "./footer-content/left-content";
import LowestLeftContent from "./footer-content/lowest-footer/lowest-left-content";
import LowestRightContent from "./footer-content/lowest-footer/lowest-right-footer";
import LeftContent from "./footer-content/right-content";

const LowerFooter: React.FC = () => {
    return (
      <section className="flex flex-row h-[441px] bg-[#222222] pl-8 pr-8">
        <div className="flex flex-col gap-29">
        <div className="flex flex-row gap-50 pt-6">
            <LeftContent/>
            <RightContent/>
        </div>
        <div className="flex flex-col justify-between">
            <HorizintalDevider/>
            <div className="flex flex-row justify-between">
                <LowestLeftContent/>
                <LowestRightContent/>
            </div>
        </div>
        </div>
      </section>
    )
  }
  
  export default LowerFooter;