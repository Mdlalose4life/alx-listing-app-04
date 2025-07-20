import HorizintalDevider from "../../common/Dividers/Horizontal-devider";
import RightContent from "./footer-content/left-content";
import LowestLeftContent from "./footer-content/lowest-footer/lowest-left-content";
import LowestRightContent from "./footer-content/lowest-footer/lowest-right-footer";
import LeftContent from "./footer-content/right-content";

const LowerFooter: React.FC = () => {
  return (
    <section className="flex h-auto bg-[#222222] flex-row px-[26px] lg:px-8 lg:h-auto">
      <div className="flex flex-col w-full gap-[70px] lg:gap-29">
        <div className="flex flex-col lg:flex-row w-full gap-[32px] lg:gap-50 lg:pt-6">
          <LeftContent />
          <RightContent />
        </div>

        <div className="flex flex-col w-full justify-between">
          <HorizintalDevider />
          <div className="flex flex-col lg:flex-row justify-between">
            <LowestLeftContent />
            <LowestRightContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LowerFooter;