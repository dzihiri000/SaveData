parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
function t(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=e(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,c=function(){};return{s:c,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var r=document.querySelectorAll(".header__nav-item");function o(e){var n,o=t(r);try{for(o.s();!(n=o.n()).done;){n.value.classList.remove("active")}}catch(c){o.e(c)}finally{o.f()}r[e].classList.add("active")}r.forEach(function(t,e){t.onclick=function(){o(e)}});var c=function(){var t=document.querySelector(".header__burger"),e=document.querySelector(".header__nav-items");t.addEventListener("click",function(){e.classList.toggle("nav-active"),t.classList.toggle("toggle")})};c();var a=document.querySelectorAll(".testimonial-slide"),i=document.querySelectorAll(".testimonials__controls-dot"),l=document.querySelectorAll(".testimonials__controls-arrow"),u=document.querySelector(".arrow-left"),s=document.querySelector(".arrow-right"),f=document.querySelectorAll(".testimonials__controls-arrow"),d=0;function v(e){var n,r=t(f);try{for(r.s();!(n=r.n()).done;){n.value.classList.remove("active-arrow")}}catch(o){r.e(o)}finally{r.f()}f[e].classList.add("active-arrow")}function y(e){var n,r=t(i);try{for(r.s();!(n=r.n()).done;){n.value.classList.remove("active-dot")}}catch(o){r.e(o)}finally{r.f()}i[e].classList.add("active-dot")}function m(e){var n,r=t(a);try{for(r.s();!(n=r.n()).done;){n.value.classList.remove("active-slide")}}catch(o){r.e(o)}finally{r.f()}a[e].classList.add("active-slide")}function h(){++d>a.length-1&&(d=0),y(d),m(d)}function g(){--d<0&&(d=a.length-1),y(d),m(d)}f.forEach(function(t,e){t.onclick=function(){v(e)}}),i.forEach(function(t,e){t.onclick=function(){y(e),m(e)}}),u.addEventListener("click",g),s.addEventListener("click",h);
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.86b704ee.js.map