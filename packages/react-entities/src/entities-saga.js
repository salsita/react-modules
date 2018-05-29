import { normalize } from 'normalizr';
import { put } from 'redux-saga/effects';

import { EntitiesActions } from './entities-actions';

/**
 * Normalize and store data into the entity repository
 *
 * Normalizes data according to the schema and stores the result into the entity repository.
 *
 * @kind function
 * @param {Object|Array} data Entity or list of entities
 * @param {Object|Array} schema Normalizr schema
 * @return {String|Number|Array} Returns either ID or list of IDs of normalized data
 */
export function* normalizeAndStore(data, schema) {
  const { entities: repository, result } = normalize(data, schema);
  yield put(EntitiesActions.Creators.repositoryHasChanged(repository));

  return result;
}
