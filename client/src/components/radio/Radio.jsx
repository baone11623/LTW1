import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Radio = ({ checked, value, name, children, control, className }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: value,
  });
  return (
    <div className="flex items-center gap-x-3 radio-group">
      <label className="radio cursor-pointer">
        <input
          {...field}
          type="radio"
          value={value}
          className="hidden"
          checked={checked}
        />
        <div className=""></div>
      </label>
      {children && (
        <span className={`capitalize ${className}`}>{children}</span>
      )}
    </div>
  );
};

export default Radio;
Radio.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  control: PropTypes.any.isRequired,
  className: PropTypes.string,
};
