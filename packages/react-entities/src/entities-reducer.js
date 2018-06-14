import mergeWith from 'lodash/mergeWith';
import isArray from 'lodash/isArray';
import { createReducer } from 'reduxsauce';

import { EntitiesActions } from './entities-actions';

const INITIAL_STATE = {};

const repositoryHasChanged = (state, { repository }) =>
  mergeWith({}, state, repository, (objValue, srcValue) => {
    // If merging two arrays, just replace original value
    // with new one
    if (isArray(objValue) && isArray(srcValue)) {
      return srcValue;
    }

    // Other values merge as expected
    return undefined;
  });

const HANDLERS = {
  [EntitiesActions.Types.REPOSITORY_HAS_CHANGED]: repositoryHasChanged
};

/**
 * The reducer of the entities module
 *
 * @kind function
 * @param {EntitiesState} state The state of the entities module
 * @param {Action} action A redux action
 * @returns {EntitiesState}
 */
export const entitiesReducer = createReducer(INITIAL_STATE, HANDLERS);
