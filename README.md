<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# kebabcase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a string to kebab case.

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import kebabcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-kebabcase@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/string-base-kebabcase/tags). For example,

```javascript
import kebabcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-kebabcase@v0.2.3-deno/mod.js';
```

#### kebabcase( str )

Converts a string to kebab case.

```javascript
var str = kebabcase( 'Foo Bar' );
// returns 'foo-bar'

str = kebabcase( 'I am a tiny little house' );
// returns 'i-am-a-tiny-little-house'

str = kebabcase( 'Hello World!' );
// returns 'hello-world'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
import kebabcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-kebabcase@deno/mod.js';

var str = 'foo bar baz';
var out = kebabcase( str );
// returns 'foo-bar-baz'

str = 'foo_baz';
out = kebabcase( str );
// returns 'foo-baz'

str = 'foo-bar-baz!';
out = kebabcase( str );
// returns 'foo-bar-baz'

str = 'beep    boop!';
out = kebabcase( str );
// returns 'beep-boop'

str = 'foo-baz';
out = kebabcase( str );
// returns 'foo-baz'

str = 'Welcome! 😀';
out = kebabcase( str );
// returns 'welcome-😀'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-base/camelcase`][@stdlib/string/base/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="package-name">[`@stdlib/string-base/lowercase`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="package-name">[`@stdlib/string-base/pascalcase`][@stdlib/string/base/pascalcase]</span><span class="delimiter">: </span><span class="description">convert a string to Pascal case.</span>
-   <span class="package-name">[`@stdlib/string-base/snakecase`][@stdlib/string/base/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>
-   <span class="package-name">[`@stdlib/string-base/uppercase`][@stdlib/string/base/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-kebabcase.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-kebabcase

[test-image]: https://github.com/stdlib-js/string-base-kebabcase/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/string-base-kebabcase/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-kebabcase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-kebabcase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-kebabcase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-kebabcase/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-kebabcase/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-base-kebabcase/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-base-kebabcase/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-base-kebabcase/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-base-kebabcase/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-base-kebabcase/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-base-kebabcase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-kebabcase/main/LICENSE

<!-- <related-links> -->

[@stdlib/string/base/camelcase]: https://github.com/stdlib-js/string-base-camelcase/tree/deno

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string-base-lowercase/tree/deno

[@stdlib/string/base/pascalcase]: https://github.com/stdlib-js/string-base-pascalcase/tree/deno

[@stdlib/string/base/snakecase]: https://github.com/stdlib-js/string-base-snakecase/tree/deno

[@stdlib/string/base/uppercase]: https://github.com/stdlib-js/string-base-uppercase/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
