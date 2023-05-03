import React from "react";
import PropTypes from "prop-types";

export const InputForm = ({ type, id, value, onChange, required, minLength }) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      data-testid={`input-test-${id}`}
      minLength={minLength}
    />
  );
};

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  minLength: PropTypes.number,
};