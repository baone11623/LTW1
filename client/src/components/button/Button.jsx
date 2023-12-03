import PropTypes from "prop-types";
import WaveLoading from "../loader/WaveLoading";

const Button = ({
  className = "",
  children,
  type = "button",
  name = "",
  onClick = () => {},
  isSubmitting = false,
}) => {
  const child = isSubmitting ? <WaveLoading></WaveLoading> : children;
  return (
    <button
      className={`w-full md:text-displayBold font-medium bg-[#2d64f0] md:py-[14px] md:rounded-[10px] text-center cursor-pointer ${className}`}
      type={type}
      name={name}
      id={name}
      onClick={onClick}
    >
      {child}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  name: PropTypes.string,
  isSubmitting: PropTypes.bool,
  onClick: PropTypes.func,
};
