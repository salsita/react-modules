/**
 * @module FormValidations
 */

import { validate as validateEmail } from 'email-validator';

/**
 * Validates an email address
 *
 * @static
 * @kind function
 * @param {string|undefined} value The input value
 * @returns {string|undefined} An error message
 */
const isEmail = value =>
  !Boolean(value) || validateEmail(value)
    ? undefined
    : 'Invalid e-mail address';

/**
 * Creates a validation function that checks if the input value is not an empty string
 *
 * @static
 * @kind function
 * @param {string} message The error message
 * @returns {function} The validation function
 */
const notEmptyString = message => value =>
  !Boolean(value) || (value && value.trim() === '') ? message : undefined;

/**
 * Creates a validation function that checks if the input value is not an empty object
 *
 * @static
 * @kind function
 * @param {string} message The error message
 * @returns {function} The validation function
 */
const notEmptyObject = message => value =>
  !Boolean(value) ? message : undefined;

export const FormValidations = {
  isEmail,
  notEmptyString,
  notEmptyObject
};
