# react-api

## Install

Install this package with `npm`
```
npm i @salsita/react-api
```

or `yarn`
```
yarn add @salsita/react-api
```

## API
### Modules

<dl>
<dt><a href="#module_ApiActions">ApiActions</a></dt>
<dd></dd>
<dt><a href="#module_ApiSelectors">ApiSelectors</a></dt>
<dd></dd>
</dl>

### Classes

<dl>
<dt><a href="#ApiError">ApiError</a></dt>
<dd><p>The base class for API errors</p>
</dd>
<dt><a href="#BusinessValidationError">BusinessValidationError</a></dt>
<dd><p>The class for business validation error</p>
</dd>
</dl>

### Constants

<dl>
<dt><a href="#HTTP_CONFLICT">HTTP_CONFLICT</a></dt>
<dd><p>The error code for HTTP conflict</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#apiReducer">apiReducer(state, action)</a> ⇒ <code>ApiState</code></dt>
<dd><p>The reducer of the API module</p>
</dd>
<dt><a href="#withErrorHandling">withErrorHandling(saga, ...args)</a></dt>
<dd><p>Wraps saga into try/catch block catching all the ApiErrors
and translating them to API_ERROR actions.</p>
</dd>
<dt><a href="#withLoadingIndicator">withLoadingIndicator(saga, ...args)</a></dt>
<dd><p>Wraps saga into start/stop loading actions</p>
</dd>
<dt><a href="#wrapApiCall">wrapApiCall(call)</a> ⇒ <code>function</code></dt>
<dd><p>Wraps function with try/catch block to catch all the API errors
and translate them to according exceptions.</p>
</dd>
<dt><a href="#ApiErrorToast">ApiErrorToast()</a></dt>
<dd><p>A simple component that shows an error toast message</p>
</dd>
<dt><a href="#ApiLoader">ApiLoader()</a></dt>
<dd><p>A simple component that shows a loading indicator</p>
</dd>
</dl>

<a name="module_ApiActions"></a>

### ApiActions

* [ApiActions](#module_ApiActions)
    * [.apiError(errorType, errorReason)](#module_ApiActions.apiError) ⇒ <code>Action</code>
    * [.startLoading()](#module_ApiActions.startLoading) ⇒ <code>Action</code>
    * [.stopLoading()](#module_ApiActions.stopLoading) ⇒ <code>Action</code>

<a name="module_ApiActions.apiError"></a>

#### ApiActions.apiError(errorType, errorReason) ⇒ <code>Action</code>
Saves API error

**Kind**: static method of [<code>ApiActions</code>](#module_ApiActions)  

| Param | Type | Description |
| --- | --- | --- |
| errorType | <code>string</code> | Type of the error |
| errorReason | <code>string</code> | Reason of the error |

<a name="module_ApiActions.startLoading"></a>

#### ApiActions.startLoading() ⇒ <code>Action</code>
Sets the global loading indicator on

**Kind**: static method of [<code>ApiActions</code>](#module_ApiActions)  
<a name="module_ApiActions.stopLoading"></a>

#### ApiActions.stopLoading() ⇒ <code>Action</code>
Sets the global loading indicator off

**Kind**: static method of [<code>ApiActions</code>](#module_ApiActions)  
<a name="module_ApiSelectors"></a>

### ApiSelectors

* [ApiSelectors](#module_ApiSelectors)
    * [.getError(state)](#module_ApiSelectors.getError) ⇒ <code>string</code> \| <code>null</code>
    * [.isLoading(state)](#module_ApiSelectors.isLoading) ⇒ <code>boolean</code>

<a name="module_ApiSelectors.getError"></a>

#### ApiSelectors.getError(state) ⇒ <code>string</code> \| <code>null</code>
Returns the latest API error type

**Kind**: static method of [<code>ApiSelectors</code>](#module_ApiSelectors)  
**Returns**: <code>string</code> \| <code>null</code> - The latest API error type  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>RootState</code> | The root state |

<a name="module_ApiSelectors.isLoading"></a>

#### ApiSelectors.isLoading(state) ⇒ <code>boolean</code>
Returns true if a loading is in progress

**Kind**: static method of [<code>ApiSelectors</code>](#module_ApiSelectors)  
**Returns**: <code>boolean</code> - True if a loading indicator is in progress, false otherwise  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>RootState</code> | The root state |

<a name="ApiError"></a>

### ApiError
The base class for API errors

**Kind**: global class  

* [ApiError](#ApiError)
    * [.constructor(type, reason)](#ApiError+constructor)
    * [.getReason()](#ApiError+getReason) ⇒ <code>string</code>
    * [.getType()](#ApiError+getType) ⇒ <code>string</code>

<a name="ApiError+constructor"></a>

#### apiError.constructor(type, reason)
Creates an API error

**Kind**: instance method of [<code>ApiError</code>](#ApiError)  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of the error |
| reason | <code>string</code> | Reason of the error |

<a name="ApiError+getReason"></a>

#### apiError.getReason() ⇒ <code>string</code>
Get the error reason

**Kind**: instance method of [<code>ApiError</code>](#ApiError)  
**Returns**: <code>string</code> - The error reason  
<a name="ApiError+getType"></a>

#### apiError.getType() ⇒ <code>string</code>
Get the error type

**Kind**: instance method of [<code>ApiError</code>](#ApiError)  
**Returns**: <code>string</code> - The error type  
<a name="BusinessValidationError"></a>

### BusinessValidationError
The class for business validation error

**Kind**: global class  
<a name="BusinessValidationError+constructor"></a>

#### businessValidationError.constructor(reason)
Creates a business validation error

**Kind**: instance method of [<code>BusinessValidationError</code>](#BusinessValidationError)  

| Param | Type | Description |
| --- | --- | --- |
| reason | <code>string</code> | The error reason |

<a name="HTTP_CONFLICT"></a>

### HTTP_CONFLICT
The error code for HTTP conflict

**Kind**: global constant  
<a name="apiReducer"></a>

### apiReducer(state, action) ⇒ <code>ApiState</code>
The reducer of the API module

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>ApiState</code> | The state of the API module |
| action | <code>Action</code> | A redux action |

<a name="withErrorHandling"></a>

### withErrorHandling(saga, ...args)
Wraps saga into try/catch block catching all the ApiErrors
and translating them to API_ERROR actions.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| saga | <code>Generator</code> | API call saga which may throw an ApiError |
| ...args | <code>any</code> | Arguments to be passed to the saga |

<a name="withLoadingIndicator"></a>

### withLoadingIndicator(saga, ...args)
Wraps saga into start/stop loading actions

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| saga | <code>Generator</code> | A long running saga |
| ...args | <code>any</code> | Arguments to be passed to the saga |

<a name="wrapApiCall"></a>

### wrapApiCall(call) ⇒ <code>function</code>
Wraps function with try/catch block to catch all the API errors
and translate them to according exceptions.

**Kind**: global function  
**Returns**: <code>function</code> - Wrapped API call function  

| Param | Type | Description |
| --- | --- | --- |
| call | <code>function</code> | A function calling an API client and returning promise |

<a name="ApiErrorToast"></a>

### ApiErrorToast()
A simple component that shows an error toast message

**Kind**: global function  
<a name="ApiLoader"></a>

### ApiLoader()
A simple component that shows a loading indicator

**Kind**: global function  
