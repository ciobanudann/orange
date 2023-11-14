import Navbar from "../../components/Navbar/index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-full gap-4 px-20 overflow-y-auto bg-slate-200">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
