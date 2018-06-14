import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';
import listenersPlugin from 'router5/plugins/listeners';

/**
 * Builds a router with browserPlugin
 *
 * @kind function
 * @param {Route[]} routes An array of routes
 * @param {Options} [config] A config object for router5
 * @param {boolean} [useListenerPlugin=false] Add listener plugin
 * @param {boolean} [useBrowserPlugin=true] Add browser plugin
 */
export const buildRouter = (routes, config = undefined, useListenerPlugin = false, useBrowserPlugin = true) => {
  const router = createRouter(routes, config);

  if (useListenerPlugin) {
    router.usePlugin(listenersPlugin());
  }

  if (useBrowserPlugin) {
    router.usePlugin(browserPlugin({ useHash: false }));
  }

  return router;
}
