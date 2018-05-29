# react-entities

## Install

Install this package with `npm`
```
npm i @salsita/react-entities
```

or `yarn`
```
yarn add @salsita/react-entities
```

## API
### Modules

<dl>
<dt><a href="#module_EntitiesActions">EntitiesActions</a></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#entitiesReducer">entitiesReducer(state, action)</a> ⇒ <code>EntitiesState</code></dt>
<dd><p>The reducer of the entities module</p>
</dd>
<dt><a href="#normalizeAndStore">normalizeAndStore(data, schema)</a> ⇒ <code>String</code> | <code>Number</code> | <code>Array</code></dt>
<dd><p>Normalize and store data into the entity repository</p>
<p>Normalizes data according to the schema and stores the result into the entity repository.</p>
</dd>
</dl>

<a name="module_EntitiesActions"></a>

### EntitiesActions
<a name="module_EntitiesActions.repositoryHasChanged"></a>

#### EntitiesActions.repositoryHasChanged(repository) ⇒ <code>Action</code>
Modifies entity repository

**Kind**: static method of [<code>EntitiesActions</code>](#module_EntitiesActions)  

| Param | Type | Description |
| --- | --- | --- |
| repository | <code>Partial.&lt;EntitiesState&gt;</code> | Entities that will be merged into the entity repository |

<a name="entitiesReducer"></a>

### entitiesReducer(state, action) ⇒ <code>EntitiesState</code>
The reducer of the entities module

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>EntitiesState</code> | The state of the entities module |
| action | <code>Action</code> | A redux action |

<a name="normalizeAndStore"></a>

### normalizeAndStore(data, schema) ⇒ <code>String</code> \| <code>Number</code> \| <code>Array</code>
Normalize and store data into the entity repository

Normalizes data according to the schema and stores the result into the entity repository.

**Kind**: global function  
**Returns**: <code>String</code> \| <code>Number</code> \| <code>Array</code> - Returns either ID or list of IDs of normalized data  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> \| <code>Array</code> | Entity or list of entities |
| schema | <code>Object</code> \| <code>Array</code> | Normalizr schema |

