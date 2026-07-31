"use strict";var q=function(f,u){return function(){try{return u||f((u={exports:{}}).exports,u),u.exports}catch(i){throw u=0,i}}};var v=q(function(I,m){"use strict";var w=require("@stdlib/assert-is-function"),E=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,p=require("@stdlib/string-format"),t="number";function N(f,u,i){var s;if(!w(f))throw new TypeError(p("invalid argument. First argument must be a function. Value: `%s`.",f));if(!E(u))throw new TypeError(p("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",u));if(!w(i))throw new TypeError(p("invalid argument. Third argument must be a constructor function. Value: `%s`.",i));return s=[g,l,y,h,d,T],u<=5?s[u]:b;function g(){return f()}function l(e){return typeof e===t&&(e=new i(e,0)),f(e)}function y(e,n){return typeof e===t&&(e=new i(e,0)),typeof n===t&&(n=new i(n,0)),f(e,n)}function h(e,n,r){return typeof e===t&&(e=new i(e,0)),typeof n===t&&(n=new i(n,0)),typeof r===t&&(r=new i(r,0)),f(e,n,r)}function d(e,n,r,a){return typeof e===t&&(e=new i(e,0)),typeof n===t&&(n=new i(n,0)),typeof r===t&&(r=new i(r,0)),typeof a===t&&(a=new i(a,0)),f(e,n,r,a)}function T(e,n,r,a,o){return typeof e===t&&(e=new i(e,0)),typeof n===t&&(n=new i(n,0)),typeof r===t&&(r=new i(r,0)),typeof a===t&&(a=new i(a,0)),typeof o===t&&(o=new i(o,0)),f(e,n,r,a,o)}function b(){var e,n,r;for(e=[],r=0;r<arguments.length;r++)n=arguments[r],typeof n===t&&(n=new i(n,0)),e.push(n);return f.apply(null,e)}}m.exports=N});var V=v();module.exports=V;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
