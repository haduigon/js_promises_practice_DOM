parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("html");e.isClicked=!1;var t=function(e,t,n,i,o){var r=document.querySelector("body"),s=document.createElement("div"),c=document.createElement("h2");s.dataset.qa="notification",s.append(c),c.textContent=n,c.className="title";var a=document.createElement("p");a.textContent=i,s.append(a),s.style.top=e+"px",s.style.right=t+"px",s.dataset.qa="notification",s.className="notification + ".concat(o),r.append(s)},n=new Promise(function(t,n){e.addEventListener("pointerdown",function(){if(0===event.button)return e.isClicked=!0,t("First promise was resolved")}),setTimeout(function(){if(!1===e.isClicked)return n(new Error("First promise was rejected"))},3e3)});n.then(function(e){return t(30,20,e,"Message example.\n Notification should contain title and description.","success")}).catch(function(e){return t(30,20,e,"Message example.\n Notification should contain title and description.","error")});var i=new Promise(function(t,n){e.addEventListener("pointerdown",function(){return t("Second promise was resolved")})});function o(t){return new Promise(function(n){e.addEventListener("pointerdown",function(){event.button===t&&n("Third promise was resolved")})})}i.then(function(e){return t(180,20,e,"Message example.\n Notification should contain title and description.","success")});var r=o(0),s=o(2);r.then(function(){return s}).then(function(e){return t(30,340,e,"Message example.\n Notification should contain title and description.","success")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.2f2a3e8f.js.map