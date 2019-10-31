# largetable

> jQuery plugin to scroll in/maximize large tables

## Usage

Install with npm:

```
$ npm install largetable
```

Then include largetable files in the HTML:

```html
<!-- largetable styles -->
<link rel="stylesheet" href="largetable.css">

<!-- Include jQuery -->
<script src="node_modules/jquery/dist/jquery.min.js"></script>

<!-- Include largetable script -->
<script src="largetable.js"></script>
```

## Usage

Trigger `largetable()` method on `table` elements:

```javascript    
$(".your-text-container table").largetable(options);
```

## Options

The following options are available:

```javascript
const options = {
  enableMaximize: false // Set it to true to enable table maximization.
};
```

## Events

The following events are dispatched by the plugin:

* `toggleMaximize`
* `maximize`
* `unmaximize`

See `demo.html` for more details.

## License

The MIT License (MIT) - Copyright (c) 2019 Thomas Brouard (Edinum.org)
