import { Outlet } from "react-router-dom";
import HeaderAdmin from "./part/HeaderAdmin";
import SideBar from "./part/Sidebar";

const LayoutAdmin = () => {
  return (
    <div className="flex">
      <span className="md:min-w-[240px] ">
        <SideBar></SideBar>
      </span>
      <main className="w-full md:pt-[78px] md:pb-0 pt-[62px] pb-[56px] bg-darkColors1">
        <HeaderAdmin></HeaderAdmin>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LayoutAdmin;
