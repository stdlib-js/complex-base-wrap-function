// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).wrap=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,p,y;if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,t,r.get),y&&f&&f.call(e,t,r.set),e};var a=r;function p(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(e){var t,r,n,o,u;if(null==e)return w.call(e);r=e[d],u=d,t=null!=(o=e)&&v.call(o,u);try{e[d]=void 0}catch(t){return w.call(e)}return n=w.call(e),t?e[d]=r:delete e[d],n}:function(e){return w.call(e)},j=Boolean.prototype.toString;var _=b();function g(e){return"object"==typeof e&&(e instanceof Boolean||(_?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===m(e)))}function h(e){return y(e)||g(e)}function O(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",g);var E="object"==typeof self?self:null,S="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof T?T:null;var P=function(e){if(arguments.length){if(!y(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return O()}if(E)return E;if(S)return S;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),A=P.document&&P.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",G);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===m(e)};function x(e){return null!==e&&"object"==typeof e}function F(e){var t,r,n,o;if(("Object"===(r=m(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=G.exec(n.toString()))return t[1]}return x(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(x,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(x));var C="function"==typeof e||"object"==typeof N||"function"==typeof A?function(e){return F(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?F(e).toLowerCase():t};function k(e){return"function"===C(e)}function L(e){return"number"==typeof e}var M=Number,R=M.prototype.toString;var U=b();function X(e){return"object"==typeof e&&(e instanceof M||(U?function(e){try{return R.call(e),!0}catch(e){return!1}}(e):"[object Number]"===m(e)))}function Y(e){return L(e)||X(e)}p(Y,"isPrimitive",L),p(Y,"isObject",X);var J=Number.POSITIVE_INFINITY,K=M.NEGATIVE_INFINITY,q=Math.floor;function z(e){return e<J&&e>K&&q(t=e)===t;var t}function D(e){return L(e)&&z(e)}function H(e){return X(e)&&z(e.valueOf())}function Q(e){return D(e)||H(e)}function W(e){return D(e)&&e>=0}function Z(e){return H(e)&&e.valueOf()>=0}function $(e){return W(e)||Z(e)}function ee(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}p(Q,"isPrimitive",D),p(Q,"isObject",H),p($,"isPrimitive",W),p($,"isObject",Z);var te="number";return function(e,t,r){if(!k(e))throw new TypeError(ee("0Gb3c,J9",e));if(!W(t))throw new TypeError(ee("0Gb3X,F1",t));if(!k(r))throw new TypeError(ee("0Gb3d,Ka",r));return t<=5?[function(){return e()},function(t){typeof t===te&&(t=new r(t,0));return e(t)},function(t,n){typeof t===te&&(t=new r(t,0));typeof n===te&&(n=new r(n,0));return e(t,n)},function(t,n,o){typeof t===te&&(t=new r(t,0));typeof n===te&&(n=new r(n,0));typeof o===te&&(o=new r(o,0));return e(t,n,o)},function(t,n,o,u){typeof t===te&&(t=new r(t,0));typeof n===te&&(n=new r(n,0));typeof o===te&&(o=new r(o,0));typeof u===te&&(u=new r(u,0));return e(t,n,o,u)},function(t,n,o,u,i){typeof t===te&&(t=new r(t,0));typeof n===te&&(n=new r(n,0));typeof o===te&&(o=new r(o,0));typeof u===te&&(u=new r(u,0));typeof i===te&&(i=new r(i,0));return e(t,n,o,u,i)}][t]:function(){var t,n,o;for(t=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===te&&(n=new r(n,0)),t.push(n);return e.apply(null,t)}}}));
//# sourceMappingURL=browser.js.map
