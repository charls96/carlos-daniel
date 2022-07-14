import HeaderBarPopOS from "./header-bar/HeaderBarPopOS";
import { HeaderPopOS } from "./header/HeaderPopOS";

const LayoutPopOS = () => {
  return (
    <div className="bg-[#373737] h-screen w-screen bg-clip-padding backdrop-filter bg-opacity-40 flex items-center justify-center">
      <div className="bg-[#373737] min-h-[90vh] min-w-[80rem] drop-shadow-xl rounded-t-lg border border-slate-900">
        <HeaderBarPopOS />
        <HeaderPopOS />
      </div>
    </div>
  );
};

export default LayoutPopOS;
