(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{AxVR:function(n,e,t){"use strict";var r=t("MUpH"),a=t("q1tI"),i=t.n(a),c=t("vOnD"),o=t("Wbzz");function u(){var n=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    padding: 0 2rem 0 2rem;\n    border-bottom: solid 1px green;\n    min-height: 2rem;\n    z-index: 99;\n    background: black;\n  "]);return u=function(){return n},n}e.a=function(){var n=c.a.div(u());return i.a.createElement(n,null,i.a.createElement(o.a,{to:"/"},"Home"))}},SZmg:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),a=t.n(r),i=t("AxVR");e.default=function(){var n=Object(r.useRef)(null),e=function(n,e){for(var t=0,r=0,a=0;r*r+t*t<=4&&a<1e3;){var i=r*r-t*t+n;t=2*r*t+e,r=i,a++}return a},t=function(n,e,t,r){return n*((r-t)/e)+t},c=function(n,e,t,r){return n*((r-t)/e)+t};return Object(r.useEffect)((function(){var r=window.innerWidth,a=window.innerHeight,i=n.current,o=i.getContext("2d");i.width=r,i.height=a;for(var u=0;u<a;u++)for(var l=0;l<r;l++){var f=t(l,r,-2.5,1),d=c(u,a,-1,1),s=e(f,d),m=s%250,v=s%200,b=s%256;o.fillStyle="rgb("+m+", "+v+", "+b+")",o.fillRect(l,u,1,1)}}),[-1,1,-2.5,1]),a.a.createElement("div",{className:"mandlebrot-cont"},a.a.createElement(i.a,null),a.a.createElement("canvas",{ref:n,id:"canvas",className:"full-page"}))}}}]);
//# sourceMappingURL=component---src-pages-mandlebrot-js-82c8292e08defee87838.js.map