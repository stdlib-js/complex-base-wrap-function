"use strict";var q=function(f,u){return function(){return u||f((u={exports:{}}).exports,u),u.exports}};var v=q(function(I,m){
var w=require('@stdlib/assert-is-function/dist'),E=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,p=require('@stdlib/error-tools-fmtprodmsg/dist'),t="number";function N(f,u,r){var s;if(!w(f))throw new TypeError(p('0Gb3c',f));if(!E(u))throw new TypeError(p('0Gb3X',u));if(!w(r))throw new TypeError(p('0Gb3d',r));return s=[g,l,y,h,d,T],u<=5?s[u]:b;function g(){return f()}function l(e){return typeof e===t&&(e=new r(e,0)),f(e)}function y(e,n){return typeof e===t&&(e=new r(e,0)),typeof n===t&&(n=new r(n,0)),f(e,n)}function h(e,n,i){return typeof e===t&&(e=new r(e,0)),typeof n===t&&(n=new r(n,0)),typeof i===t&&(i=new r(i,0)),f(e,n,i)}function d(e,n,i,a){return typeof e===t&&(e=new r(e,0)),typeof n===t&&(n=new r(n,0)),typeof i===t&&(i=new r(i,0)),typeof a===t&&(a=new r(a,0)),f(e,n,i,a)}function T(e,n,i,a,o){return typeof e===t&&(e=new r(e,0)),typeof n===t&&(n=new r(n,0)),typeof i===t&&(i=new r(i,0)),typeof a===t&&(a=new r(a,0)),typeof o===t&&(o=new r(o,0)),f(e,n,i,a,o)}function b(){var e,n,i;for(e=[],i=0;i<arguments.length;i++)n=arguments[i],typeof n===t&&(n=new r(n,0)),e.push(n);return f.apply(null,e)}}m.exports=N
});var V=v();module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
