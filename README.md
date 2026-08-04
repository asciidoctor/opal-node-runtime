# Opal Runtime for Asciidoctor.js

[![Build](https://github.com/asciidoctor/opal-node-runtime/actions/workflows/build.yml/badge.svg)](https://github.com/asciidoctor/opal-node-runtime/actions/workflows/build.yml)
[![npm version](http://img.shields.io/npm/v/@asciidoctor/opal-runtime.svg)](https://www.npmjs.com/package/@asciidoctor/opal-runtime)

> [!WARNING]
> **This package is no longer maintained.**   
> Starting with Asciidoctor.js 4.0, the project is now a native JavaScript implementation.
> It is no longer compiled from Ruby via Opal.
> Please refer to the [Asciidoctor.js documentation](https://docs.asciidoctor.org/asciidoctor.js/latest/) for up-to-date usage instructions.


> [!CAUTION]
> This library is a _highly optimized_ version of the Opal runtime that contains the *bare minimum to run Asciidoctor*.
> If you are looking for a general purpose Opal runtime, please use https://www.npmjs.com/package/opal-runtime.

## Usage

```javascript
import Opal from '@asciidoctor/opal-runtime'
// Now let's have fun with Opal!
```

This library is also available as a CommonJS module:

```javascript
const Opal = require('@asciidoctor/opal-runtime')
// Now let's have fun with Opal!
```
