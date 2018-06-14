/**
 * @module CrudActions
 */

import { createActions } from 'reduxsauce';

export const CrudActions = createActions(
  {
    /**
     * Saves result of normalized data for a route
     *
     * @static
     * @kind function
     * @param {string} route Route name
     * @param {string} key Key of entity
     * @param {number|number[]} result ID or IDs of entities (the result of normalization)
     * @returns {Action}
     */
    entitiesFetched: ['route', 'key', 'result']
  },
  { prefix: 'crud/' }
);
