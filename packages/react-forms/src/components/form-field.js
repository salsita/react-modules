import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

export const FieldAdapter = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

/**
 * @interface FormFieldProps
 *
 * @prop {string} type Input type
 * @prop {string} [label] Label of the field
 */
FieldAdapter.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string
  }).isRequired
};

/**
 * A form field component for input
 *
 * @kind function
 * @param {FormFieldProps} props Properties
 */
export const FormField = props => <Field component={FieldAdapter} {...props} />;
