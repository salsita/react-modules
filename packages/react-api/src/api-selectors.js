/**
 * @module ApiSelectors
 */

import { createSelector } from 'reselect';

import { RootSelectors } from '@salsita/react-core';

/**
 * Returns the latest API error type
 *
 * @static
 * @kind function
 * @param {RootState} state The root state
 * @returns {string|null} The latest API error type
 */
const getError = createSelector(
  RootSelectors.getApi,
  state => (state.error ? state.error.errorType : null)
);

/**
 * Returns true if a loading is in progress
 *
 * @static
 * @kind function
 * @param {RootState} state The root state
 * @returns {boolean} True if a loading indicator is in progress, false otherwise
 */
const isLoading = createSelector(
  RootSelectors.getApi,
  state => state.callsInProgress > 0
);

export const ApiSelectors = {
  getError,
  isLoading
};
