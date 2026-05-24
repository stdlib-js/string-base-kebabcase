"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=v(function(g,i){
var E=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),c=require('@stdlib/string-base-trim/dist'),n=/\s+/g,o=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,q=/([a-z0-9])([A-Z])/g;function A(e){return e=a(e,o," "),e=a(e,q,"$1 $2"),e=c(e),e=a(e,n,"-"),E(e)}i.exports=A
});var C=u();module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
