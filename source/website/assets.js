(()=>{"use strict";var e={841:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),l=new URL(t(370),t.b),d=new URL(t(712),t.b),p=i()(o()),u=s()(l),f=s()(d);p.push([e.id,`@font-face {\n    font-family: SourceCodePro;\n    src: url(${u});\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url(${f});\n}\n\nbody {\n    color: #000000;\n    background-color: #FFFFFF;\n}\n\ntable,\nfieldset {\n    border: 2px solid;\n    border-collapse: collapse;\n    border-color: #a7a7a7;\n}\n\na {\n    color: #004a94;\n    text-decoration: none;\n    text-align: center;\n    transition: color .3s ease-in;\n}\n\na:hover {\n    color: #3d9efe;\n}\n\n.icon {\n    width: 1.5em;\n    height: 1.5em;\n}\n\n.headerText,\n.icon {\n    display: inline-block;\n    vertical-align: top;\n}\n\n.headerText {\n    padding-top: 0.15em;\n}\n\n.header {\n    height: 1.8em;\n    padding-top: 0.3em;\n    margin-bottom: 0.3em;\n    vertical-align: middle;\n    font-size: 1.2em;\n    display: flex;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #e6e5e5;\n    border-collapse: collapse;\n    border-radius: 4px;\n    background-color: #e6e5e5;\n}\n\n.headerLink {\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n}\n\n.flexRight {\n    margin-left: auto;\n}\n\n@media (prefers-color-scheme: dark) {\n    body {\n        color: #e1e1e1;\n        background-color: #1e1e1e;\n    }   \n    a {\n        color: #64b2ff;\n    }\n    a:hover {\n        color: #b3d9ff;\n    }\n    .header {\n        background-color: #232323;\n        border-style: solid;\n        border-collapse: collapse;\n        border-color: #474747;\n    }\n    .icon {\n        filter: invert(1);\n    }\n\n}\n`,""]);const h=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},712:(e,n,t)=>{e.exports=t.p+"27f62b53b93858475a7f.ttf"},370:(e,n,t)=>{e.exports=t.p+"75bc14637f1d0317a8c5.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t.p,t.p,t.p,t.p;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),l=t(56),d=t.n(l),p=t(540),u=t.n(p),f=t(113),h=t.n(f),m=t(841),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals})();