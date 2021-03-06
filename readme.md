# read-package [![Build Status](https://travis-ci.org/bukinoshita/read-package.svg?branch=master)](https://travis-ci.org/bukinoshita/read-package)

> Reads [package.json](https://docs.npmjs.com/files/package.json) in the working directory.

## Install

```
$ yarn add read-package
```

## Usage

```
.
├── foo
│   └── ...
└── bar
    └── package.json
```

```js
const readPackage = require('read-package')

readPackage('foo')
//=> package.json not found in the current project.

readPackage('bar')
//=> { "name": "fixture", "version": "1.0.0" }
```

## API

### readPackage([cwd])

Returns an `object` or `throws an error`.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.

## Related

- [has-package](https://github.com/bukinoshita/has-package) — Check if a project has package.json

## License

MIT © [Bu Kinoshita](https://bukinoshita.com)
