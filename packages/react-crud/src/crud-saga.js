import { all, call, fork, put, select } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form';

import {
  withErrorHandling,
  withLoadingIndicator,
  BusinessValidationError
} from '@salsita/react-api';

import { normalizeAndStore } from '@salsita/react-entities';
import { identity, composeSaga } from '@salsita/react-helpers';
import { onRouteTransition, RouterSelectors } from '@salsita/react-router';

import { CrudActions } from './crud-actions';

/**
 * Creates a composed effectParamsFactory which automatically passes
 * current route params to effectParamsFactory
 *
 * @param {Function} effectParamsFactory to be wrapped
 * @returns {Function} Composed effectParamsFactory
 */
export const withRouterParams = effectParamsFactory => state =>
  effectParamsFactory(RouterSelectors.getRouteParams(state));

export function* fetchEntityByFetchParams(fetchParams, state, route, key) {
  const { effect, schema, effectParamsFactory = () => [] } = fetchParams;

  // Just call the effect
  const data = yield call(effect, ...effectParamsFactory(state));

  // Normalize the response
  const result = yield call(normalizeAndStore, data, schema);

  // And store the result
  yield put(CrudActions.Creators.entitiesFetched(route, key, result));
}

export function* fetchEntitiesImpl(route, mapRouteToFetchParams) {
  const fetches = mapRouteToFetchParams(route);

  // Some routes might not have CRUD fetching defined
  // We'll skip these
  if (fetches) {
    // Fetch state so that it's possible to pass it
    // to effectParamsFactory to return params
    // of the effect
    const state = yield select(identity);

    yield all(
      Object.keys(fetches).map(key =>
        fork(fetchEntityByFetchParams, fetches[key], state, route, key)
      )
    );
  }
}

export const fetchEntities = composeSaga(
  withErrorHandling,
  withLoadingIndicator,
  fetchEntitiesImpl
);

export function* saveEntityImpl({ id, ...entityData }, entity, mapEntityToSaveParams, form = null) {
  try {
    if (form) {
      yield put(startSubmit(form));
    }

    const { effect, schema } = mapEntityToSaveParams(entity, Boolean(id));

    const updatedEntity = yield call(
      effect,
      ...[entityData, id].filter(Boolean)
    );
    yield call(normalizeAndStore, updatedEntity, schema);

    if (form) {
      yield put(stopSubmit(form));
    }

    return updatedEntity;
  } catch (exception) {
    // In case of business validation error
    // let's just deal with the error
    // and inform the form about the exception.
    if (exception instanceof BusinessValidationError) {
      if (form) {
        yield put(stopSubmit(form, exception.getReason()));
      }

      return false;
    } else {
      throw exception;
    }
  }
}

/**
 * Creates or updates entity from form data
 *
 * After entity has been saved, it reflects the data back into entity repository.
 *
 * @kind function
 * @param {Object} entityData Entity data
 * @param {string} entity Entity type
 * @param {Function} mapEntityToSaveParams A function that maps an entity to the save params
 * @param {string} [form] Id of the form
 *
 * @returns {Object} updated entity
 */
export const saveEntity = composeSaga(
  withErrorHandling,
  withLoadingIndicator,
  saveEntityImpl
);

export function* routeTransitioned(toActivate, mapRouteToFetchParams) {
  yield all(toActivate.map(route => call(fetchEntities, route, mapRouteToFetchParams)));
}

/**
 * This saga has to be forked in the root saga of the app
 *
 * @param {Function} mapRouteToFetchParams A function that maps a route to the fetch params
 */
export function* crudSaga(mapRouteToFetchParams) {
  yield all([fork(onRouteTransition, routeTransitioned, mapRouteToFetchParams)]);
}
