import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Field } from 'redux-form';

import 'react-select/dist/react-select.css';

export const FieldSelectAdapter = ({
  input,
  label,
  meta: { touched, error, warning },
  ...rest
}) => (
  <div>
    <label>{label}</label>
    <div>
      <Select {...input} {...rest} onBlur={() => input.onBlur()} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

/**
 * @interface FormFieldSelectProps
 *
 * @prop {string} [label] Label of the field
 */
FieldSelectAdapter.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string
  }).isRequired
};

/**
 * A form field component for select
 *
 * @kind function
 * @param {FormFieldSelectProps} props Properties
 */
export const FormFieldSelect = props => <Field component={FieldSelectAdapter} {...props} />;
