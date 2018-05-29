# react-core

## Install

Install this package with `npm`
```
npm i @salsita/react-core
```

or `yarn`
```
yarn add @salsita/react-core
```

## API
### Modules

<dl>
<dt><a href="#module_RootSelectors">RootSelectors</a></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#buildStore">buildStore(rootReducer, rootSaga, router)</a> ⇒ <code>Store</code></dt>
<dd><p>Builds a store and applies saga and router5 middleware</p>
<p>It applies a saga middleware, a router5 middleware, and runs the root saga.</p>
</dd>
</dl>

<a name="module_RootSelectors"></a>

### RootSelectors

* [RootSelectors](#module_RootSelectors)
    * [.getApi(state)](#module_RootSelectors.getApi) ⇒ <code>ApiState</code>
    * [.getCrud(state)](#module_RootSelectors.getCrud) ⇒ <code>CrudState</code>
    * [.getEntities(state)](#module_RootSelectors.getEntities) ⇒ <code>EntitiesState</code>
    * [.getRouter(state)](#module_RootSelectors.getRouter) ⇒ <code>RouterState</code>

<a name="module_RootSelectors.getApi"></a>

#### RootSelectors.getApi(state) ⇒ <code>ApiState</code>
Returns the state of the API module

**Kind**: static method of [<code>RootSelectors</code>](#module_RootSelectors)  
**Returns**: <code>ApiState</code> - The state of the API module  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>State</code> | The root state of your app |

<a name="module_RootSelectors.getCrud"></a>

#### RootSelectors.getCrud(state) ⇒ <code>CrudState</code>
Returns the state of the CRUD module

**Kind**: static method of [<code>RootSelectors</code>](#module_RootSelectors)  
**Returns**: <code>CrudState</code> - The state of the CRUD module  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>State</code> | The root state of your app |

<a name="module_RootSelectors.getEntities"></a>

#### RootSelectors.getEntities(state) ⇒ <code>EntitiesState</code>
Returns the state of the entities module

**Kind**: static method of [<code>RootSelectors</code>](#module_RootSelectors)  
**Returns**: <code>EntitiesState</code> - The state of the entities module  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>State</code> | The root state of your app |

<a name="module_RootSelectors.getRouter"></a>

#### RootSelectors.getRouter(state) ⇒ <code>RouterState</code>
Returns the state of the router

**Kind**: static method of [<code>RootSelectors</code>](#module_RootSelectors)  
**Returns**: <code>RouterState</code> - The state of the router  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>State</code> | The root state of your app |

<a name="buildStore"></a>

### buildStore(rootReducer, rootSaga, router) ⇒ <code>Store</code>
Builds a store and applies saga and router5 middleware

It applies a saga middleware, a router5 middleware, and runs the root saga.

**Kind**: global function  
**Returns**: <code>Store</code> - A redux store instance  

| Param | Type | Description |
| --- | --- | --- |
| rootReducer | <code>Reducer</code> | The root reducer of your app |
| rootSaga | <code>Saga</code> | The root saga of your app |
| router | <code>Router</code> | A router5 instance |

