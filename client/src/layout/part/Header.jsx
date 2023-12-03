import { useState } from "react";
import NavList from "./NavList";
import DrawerRight from "./DrawerRight";
import { Link } from "react-router-dom";

const Header = () => {
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <div className="py-8 flex justify-between items-center">
      <div>
        <img src="/Logo.png" alt="" />
      </div>
      <div className="hidden lg:block">
        <NavList></NavList>
      </div>
      <div
        onClick={openDrawerRight}
        className="text-white p-2 bg-darkColors2 rounded-lg md:hidden block"
      >
        =
      </div>
      <span className="hidden md:block">
        <Link to={"my-info"}>
          <img
            src={"https://source.unsplash.com/random"}
            alt=""
            className="w-9 h-9 object-cover rounded-full"
          />
        </Link>
      </span>
      {openRight && (
        <DrawerRight
          openRight={openRight}
          closeDrawerRight={closeDrawerRight}
        ></DrawerRight>
      )}
    </div>
  );
};

export default Header;
