# react-forms

## Install

Install this package with `npm`
```
npm i @salsita/react-forms
```

or `yarn`
```
yarn add @salsita/react-forms
```

## API
### Modules

<dl>
<dt><a href="#module_FormValidations">FormValidations</a></dt>
<dd></dd>
</dl>

### Functions

<dl>
<dt><a href="#formsReducer">formsReducer(state, action)</a> ⇒ <code>FormsState</code></dt>
<dd><p>The reducer of the forms module</p>
</dd>
<dt><a href="#FormFieldSelect">FormFieldSelect(props)</a></dt>
<dd><p>A form field component for select</p>
</dd>
<dt><a href="#FormField">FormField(props)</a></dt>
<dd><p>A form field component for input</p>
</dd>
</dl>

### Interfaces

<dl>
<dt><a href="#FormFieldSelectProps">FormFieldSelectProps</a></dt>
<dd></dd>
<dt><a href="#FormFieldProps">FormFieldProps</a></dt>
<dd></dd>
</dl>

<a name="module_FormValidations"></a>

### FormValidations

* [FormValidations](#module_FormValidations)
    * [.isEmail(value)](#module_FormValidations.isEmail) ⇒ <code>string</code> \| <code>undefined</code>
    * [.notEmptyString(message)](#module_FormValidations.notEmptyString) ⇒ <code>function</code>
    * [.notEmptyObject(message)](#module_FormValidations.notEmptyObject) ⇒ <code>function</code>

<a name="module_FormValidations.isEmail"></a>

#### FormValidations.isEmail(value) ⇒ <code>string</code> \| <code>undefined</code>
Validates an email address

**Kind**: static method of [<code>FormValidations</code>](#module_FormValidations)  
**Returns**: <code>string</code> \| <code>undefined</code> - An error message  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>undefined</code> | The input value |

<a name="module_FormValidations.notEmptyString"></a>

#### FormValidations.notEmptyString(message) ⇒ <code>function</code>
Creates a validation function that checks if the input value is not an empty string

**Kind**: static method of [<code>FormValidations</code>](#module_FormValidations)  
**Returns**: <code>function</code> - The validation function  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The error message |

<a name="module_FormValidations.notEmptyObject"></a>

#### FormValidations.notEmptyObject(message) ⇒ <code>function</code>
Creates a validation function that checks if the input value is not an empty object

**Kind**: static method of [<code>FormValidations</code>](#module_FormValidations)  
**Returns**: <code>function</code> - The validation function  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> | The error message |

<a name="FormFieldSelectProps"></a>

### FormFieldSelectProps
**Kind**: global interface  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [label] | <code>string</code> | Label of the field |

<a name="FormFieldProps"></a>

### FormFieldProps
**Kind**: global interface  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Input type |
| [label] | <code>string</code> | Label of the field |

<a name="formsReducer"></a>

### formsReducer(state, action) ⇒ <code>FormsState</code>
The reducer of the forms module

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| state | <code>FormsState</code> | The state of redux-form |
| action | <code>Action</code> | A redux action |

<a name="FormFieldSelect"></a>

### FormFieldSelect(props)
A form field component for select

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>FormFieldSelectProps</code>](#FormFieldSelectProps) | Properties |

<a name="FormField"></a>

### FormField(props)
A form field component for input

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>FormFieldProps</code>](#FormFieldProps) | Properties |

