import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <ul className="flex gap-10 flex-col md:flex-row">
        <li className="font-medium">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="font-medium">
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li className="font-medium">
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li className="font-medium">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
