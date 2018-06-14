/**
 * @module RootSelectors
 */

/**
 * Returns the state of the API module
 *
 * @static
 * @kind function
 * @param {State} state The root state of your app
 * @returns {ApiState} The state of the API module
 */
const getApi = state => state.api;

/**
 * Returns the state of the CRUD module
 *
 * @static
 * @kind function
 * @param {State} state The root state of your app
 * @returns {CrudState} The state of the CRUD module
 */
const getCrud = state => state.crud;

/**
 * Returns the state of the entities module
 *
 * @static
 * @kind function
 * @param {State} state The root state of your app
 * @returns {EntitiesState} The state of the entities module
 */
const getEntities = state => state.entities;

/**
 * Returns the state of the router
 *
 * @static
 * @kind function
 * @param {State} state The root state of your app
 * @returns {RouterState} The state of the router
 */
const getRouter = state => state.router;

export const RootSelectors = {
  getApi,
  getCrud,
  getEntities,
  getRouter
};
