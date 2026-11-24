"use strict";var E=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var u=E(function(p,i){
var c=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),n=require('@stdlib/string-base-trim/dist'),o=/\s+/g,q=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,A=/([a-z0-9])([A-Z])/g;function C(e){return e=a(e,q," "),e=a(e,A,"$1 $2"),e=n(e),e=a(e,o,"-"),c(e)}i.exports=C
});var _=u();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
