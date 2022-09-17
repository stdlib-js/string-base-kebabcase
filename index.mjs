// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.0.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.0.1-esm/index.mjs";var r=/\s+/g,i=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,n=/([a-z0-9])([A-Z])/g;function d(d){return d=t(d,i," "),d=t(d,n,"$1 $2"),d=e(d),d=t(d,r,"-"),s(d)}export{d as default};
//# sourceMappingURL=index.mjs.map
