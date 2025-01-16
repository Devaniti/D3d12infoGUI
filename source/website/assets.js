(()=>{"use strict";var n={494:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"#icon-required {\n    fill: #668866;\n}\n\n@media (prefers-color-scheme: dark) {\n    #icon-required {\n        fill: #446644;\n    }\n}\n\n\n#icon-supported {\n    fill: #11aa11;\n}\n\n@media (prefers-color-scheme: dark) {\n    #icon-supported {\n        fill: #33cc33;\n    }\n}\n\n\n#icon-unsupported {\n    fill: #994444;\n}\n\n@media (prefers-color-scheme: dark) {\n    #icon-unsupported {\n        fill: #aa4444;\n    }\n}",""]);const c=i},841:(n,e,t)=>{t.d(e,{A:()=>h});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),l=new URL(t(370),t.b),d=new URL(t(712),t.b),u=i()(o()),p=s()(l),f=s()(d);u.push([n.id,`@font-face {\n    font-family: SourceCodePro;\n    src: url(${p});\n}\n\n@font-face {\n    font-family: Roboto;\n    src: url(${f});\n}\n\nbody {\n    color: #000000;\n    background-color: #FFFFFF;\n}\n\ntable,\nfieldset {\n    border: 2px solid;\n    border-collapse: collapse;\n    border-color: #a7a7a7;\n}\n\na {\n    color: #004a94;\n    text-decoration: none;\n    text-align: center;\n    transition: color .3s ease-in;\n}\n\na:hover {\n    color: #3d9efe;\n}\n\n.icon {\n    width: 1.5em;\n    height: 1.5em;\n    margin-right: 0.2em;\n}\n\n.headerLink {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header {\n    height: 2.2em;\n    padding-top: 0.1em;\n    font-size: 1.2em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    max-width: 2100px;\n    margin: 0 auto 0.4em auto;\n    border-width: 2px;\n    border-radius: 4px;\n    background-color: #e6e5e5;\n}\n\n.headerLink {\n    padding-left: 0.25em;\n    padding-right: 0.25em;\n    height: 100%;\n}\n\n.flexRight {\n    margin-left: auto;\n}\n\n.cell-icon {\n    width: 1.45em;\n    height: 1.45em;\n    margin-left: auto;\n    margin-right: auto;\n    vertical-align: middle;\n}\n\n@media (prefers-color-scheme: dark) {\n    body {\n        color: #e1e1e1;\n        background-color: #1e1e1e;\n    }\n\n    a {\n        color: #64b2ff;\n    }\n\n    a:hover {\n        color: #b3d9ff;\n    }\n\n    .header {\n        background-color: #232323;\n        border-style: solid;\n        border-collapse: collapse;\n        border-color: #474747;\n    }\n\n    .icon {\n        filter: invert(1);\n    }\n\n}`,""]);const h=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},712:(n,e,t)=>{n.exports=t.p+"27f62b53b93858475a7f.ttf"},370:(n,e,t)=>{n.exports=t.p+"75bc14637f1d0317a8c5.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t.p,t.p;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),l=t(56),d=t.n(l),u=t(540),p=t.n(u),f=t(113),h=t.n(f),m=t(841),v={};v.styleTagTransform=h(),v.setAttributes=d(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals;var g=t(494),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(g.A,b),g.A&&g.A.locals&&g.A.locals})();