// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var r="number";function o(o,f,p){if(!e(o))throw new TypeError(t("08H3p",o));if(!n(f))throw new TypeError(t("08H3k",f));if(!e(p))throw new TypeError(t("08H3q",p));return f<=5?[function(){return o()},function(e){typeof e===r&&(e=new p(e,0));return o(e)},function(e,n){typeof e===r&&(e=new p(e,0));typeof n===r&&(n=new p(n,0));return o(e,n)},function(e,n,t){typeof e===r&&(e=new p(e,0));typeof n===r&&(n=new p(n,0));typeof t===r&&(t=new p(t,0));return o(e,n,t)},function(e,n,t,f){typeof e===r&&(e=new p(e,0));typeof n===r&&(n=new p(n,0));typeof t===r&&(t=new p(t,0));typeof f===r&&(f=new p(f,0));return o(e,n,t,f)},function(e,n,t,f,i){typeof e===r&&(e=new p(e,0));typeof n===r&&(n=new p(n,0));typeof t===r&&(t=new p(t,0));typeof f===r&&(f=new p(f,0));typeof i===r&&(i=new p(i,0));return o(e,n,t,f,i)}][f]:function(){var e,n,t;for(e=[],t=0;t<arguments.length;t++)typeof(n=arguments[t])===r&&(n=new p(n,0)),e.push(n);return o.apply(null,e)}}export{o as default};
//# sourceMappingURL=index.mjs.map
