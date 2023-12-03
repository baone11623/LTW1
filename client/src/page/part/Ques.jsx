import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Ques = ({
  to = "/login",
  className = "",
  textLink = "Sign in",
  ques = "Already have an account?",
  right = false,
}) => {
  return (
    <p
      className={`text-displayBold flex gap-5  ${
        right ? "justify-end " : "justify-center"
      }`}
    >
      {ques}
      <Link
        to={to}
        className={`text-[#2a66ff] filter brightness-[1.2] font-medium ${className}`}
      >
        {textLink}
      </Link>
    </p>
  );
};

export default Ques;
Ques.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  textLink: PropTypes.string,
  ques: PropTypes.string,
  right: PropTypes.bool,
};
