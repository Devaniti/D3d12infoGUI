"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[248],{889:(n,e,t)=>{t.d(e,{A:()=>p});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),l=t.n(c),d=new URL(t(956),t.b),s=i()(r()),u=l()(d);s.push([n.id,`main {\n    width: 100%;\n}\n\n.ReportTable {\n    min-width: 70em;\n    max-width: 2100px;\n    margin-left: auto;\n    margin-right: auto;\n    font-family: "SourceCodePro", "Courier New", Courier, monospace;\n}\n\ntable,\nfieldset {\n    border: 2px solid;\n    border-collapse: collapse;\n    border-color: #a7a7a7;\n    margin: 0.9em 0;\n    font-size: 1.0em;\n    box-shadow: 0 0 0.9em rgba(0, 0, 0, 0.15);\n    table-layout: fixed;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n}\n\ntable {\n    width: 100%;\n}\n\nfieldset {\n    float: left;\n    margin: 0.5em 0.5em 0.5em 0.0em;\n    flex: 0 1;\n    white-space: nowrap;\n}\n\n#AdaptersFilterContainer {\n    width: 100%;\n    display: flex;\n    flex-flow: row;\n    align-items: stretch;\n}\n\ntr {\n    width: 100%;\n}\n\ntr:nth-of-type(odd) {\n    background-color: #e6e5e5;\n}\n\ntr:nth-of-type(1) {\n    text-align: center;\n    background-color: #e6e5e5;\n    padding: 0;\n}\n\ntd {\n    padding: 2px;\n    border: 1px solid;\n    border-color: #a7a7a7;\n}\n\ntd:nth-of-type(even) {\n    background-color: #00000010;\n}\n\nbutton {\n    margin: auto;\n    width: 11.5em;\n    background-color: #029c07;\n    border: none;\n    color: white;\n    padding: 0.3em 0.6em;\n    margin-left: 0.1em;\n    margin-right: 0.1em;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 1.1em;\n}\n\nbutton:disabled {\n    background-color: #7c7c7c;\n}\n\n.clickableRow.clickableRow.clickableRow {\n    cursor: pointer;\n}\n\n.clickableRow:hover {\n    background-color: #f4de98;\n}\n\n.clickableCell {\n    cursor: pointer;\n}\n\n.clickableCell:hover {\n    background-color: #f4de98;\n}\n\n.center {\n    text-align: center;\n}\n\n.searchBar {\n    width: 100%;\n    padding: 0.5em;\n    border: 2px solid;\n    border-color: #a7a7a7;\n    border-radius: 4px;\n    font-size: 1.2em;\n    background-image: url(${u});\n    background-position: 0.5em 0.5em;\n    background-repeat: no-repeat;\n    padding-left: 2em;\n}\n\n.tooltip {\n    position: relative;\n}\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    background-color: #ffffff;\n    color: #000000;\n    text-align: center;\n    border-radius: 0.4em;\n    border-color: #7f7f7f;\n    border-style: solid;\n    border-width: 0.1em;\n    padding: 0.3em;\n    margin: 0 0.2em;\n\n    position: absolute;\n    z-index: 1;\n    bottom: 110%;\n}\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n\n.tooltipicon {\n    height: 0.9em;\n    margin: 0.05em 0.15em;\n    vertical-align: sub;\n}\n\n.FormatTable {\n    width: auto;\n    top: 0;\n}\n\n.FormatTable tr:nth-of-type(1) {\n    position: sticky;\n    top: 0;\n}\n\n.vertical-text {\n    writing-mode: vertical-rl;\n    white-space: pre;\n}\n\n@media (prefers-color-scheme: dark) {\n\n    table,\n    fieldset {\n        border-color: #8c8c8c;\n        background-color: #2d2d2d;\n    }\n\n    tr:nth-of-type(odd) {\n        background-color: #262626;\n    }\n\n    tr:nth-of-type(1) {\n        background-color: #262626;\n    }\n\n    td {\n        border-color: #FFFFFF33;\n    }\n\n    td:nth-of-type(even) {\n        background-color: #00000020;\n    }\n\n    button {\n        background-color: #005b00;\n    }\n\n    button:disabled {\n        background-color: #464646;\n    }\n\n    .clickableRow:hover {\n        background-color: #4d4d4d;\n    }\n\n    .clickableCell:hover {\n        background-color: #4d4d4d;\n    }\n\n    .searchBar {\n        color: #ffffff;\n        border-color: #7f7f7f;\n        background-color: #232323;\n    }\n\n    .tooltip .tooltiptext {\n        background-color: #232323;\n        color: #ffffff;\n        border-color: #7f7f7f;\n    }\n}`,""]);const p=s},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},234:(n,e,t)=>{var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),l=t.n(c),d=t(56),s=t.n(d),u=t(540),p=t.n(u),f=t(113),m=t.n(f),b=t(889),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=l().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p(),r()(b.A,h),b.A&&b.A.locals&&b.A.locals},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],d=o.base?l[0]+o.base:l[0],s=a[d]||0,u="".concat(d," ").concat(s);a[d]=s+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=o(n,r),d=0;d<a.length;d++){var s=t(a[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},256:(n,e,t)=>{t(234);var o=t(480),r=t(928),a=t(568);function i(n){const e=document.getElementById("TableContainer"),t=document.createElement("div"),o=document.createTextNode(n);t.appendChild(o),a.E(e),e.appendChild(t)}window.addEventListener("DOMContentLoaded",(function(){const n=new URL(document.location).searchParams;n.has("ID")?(r.p(!0),o.ri(n.get("ID"),(n=>{if(0==n.length)return void i("Invalid ID.");let e=new URL(document.location).searchParams;r.y(n,e.get("ID"))}))):i("Missing ID parameter.")}),!1)},956:(n,e,t)=>{n.exports=t.p+"search.svg"}},n=>{n(n.s=256)}]);