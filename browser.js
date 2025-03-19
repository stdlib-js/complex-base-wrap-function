// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,v,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),e.alternate&&(t=p.call(t,y,"$1."),t=p.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):s.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(e){return e!=e}function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,i,a,c,f,s,l,p,g,d,y;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",f=1,s=0;s<e.length;s++)if("string"==typeof(n=e[s]))c+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+j(y):j(y)+p)),c+=n.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function O(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[O(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var V,F=Object.prototype,P=F.toString,C=F.__defineGetter__,$=F.__defineSetter__,G=F.__lookupGetter__,N=F.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var R=V;function B(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"boolean"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,W=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=M()?function(e){var r,t,n,i,o;if(null==e)return U.call(e);t=e[Y],o=Y,r=null!=(i=e)&&W.call(i,o);try{e[Y]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[Y]=t:delete e[Y],n}:function(e){return U.call(e)},q=Boolean,D=Boolean.prototype.toString,H=M();function J(e){return"object"==typeof e&&(e instanceof q||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function K(e){return L(e)||J(e)}B(K,"isPrimitive",L),B(K,"isObject",J);var Q="object"==typeof self?self:null,ee="object"==typeof window?window:null,re="object"==typeof globalThis?globalThis:null,te=function(e){if(arguments.length){if(!L(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(re)return re;if(Q)return Q;if(ee)return ee;throw new Error("unexpected error. Unable to resolve global object.")}(),ne=te.document&&te.document.childNodes,ie=Int8Array;function oe(){return/^\s*function\s*([^(]*)/i}var ae=/^\s*function\s*([^(]*)/i;B(oe,"REGEXP",ae);var ce=Array.isArray?Array.isArray:function(e){return"[object Array]"===z(e)};function ue(e){return null!==e&&"object"==typeof e}function fe(e){var r,t,n,i;if(("Object"===(t=z(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ae.exec(n.toString()))return r[1]}return ue(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(ue,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ce(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ue));var se="function"==typeof e||"object"==typeof ie||"function"==typeof ne?function(e){return fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?fe(e).toLowerCase():r};function le(e){return"function"===se(e)}function pe(e){return"number"==typeof e}var ge=Number,de=ge.prototype.toString,ye=M();function be(e){return"object"==typeof e&&(e instanceof ge||(ye?function(e){try{return de.call(e),!0}catch(e){return!1}}(e):"[object Number]"===z(e)))}function he(e){return pe(e)||be(e)}B(he,"isPrimitive",pe),B(he,"isObject",be);var we=Number.POSITIVE_INFINITY,ve=ge.NEGATIVE_INFINITY,me=Math.floor;function je(e){return e<we&&e>ve&&me(r=e)===r;var r}function _e(e){return pe(e)&&je(e)}function Ee(e){return be(e)&&je(e.valueOf())}function Se(e){return _e(e)||Ee(e)}function Te(e){return _e(e)&&e>=0}function xe(e){return Ee(e)&&e.valueOf()>=0}function ke(e){return Te(e)||xe(e)}function Ie(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}B(Se,"isPrimitive",_e),B(Se,"isObject",Ee),B(ke,"isPrimitive",Te),B(ke,"isObject",xe);var Oe="number";return function(e,r,t){if(!le(e))throw new TypeError(Ie("0Gb3c",e));if(!Te(r))throw new TypeError(Ie("0Gb3X",r));if(!le(t))throw new TypeError(Ie("0Gb3d",t));return r<=5?[function(){return e()},function(r){return typeof r===Oe&&(r=new t(r,0)),e(r)},function(r,n){return typeof r===Oe&&(r=new t(r,0)),typeof n===Oe&&(n=new t(n,0)),e(r,n)},function(r,n,i){return typeof r===Oe&&(r=new t(r,0)),typeof n===Oe&&(n=new t(n,0)),typeof i===Oe&&(i=new t(i,0)),e(r,n,i)},function(r,n,i,o){return typeof r===Oe&&(r=new t(r,0)),typeof n===Oe&&(n=new t(n,0)),typeof i===Oe&&(i=new t(i,0)),typeof o===Oe&&(o=new t(o,0)),e(r,n,i,o)},function(r,n,i,o,a){return typeof r===Oe&&(r=new t(r,0)),typeof n===Oe&&(n=new t(n,0)),typeof i===Oe&&(i=new t(i,0)),typeof o===Oe&&(o=new t(o,0)),typeof a===Oe&&(a=new t(a,0)),e(r,n,i,o,a)}][r]:function(){var r,n,i;for(r=[],i=0;i<arguments.length;i++)typeof(n=arguments[i])===Oe&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).wrap=r();
//# sourceMappingURL=browser.js.map
