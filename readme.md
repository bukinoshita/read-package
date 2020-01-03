# read-package [![Build Status](https://travis-ci.org/bukinoshita/read-package.svg?branch=master)](https://travis-ci.org/bukinoshita/read-package)

> Reads [package.json](https://docs.npmjs.com/files/package.json) in the working directory.

## Install

```
$ npm install --save read-package
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

readPackage('foo').catch(err => err)
//=> package.json not found in the current project.

readPackage('bar').then(package => package)
//=> { "name": "fixture", "version": "1.0.0" }
```


## API

### readPackage([cwd])

Returns a `promise`.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.


## Related
- [has-package](https://github.com/bukinoshita/has-package) — Check if a project has package.json


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
