import { Outlet } from "react-router-dom";
import Header from "./part/Header";
// import Footer from "./part/Footer";

const LayoutCommon = () => {
  return (
    <div className="lg:max-w-[1200px] lg:m-auto px-2">
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default LayoutCommon;
