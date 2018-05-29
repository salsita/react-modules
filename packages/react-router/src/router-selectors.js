/**
 * @module RouterSelectors
 */

import { createSelector } from 'reselect';

import { RootSelectors } from '@salsita/react-core';

/**
 * Returns the current route
 *
 * @static
 * @kind function
 * @param {RootState} state The root state
 * @returns {Route} The current route
 */
const getCurrentRoute = createSelector(RootSelectors.getRouter, state => state.route);

/**
 * Returns the params of current route
 *
 * @static
 * @kind function
 * @param {RootState} state The root state
 * @returns {object} The current route params
 */
const getRouteParams = createSelector(
  getCurrentRoute,
  route => route && route.params
);

export const RouterSelectors = {
  getCurrentRoute,
  getRouteParams
};
