# react-router

## Install

Install this package with `npm`
```
npm i @salsita/react-router
```

or `yarn`
```
yarn add @salsita/react-router
```

## API
### Modules

<dl>
<dt><a href="#module_RouterActions">RouterActions</a></dt>
<dd></dd>
<dt><a href="#module_RouterSelectors">RouterSelectors</a></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#buildRouter">buildRouter(routes, [config], [useListenerPlugin], [useBrowserPlugin])</a></dt>
<dd><p>Builds a router with browserPlugin</p>
</dd>
<dt><a href="#routerReducer">routerReducer(state, action)</a> ⇒ <code>RouterState</code></dt>
<dd><p>The reducer of the router module</p>
</dd>
<dt><a href="#onRouteTransition">onRouteTransition(saga, ...params)</a></dt>
<dd><p>Calls saga with params when router transition succeeds.
Provides all the routes to be activated.</p>
</dd>
<dt><a href="#onRouteEnter">onRouteEnter(route, saga, ...params)</a></dt>
<dd><p>Call saga when router transition succeeded on particular route.</p>
</dd>
<dt><a href="#Link">Link(props)</a></dt>
<dd><p>Renders a link</p>
</dd>
<dt><a href="#Route">Route(props)</a></dt>
<dd><p>Renders a component based on the match with the name of the current route</p>
<p>You have to set exactly one of <code>startsWith</code>, <code>endsWith</code>, or <code>exact</code> prop.</p>
</dd>
</dl>

### Interfaces

<dl>
<dt><a href="#LinkProps">LinkProps</a></dt>
<dd></dd>
<dt><a href="#RouteProps">RouteProps</a></dt>
<dd></dd>
</dl>

<a name="module_RouterActions"></a>

### RouterActions
**See**: [redux-router5: Using the redux middleware](https://github.com/router5/router5/tree/master/packages/redux-router5#using-the-redux-middleware)  
<a name="module_RouterSelectors"></a>

### RouterSelectors

* [RouterSelectors](#module_RouterSelectors)
    * [.getCurrentRoute(state)](#module_RouterSelectors.getCurrentRoute) ⇒ [<code>Route</code>](#Route)
    * [.getRouteParams(state)](#module_RouterSelectors.getRouteParams) ⇒ <code>object</code>

<a name="module_RouterSelectors.getCurrentRoute"></a>

#### RouterSelectors.getCurrentRoute(state) ⇒ [<code>Route</code>](#Route)
Returns the current route

**Kind**: static method of [<code>RouterSelectors</code>](#module_RouterSelectors)  
**Returns**: [<code>Route</code>](#Route) - The current route  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>RootState</code> | The root state |

<a name="module_RouterSelectors.getRouteParams"></a>

#### RouterSelectors.getRouteParams(state) ⇒ <code>object</code>
Returns the params of current route

**Kind**: static method of [<code>RouterSelectors</code>](#module_RouterSelectors)  
**Returns**: <code>object</code> - The current route params  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>RootState</code> | The root state |

<a name="LinkProps"></a>

### LinkProps
**Kind**: global interface  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Route name |
| [params] | <code>object</code> | Route params |

<a name="RouteProps"></a>

### RouteProps
**Kind**: global interface  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| component | <code>Component</code> | The component to render |
| [startsWith] | <code>string</code> | Renders the component if the route name starts with this |
| [endsWith] | <code>string</code> | Renders the component if the route name ends with this |
| [exact] | <code>string</code> | Renders the component if the route name exactly matches this |

<a name="buildRouter"></a>

### buildRouter(routes, [config], [useListenerPlugin], [useBrowserPlugin])
Builds a router with browserPlugin

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| routes | [<code>Array.&lt;Route&gt;</code>](#Route) |  | An array of routes |
| [config] | <code>Options</code> |  | A config object for router5 |
| [useListenerPlugin] | <code>boolean</code> | <code>false</code> | Add listener plugin |
| [useBrowserPlugin] | <code>boolean</code> | <code>true</code> | Add browser plugin |

<a name="routerReducer"></a>

### routerReducer(state, action) ⇒ <code>RouterState</code>
The reducer of the router module

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>RouterState</code> | The state of router5 |
| action | <code>Action</code> | A redux action |

<a name="onRouteTransition"></a>

### onRouteTransition(saga, ...params)
Calls saga with params when router transition succeeds.
Provides all the routes to be activated.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| saga | <code>Generator</code> | The saga to be called |
| ...params | <code>any</code> | The params to be passed to the saga |

<a name="onRouteEnter"></a>

### onRouteEnter(route, saga, ...params)
Call saga when router transition succeeded on particular route.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| route | <code>string</code> | The route name to match |
| saga | <code>Generator</code> | The saga to be called |
| ...params | <code>any</code> | The params to be passed to the saga |

<a name="Link"></a>

### Link(props)
Renders a link

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>LinkProps</code>](#LinkProps) | Properties |

<a name="Route"></a>

### Route(props)
Renders a component based on the match with the name of the current route

You have to set exactly one of `startsWith`, `endsWith`, or `exact` prop.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>RouteProps</code>](#RouteProps) | Properties |

