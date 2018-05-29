import { createReducer } from 'reduxsauce';

import { CrudActions } from './crud-actions';

const INITIAL_STATE = {};

const entitiesFetched = (state, { route, key, result }) => ({
  ...state,
  [route]: {
    ...(state[route] || {}),
    [key]: result
  }
});

const HANDLERS = {
  [CrudActions.Types.ENTITIES_FETCHED]: entitiesFetched
};

/**
 * The reducer of the crud module
 *
 * @kind function
 * @param {CrudState} state The state of the crud module
 * @param {Action} action A redux action
 * @returns {CrudState}
 */
export const crudReducer = createReducer(INITIAL_STATE, HANDLERS);
