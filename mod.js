// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(t,e)||a.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&f&&f.call(t,e,r.set),t};var l=r;function p(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var m=s()?function(t){var e,r,n,o,u;if(null==t)return w.call(t);r=t[d],u=d,e=null!=(o=t)&&v.call(o,u);try{t[d]=void 0}catch(e){return w.call(t)}return n=w.call(t),e?t[d]=r:delete t[d],n}:function(t){return w.call(t)},_=Boolean.prototype.toString;var j=s();function g(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function h(t){return y(t)||g(t)}function O(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",g);var E="object"==typeof self?self:null,S="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof T?T:null;var P=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(E)return E;if(S)return S;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),A=P.document&&P.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",G);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function F(t){return null!==t&&"object"==typeof t}function x(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=G.exec(n.toString()))return e[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!V(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(F));var C="function"==typeof t||"object"==typeof N||"function"==typeof A?function(t){return x(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?x(t).toLowerCase():e};function k(t){return"function"===C(t)}function L(t){return"number"==typeof t}var M=Number,R=M.prototype.toString;var U=s();function X(t){return"object"==typeof t&&(t instanceof M||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function Y(t){return L(t)||X(t)}p(Y,"isPrimitive",L),p(Y,"isObject",X);var J=Number.POSITIVE_INFINITY,K=M.NEGATIVE_INFINITY,q=Math.floor;function z(t){return t<J&&t>K&&q(e=t)===e;var e}function D(t){return L(t)&&z(t)}function H(t){return X(t)&&z(t.valueOf())}function Q(t){return D(t)||H(t)}function W(t){return D(t)&&t>=0}function Z(t){return H(t)&&t.valueOf()>=0}function $(t){return W(t)||Z(t)}function tt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}p(Q,"isPrimitive",D),p(Q,"isObject",H),p($,"isPrimitive",W),p($,"isObject",Z);var et="number";function rt(t,e,r){if(!k(t))throw new TypeError(tt("0Gb3c,J9",t));if(!W(e))throw new TypeError(tt("0Gb3X,F1",e));if(!k(r))throw new TypeError(tt("0Gb3d,Ka",r));return e<=5?[function(){return t()},function(e){typeof e===et&&(e=new r(e,0));return t(e)},function(e,n){typeof e===et&&(e=new r(e,0));typeof n===et&&(n=new r(n,0));return t(e,n)},function(e,n,o){typeof e===et&&(e=new r(e,0));typeof n===et&&(n=new r(n,0));typeof o===et&&(o=new r(o,0));return t(e,n,o)},function(e,n,o,u){typeof e===et&&(e=new r(e,0));typeof n===et&&(n=new r(n,0));typeof o===et&&(o=new r(o,0));typeof u===et&&(u=new r(u,0));return t(e,n,o,u)},function(e,n,o,u,i){typeof e===et&&(e=new r(e,0));typeof n===et&&(n=new r(n,0));typeof o===et&&(o=new r(o,0));typeof u===et&&(u=new r(u,0));typeof i===et&&(i=new r(i,0));return t(e,n,o,u,i)}][e]:function(){var e,n,o;for(e=[],o=0;o<arguments.length;o++)typeof(n=arguments[o])===et&&(n=new r(n,0)),e.push(n);return t.apply(null,e)}}export{rt as default};
//# sourceMappingURL=mod.js.map
