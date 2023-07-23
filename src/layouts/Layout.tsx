import { Outlet } from "react-router-dom";
import LayoutHeader from "./Layout.header";

import "./Layout.style.css";

const LayoutMain = () => {
  return (
    <div className="flex min-h-[100vh]">
      <div className="grow bg-[#efeff9]">
        {/* <div className="p-5 rounded-md">
          <div className="bg-white p-5">
            <Outlet />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LayoutMain;
