/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EditorJSInlineTemplate=t():e.EditorJSInlineTemplate=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"TemplateInlineTool",(function(){return s}));var r,o,i=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},u=function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};class s{constructor({api:e,config:t}){r.set(this,void 0),o.set(this,void 0),i(this,r,e),t&&"html"in t&&i(this,o,t)}static get isInline(){return!0}static get title(){return"Template"}get shortcut(){return"CMD+I"}checkState(){return!1}render(){var e;const t=document.createElement("button");return t.classList.add(u(this,r).styles.inlineToolButton),t.type="button",t.innerHTML=null!==(e=u(this,o).buttonHTML)&&void 0!==e?e:'\n        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">\n          <path d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/>\n          <rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/>\n        </svg>\n      ',t}surround(){s.isSurroundEnabled&&(document.execCommand("insertHTML",!1,u(this,o).html),s.isSurroundEnabled=!1,setTimeout(()=>s.isSurroundEnabled=!0))}}r=new WeakMap,o=new WeakMap,s.isSurroundEnabled=!0}])}));