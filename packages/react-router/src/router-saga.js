import transitionPath from 'router5-transition-path';
import { fork, take } from 'redux-saga/effects';
import { actionTypes } from 'redux-router5';

/**
 * Calls saga with params when router transition succeeds.
 * Provides all the routes to be activated.
 *
 * @param {Generator} saga The saga to be called
 * @param {...any} params The params to be passed to the saga
 */
export function* onRouteTransition(saga, ...params) {
  while (true) {
    const { payload: { route, previousRoute } } = yield take(
      actionTypes.TRANSITION_SUCCESS
    );

    const { toActivate } = transitionPath(route, previousRoute);

    yield fork(saga, toActivate, ...params);
  }
}

/**
 * Call saga when router transition succeeded on particular route.
 *
 * @param {string} route The route name to match
 * @param {Generator} saga The saga to be called
 * @param {...any} params The params to be passed to the saga
 */
export function* onRouteEnter(route, saga, ...params) {
  yield fork(onRouteTransition, function*(toActivate) {
    if (toActivate.some(activatedRoute => activatedRoute === route)) {
      yield fork(saga, ...params);
    }
  });
}
