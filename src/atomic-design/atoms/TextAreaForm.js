import React from "react";
import PropTypes from "prop-types";

export const TextAreaForm = ({ id, value, onChange, required, minLength }) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
    />
  );
};

TextAreaForm.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  minLength: PropTypes.number,
};