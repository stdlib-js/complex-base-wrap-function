// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,h=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function j(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,y,"e+0$1"),t=g.call(t,d,"e-0$1"),e.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,h,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):l.call(t)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+_(n):_(n)+e}var S=String.fromCharCode,T=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,a,c,s,l,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,l=0;l<e.length;l++)if(f(n=e[l]))c+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",s+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function V(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(A(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function P(e){var r,t,n;if(!F(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=V(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var N,C=Object.prototype,$=C.toString,G=C.__defineGetter__,R=C.__defineSetter__,B=C.__lookupGetter__,L=C.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};var Z=N;function M(e,r,t){Z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"boolean"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString,z=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",q=X()?function(e){var r,t,n,i,o;if(null==e)return Y.call(e);t=e[K],o=K,r=null!=(i=e)&&z.call(i,o);try{e[K]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[K]=t:delete e[K],n}:function(e){return Y.call(e)},D=Boolean,H=Boolean.prototype.toString,Q=X();function ee(e){return"object"==typeof e&&(e instanceof D||(Q?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===q(e)))}function re(e){return U(e)||ee(e)}function te(){return new Function("return this;")()}M(re,"isPrimitive",U),M(re,"isObject",ee);var ne="object"==typeof self?self:null,ie="object"==typeof window?window:null,oe="object"==typeof globalThis?globalThis:null,ae=function(e){if(arguments.length){if(!U(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(oe)return oe;if(ne)return ne;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ce=ae.document&&ae.document.childNodes,ue=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;M(fe,"REGEXP",se);var le=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function pe(e){return null!==e&&"object"==typeof e}function ge(e){var r,t,n,i;if(("Object"===(t=q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return pe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!le(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(pe));var ye="function"==typeof e||"object"==typeof ue||"function"==typeof ce?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r};function de(e){return"function"===ye(e)}function be(e){return"number"==typeof e}var he=Number,we=he.prototype.toString,ve=X();function me(e){return"object"==typeof e&&(e instanceof he||(ve?function(e){try{return we.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function je(e){return be(e)||me(e)}M(je,"isPrimitive",be),M(je,"isObject",me);var _e=Number.POSITIVE_INFINITY,Ee=he.NEGATIVE_INFINITY,Se=Math.floor;function Te(e){return e<_e&&e>Ee&&Se(r=e)===r;var r}function xe(e){return be(e)&&Te(e)}function ke(e){return me(e)&&Te(e.valueOf())}function Ie(e){return xe(e)||ke(e)}function Oe(e){return xe(e)&&e>=0}function Ae(e){return ke(e)&&e.valueOf()>=0}function Ve(e){return Oe(e)||Ae(e)}function Fe(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}M(Ie,"isPrimitive",xe),M(Ie,"isObject",ke),M(Ve,"isPrimitive",Oe),M(Ve,"isObject",Ae);var Pe="number";return function(e,r,t){if(!de(e))throw new TypeError(Fe("0Gb3c,J9",e));if(!Oe(r))throw new TypeError(Fe("0Gb3X,F1",r));if(!de(t))throw new TypeError(Fe("0Gb3d,Ka",t));return r<=5?[function(){return e()},function(r){return typeof r===Pe&&(r=new t(r,0)),e(r)},function(r,n){return typeof r===Pe&&(r=new t(r,0)),typeof n===Pe&&(n=new t(n,0)),e(r,n)},function(r,n,i){return typeof r===Pe&&(r=new t(r,0)),typeof n===Pe&&(n=new t(n,0)),typeof i===Pe&&(i=new t(i,0)),e(r,n,i)},function(r,n,i,o){return typeof r===Pe&&(r=new t(r,0)),typeof n===Pe&&(n=new t(n,0)),typeof i===Pe&&(i=new t(i,0)),typeof o===Pe&&(o=new t(o,0)),e(r,n,i,o)},function(r,n,i,o,a){return typeof r===Pe&&(r=new t(r,0)),typeof n===Pe&&(n=new t(n,0)),typeof i===Pe&&(i=new t(i,0)),typeof o===Pe&&(o=new t(o,0)),typeof a===Pe&&(a=new t(a,0)),e(r,n,i,o,a)}][r]:function(){var r,n,i;for(r=[],i=0;i<arguments.length;i++)typeof(n=arguments[i])===Pe&&(n=new t(n,0)),r.push(n);return e.apply(null,r)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).wrap=r();
//# sourceMappingURL=browser.js.map