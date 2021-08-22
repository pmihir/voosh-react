import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const {
    disabled = false,
    onClick,
    label = "Label",
    customClass,
    color = "black"
  } = props;
  return (
    <div>
      <button
        disabled={disabled}
        style={{
          color: color
        }}
        className={`voosh-btn ${customClass}`}
        onClick={(e) => onClick && onClick(e)}
      >
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  customClass: PropTypes.string,
  color: PropTypes.string
};

export default Button;
