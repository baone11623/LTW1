import { Drawer, IconButton } from "@material-tailwind/react";
import PropTypes from "prop-types";
import NavList from "./NavList";
import { Link } from "react-router-dom";

const DrawerRight = ({ openRight, closeDrawerRight }) => {
  return (
    <div className="md:hidden">
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Link to={"my-info"}>
            <img
              src={"https://source.unsplash.com/random"}
              alt=""
              className="w-9 h-9 object-cover rounded-full"
            />
          </Link>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col gap-10">
          <NavList></NavList>
          <input type="text" placeholder="search" />
        </div>
      </Drawer>
    </div>
  );
};

DrawerRight.propTypes = {
  openRight: PropTypes.bool,
  closeDrawerRight: PropTypes.func,
};

export default DrawerRight;
