(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4jdG":function(e,t,n){"use strict";n.r(t);var r=n("KQm4"),a=n("q1tI"),c=n.n(a),u=n("AxVR");t.default=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(.01),n=Object(a.useState)(600),i=n[0],o=n[1],l=Object(a.useState)(600),s=l[0],f=l[1],b=Object(a.useState)([]),h=b[0],d=b[1],v=i/2,m=Object(a.useCallback)((function(e){e.beginPath(),e.strokeStyle="skyblue",e.arc(i/2,i/2,i/2,0,2*Math.PI),e.closePath(),e.stroke()}),[i]),j=Object(a.useCallback)((function(e,t,n){return Math.round(i/2*Math.cos(e*(2*Math.PI)/t)+n)}),[i]),w=Object(a.useCallback)((function(e,t,n){return Math.round(i/2*Math.sin(e*(2*Math.PI)/t)+n)}),[i]),O=Object(a.useCallback)((function(e,n,r,a){for(var c=0;c<e.length;c++){var u=c*t.current,i=j(u,n,r),o=w(u,n,r);a.beginPath(),a.strokeStyle="rgb(20, "+Math.floor(255%c)+", "+Math.floor(255%c+50)+")",a.moveTo(e[c].x,e[c].y),a.lineTo(i,o),a.closePath(),a.stroke()}}),[j,w]),g=Object(a.useCallback)((function(e,n){t.current+=.01,e.clearRect(0,0,n.width,n.height),t.current>=360&&(t.current=0),m(e),O(h,200,v,e)}),[m,O,h,v]);return Object(a.useEffect)((function(){window.innerWidth<=700&&o(window.innerWidth),window.innerHeight<=700&&f(window.innerHeight)}),[]),Object(a.useEffect)((function(){for(var e=function(e){var t=j(e,200,v),n=w(e,200,v);d((function(e){return[].concat(Object(r.a)(e),[{x:t,y:n}])}))},t=0;t<200;t++)e(t)}),[j,w,v]),Object(a.useEffect)((function(){var t,n=!1;if(!n){var r=e.current,a=r.getContext("2d");r.width=i,r.height=s,m(a),g(a,r),t=setInterval((function(){g(a,r)}),60)}return function(){n=!0,clearInterval(t)}}),[m,g,s,i]),c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null),c.a.createElement("div",{className:"cont"},c.a.createElement("canvas",{ref:e,id:"circle"})))}},AxVR:function(e,t,n){"use strict";var r=n("MUpH"),a=n("q1tI"),c=n.n(a),u=n("vOnD"),i=n("Wbzz");function o(){var e=Object(r.a)(["\n    display: flex;\n    align-items: center;\n    padding: 0 2rem 0 2rem;\n    border-bottom: solid 1px green;\n    min-height: 2rem;\n    z-index: 99;\n    background: black;\n  "]);return o=function(){return e},e}t.a=function(){var e=u.a.div(o());return c.a.createElement(e,null,c.a.createElement(i.a,{to:"/"},"Home"))}}}]);
//# sourceMappingURL=component---src-pages-circle-pattern-js-61acb239d87398c2667e.js.map