<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# wrap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Wrap a function accepting complex number arguments to support providing both real and complex numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/complex-base-wrap-function
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var wrap = require( '@stdlib/complex-base-wrap-function' );
```

#### wrap( fcn, nargs, ctor )

Returns a function which wraps a function accepting complex number arguments to support providing both real and complex numbers.

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var caddf = require( '@stdlib/math-base-ops-caddf' );

var f = wrap( caddf, 2, Complex64 );
// returns <Function>
```

The function accepts the following arguments:

-   **fcn**: the function to wrap.
-   **nargs**: the number of arguments to be provided to the wrapped function.
-   **ctor**: complex number constructor for converting real numbers to complex numbers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned function **assumes** that the wrapped function accepts **only** complex number input arguments (i.e., every argument must be a complex number).
-   The returned function **assumes** that, if an input argument is non-numeric (i.e., not of type `number`), then the input argument is a complex number. The returned function does **not** verify that non-numeric input arguments are, in fact, complex number objects. The returned function passes non-numeric input arguments to the wrapped function without modification.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32' );
var caddf = require( '@stdlib/math-base-ops-caddf' );
var realf = require( '@stdlib/complex-realf' );
var imagf = require( '@stdlib/complex-imagf' );
var wrap = require( '@stdlib/complex-base-wrap-function' );

var f = wrap( caddf, 2, Complex64 );

// ...

var z = f( 3.0, 4.0 );
// returns <Complex64>

var re = realf( z );
// returns 7.0

var im = imagf( z );
// returns 0.0

console.log( '%d + %di', re, im );
// => '7 + 0i'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-base-wrap-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-base-wrap-function

[test-image]: https://github.com/stdlib-js/complex-base-wrap-function/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex-base-wrap-function/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-base-wrap-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-base-wrap-function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-base-wrap-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-base-wrap-function/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-base-wrap-function/tree/deno
[umd-url]: https://github.com/stdlib-js/complex-base-wrap-function/tree/umd
[esm-url]: https://github.com/stdlib-js/complex-base-wrap-function/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-base-wrap-function/main/LICENSE

</section>

<!-- /.links -->
