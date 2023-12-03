import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ButtonLinkAuth = ({
  link = "https://google.com",
  text = "Login with Google",
  children,
}) => {
  return (
    <Link
      to={link}
      className={
        "md:w-[240px] w-full md:text-displayBold text-bodyRegular font-medium bg-[#4E5D78] md:rounded-[10px] rounded-[6px] md:px-[30px] md:py-[14px] py-[10px] px-2 flex items-center gap-2 md:gap-[25px]"
      }
    >
      {children && <span>{children}</span>}
      <span>{text}</span>
    </Link>
  );
};

export default ButtonLinkAuth;

ButtonLinkAuth.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};
