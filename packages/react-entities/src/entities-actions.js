/**
 * @module EntitiesActions
 */

import { createActions } from 'reduxsauce';

export const EntitiesActions = createActions(
  {
    /**
     * Modifies entity repository
     *
     * @static
     * @kind function
     * @param {Partial<EntitiesState>} repository Entities that will be merged into the entity repository
     * @returns {Action}
     */
    repositoryHasChanged: ['repository']
  },
  { prefix: 'entity-repository/' }
);
