import { useEffect, useState } from "react";
import NavList from "./NavList";
import DrawerRight from "./DrawerRight";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../redux/auth/apiRequest";
import { LOCAL_STORAGE_TOKEN } from "../../utils/LocalStoreName";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import MyInfo from "../../utils/MyInfo";

const Header = () => {
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
  const navigate = useNavigate();
  const [check, setCheck] = useState();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [check, token]);

  useEffect(() => {
    getCurrentUser(LOCAL_STORAGE_TOKEN, dispatch, toast);
  }, []);

  const { avatar } = MyInfo();

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
            src={avatar}
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
