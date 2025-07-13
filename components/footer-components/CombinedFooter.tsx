import LowerFooter from "./components/lower-footer";
import UpperFooter from "./components/upper-footer";

const CombinedFooter: React.FC = () => {
    return (
      <footer className="flex flex-col">
        <UpperFooter/>
        <LowerFooter/>
      </footer>
    )
  }
  
  export default CombinedFooter;