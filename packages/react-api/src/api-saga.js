import { call, put } from 'redux-saga/effects';

import { ApiActions } from './api-actions';
import { ApiError } from './api-errors';

/**
 * Wraps saga into try/catch block catching all the ApiErrors
 * and translating them to API_ERROR actions.
 *
 * @param {Generator} saga API call saga which may throw an ApiError
 * @param {...any} args Arguments to be passed to the saga
 */
export function* withErrorHandling(saga, ...args) {
  try {
    return yield call(saga, ...args);
  } catch (exception) {
    if (exception instanceof ApiError) {
      console.error(exception);

      yield put(
        ApiActions.Creators.apiError(exception.getType(), exception.getReason())
      );
    } else {
      throw exception;
    }
  }
}

/**
 * Wraps saga into start/stop loading actions
 *
 * @param {Generator} saga A long running saga
 * @param {...any} args Arguments to be passed to the saga
 */
export function* withLoadingIndicator(saga, ...args) {
  try {
    yield put(ApiActions.Creators.startLoading());
    return yield call(saga, ...args);
  } finally {
    yield put(ApiActions.Creators.stopLoading());
  }
}
