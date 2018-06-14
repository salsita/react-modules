# react-crud

## Install

Install this package with `npm`
```
npm i @salsita/react-crud
```

or `yarn`
```
yarn add @salsita/react-crud
```

## API
### Modules

<dl>
<dt><a href="#module_CrudActions">CrudActions</a></dt>
<dd></dd>
</dl>

### Constants

<dl>
<dt><a href="#withRouterParams">withRouterParams</a> ⇒ <code>function</code></dt>
<dd><p>Creates a composed effectParamsFactory which automatically passes
current route params to effectParamsFactory</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#crudReducer">crudReducer(state, action)</a> ⇒ <code>CrudState</code></dt>
<dd><p>The reducer of the crud module</p>
</dd>
<dt><a href="#saveEntity">saveEntity(entityData, entity, mapEntityToSaveParams, [form])</a> ⇒ <code>Object</code></dt>
<dd><p>Creates or updates entity from form data</p>
<p>After entity has been saved, it reflects the data back into entity repository.</p>
</dd>
<dt><a href="#crudSaga">crudSaga(mapRouteToFetchParams)</a></dt>
<dd><p>This saga has to be forked in the root saga of the app</p>
</dd>
</dl>

<a name="module_CrudActions"></a>

### CrudActions
<a name="module_CrudActions.entitiesFetched"></a>

#### CrudActions.entitiesFetched(route, key, result) ⇒ <code>Action</code>
Saves result of normalized data for a route

**Kind**: static method of [<code>CrudActions</code>](#module_CrudActions)  

| Param | Type | Description |
| --- | --- | --- |
| route | <code>string</code> | Route name |
| key | <code>string</code> | Key of entity |
| result | <code>number</code> \| <code>Array.&lt;number&gt;</code> | ID or IDs of entities (the result of normalization) |

<a name="withRouterParams"></a>

### withRouterParams ⇒ <code>function</code>
Creates a composed effectParamsFactory which automatically passes
current route params to effectParamsFactory

**Kind**: global constant  
**Returns**: <code>function</code> - Composed effectParamsFactory  

| Param | Type | Description |
| --- | --- | --- |
| effectParamsFactory | <code>function</code> | to be wrapped |

<a name="crudReducer"></a>

### crudReducer(state, action) ⇒ <code>CrudState</code>
The reducer of the crud module

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>CrudState</code> | The state of the crud module |
| action | <code>Action</code> | A redux action |

<a name="saveEntity"></a>

### saveEntity(entityData, entity, mapEntityToSaveParams, [form]) ⇒ <code>Object</code>
Creates or updates entity from form data

After entity has been saved, it reflects the data back into entity repository.

**Kind**: global function  
**Returns**: <code>Object</code> - updated entity  

| Param | Type | Description |
| --- | --- | --- |
| entityData | <code>Object</code> | Entity data |
| entity | <code>string</code> | Entity type |
| mapEntityToSaveParams | <code>function</code> | A function that maps an entity to the save params |
| [form] | <code>string</code> | Id of the form |

<a name="crudSaga"></a>

### crudSaga(mapRouteToFetchParams)
This saga has to be forked in the root saga of the app

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| mapRouteToFetchParams | <code>function</code> | A function that maps a route to the fetch params |

