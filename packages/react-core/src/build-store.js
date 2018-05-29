import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { router5Middleware } from 'redux-router5';

import { identity } from '@salsita/react-helpers';

/**
 * Builds a store and applies saga and router5 middleware
 *
 * It applies a saga middleware, a router5 middleware, and runs the root saga.
 *
 * @kind function
 * @param {Reducer} rootReducer The root reducer of your app
 * @param {Saga} rootSaga The root saga of your app
 * @param {Router} router A router5 instance
 * @returns {Store} A redux store instance
 */
export const buildStore = (rootReducer, rootSaga, router) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware, router5Middleware(router)),
      process.env.NODE_ENV !== 'production' &&
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : identity
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
