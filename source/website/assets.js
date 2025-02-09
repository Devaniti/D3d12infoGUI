(()=>{"use strict";var n={841:(n,e,t)=>{t.d(e,{A:()=>h});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),l=new URL(t(370),t.b),u=new URL(t(712),t.b),d=a()(o()),f=s()(l),p=s()(u);d.push([n.id,`@font-face {\n    font-family: SourceCodePro;\n    src: url(${f});\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url(${p});\n}\n\nbody {\n    color: #000000;\n    background-color: #FFFFFF;\n}\n\ntable,\nfieldset {\n    border: 2px solid;\n    border-collapse: collapse;\n    border-color: #a7a7a7;\n}\n\na {\n    color: #004a94;\n    text-decoration: none;\n    text-align: center;\n    transition: color .3s ease-in;\n}\n\na:hover {\n    color: #3d9efe;\n}\n\n.icon {\n    width: 1.5em;\n    height: 1.5em;\n    margin-left: 0.2em;\n}\n\n.headerLink {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header {\n    height: 2.2em;\n    padding-top: 0.1em;\n    font-size: 1.2em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-width: 2100px;\n    margin: 0 auto 0.4em auto;\n    border-width: 2px;\n    border-radius: 4px;\n    background-color: #e6e5e5;\n}\n\n.headerLink {\n    padding-left: 0.25em;\n    padding-right: 0.25em;\n    height: 100%;\n}\n\n.flexRight {\n    margin-left: auto;\n}\n\n.cell-icon {\n    width: 1.45em;\n    height: 1.45em;\n    margin-left: auto;\n    margin-right: auto;\n    vertical-align: middle;\n}\n\n.gui-tooltip {\n    position: relative;\n    cursor: help;\n}\n\n.gui-tooltip .gui-tooltiptext {\n    visibility: hidden;\n    background-color: #ffffff;\n    color: #000000;\n    text-align: center;\n    border-radius: 0.4em;\n    border-color: #7f7f7f;\n    border-style: solid;\n    border-width: 0.1em;\n    padding: 0.3em;\n    margin: 0 0.2em;\n    font-size: initial;\n    font-family: initial;\n\n    position: absolute;\n    z-index: 1;\n    top: 110%;\n}\n\n.gui-tooltip:hover .gui-tooltiptext {\n    visibility: visible;\n}\n\n@media (prefers-color-scheme: dark) {\n    body {\n        color: #e1e1e1;\n        background-color: #1e1e1e;\n    }\n\n    a {\n        color: #64b2ff;\n    }\n\n    a:hover {\n        color: #b3d9ff;\n    }\n\n    .header {\n        background-color: #232323;\n        border-style: solid;\n        border-collapse: collapse;\n        border-color: #474747;\n    }\n\n    .icon {\n        filter: invert(1);\n    }\n\n    .gui-tooltip .gui-tooltiptext {\n        background-color: #232323;\n        color: #ffffff;\n        border-color: #7f7f7f;\n    }\n\n}`,""]);const h=d},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var h=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},712:(n,e,t)=>{n.exports=t.p+"27f62b53b93858475a7f.ttf"},370:(n,e,t)=>{n.exports=t.p+"75bc14637f1d0317a8c5.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),s=t.n(c),l=t(56),u=t.n(l),d=t(540),f=t.n(d),p=t(113),h=t.n(p),m=t(841),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=f(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals})();