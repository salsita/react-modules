import { createReducer } from 'reduxsauce';

import { ApiActions } from './api-actions';

const INITIAL_STATE = {
  callsInProgress: 0,
  error: null
};

const apiError = (state, { errorType, errorReason }) => ({
  ...state,
  error: { errorType, errorReason }
});

const startLoading = state => ({
  ...state,
  callsInProgress: state.callsInProgress + 1
});

const stopLoading = state => ({
  ...state,
  callsInProgress: state.callsInProgress - 1
});

const HANDLERS = {
  [ApiActions.Types.API_ERROR]: apiError,
  [ApiActions.Types.START_LOADING]: startLoading,
  [ApiActions.Types.STOP_LOADING]: stopLoading
};

/**
 * The reducer of the API module
 *
 * @kind function
 * @param {ApiState} state The state of the API module
 * @param {Action} action A redux action
 * @returns {ApiState}
 */
export const apiReducer = createReducer(INITIAL_STATE, HANDLERS);
