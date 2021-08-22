import React from "react";
import "./Input.css";
import PropTypes from "prop-types";

const Input = (props) => {
  const { type, placeholder, customClass } = props;
  return (
    <div>
      <input
        className={`form-input ${customClass}`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  customClass: PropTypes.string
};

export default Input;
