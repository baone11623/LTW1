import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavList = ({ admin = false, id = "" }) => {
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
        {admin && (
          <li className="font-medium">
            <Link to={`/admin/${id}`}>Admin</Link>
          </li>
        )}
      </ul>
    </>
  );
};

NavList.propTypes = {
  admin: PropTypes.bool,
  id: PropTypes.string,
};

export default NavList;
