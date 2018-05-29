# react-helpers

## Install

Install this package with `npm`
```
npm i @salsita/react-helpers
```

or `yarn`
```
yarn add @salsita/react-helpers
```

## API
### Functions

<dl>
<dt><a href="#composeSaga">composeSaga(...sagas)</a> ⇒ <code>Generator</code></dt>
<dd><p>A helper function to compose multiple sagas</p>
<p>Given two Sagas as arguments, eg. compose(f, g) function composition f∘g is performed.
Please note that functions are executed in backward order.</p>
</dd>
<dt><a href="#empty">empty()</a></dt>
<dd><p>An empty function that performs nothing</p>
</dd>
<dt><a href="#identity">identity(value)</a></dt>
<dd><p>An identity function that return its input</p>
</dd>
</dl>

<a name="composeSaga"></a>

### composeSaga(...sagas) ⇒ <code>Generator</code>
A helper function to compose multiple sagas

Given two Sagas as arguments, eg. compose(f, g) function composition f∘g is performed.
Please note that functions are executed in backward order.

**Kind**: global function  
**Returns**: <code>Generator</code> - Composed Saga  

| Param | Type | Description |
| --- | --- | --- |
| ...sagas | <code>Generator</code> | Sagas to be composed |

<a name="empty"></a>

### empty()
An empty function that performs nothing

**Kind**: global function  
<a name="identity"></a>

### identity(value)
An identity function that return its input

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | A value that will be returned |

