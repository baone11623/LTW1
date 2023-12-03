import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="flex justify-center text-3xl font-semibold">{title}</div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
