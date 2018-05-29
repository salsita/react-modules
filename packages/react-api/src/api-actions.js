/**
 * @module ApiActions
 */

import { createActions } from 'reduxsauce';

export const ApiActions = createActions(
  {
    /**
     * Saves API error
     *
     * @static
     * @kind function
     * @param {string} errorType Type of the error
     * @param {string} errorReason Reason of the error
     * @returns {Action}
     */
    apiError: ['errorType', 'errorReason'],

    /**
     * Sets the global loading indicator on
     *
     * @static
     * @kind function
     * @returns {Action}
     */
    startLoading: null,

    /**
     * Sets the global loading indicator off
     *
     * @static
     * @kind function
     * @returns {Action}
     */
    stopLoading: null
  },
  { prefix: 'api/' }
);
