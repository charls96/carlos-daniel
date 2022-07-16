import Home from "../page/Home";
import HeaderBarPopOS from "./header-bar/HeaderBarPopOS";
import { HeaderPopOS } from "./header/HeaderPopOS";

const LayoutPopOS = () => {
  return (
    <div className="bg-[#373737] h-screen w-screen bg-clip-padding backdrop-filter bg-opacity-40 flex items-center justify-center overflow-x-hidden">
      <div className="bg-[#373737] max-w-[80rem] w-[90vw] drop-shadow-xl rounded-t-lg border border-slate-900">
        <HeaderBarPopOS />
        <HeaderPopOS />
        <Home />
      </div>
    </div>
  );
};

export default LayoutPopOS;
