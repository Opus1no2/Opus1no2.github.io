(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{NQik:function(e,t,a){e.exports=a.p+"static/moon_1024-2e7ade181b8d94636304008d6f23a516.jpg"},Vfrk:function(e,t,a){e.exports=a.p+"static/earth_lights_2048-7ccf9db799e9c713dff7dc3461dafa25.png"},acDE:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Womt"),i=a("Wbzz"),c=a("MHn+"),s=a("+ap6"),l=a("Vfrk"),m=a.n(l),f=a("NQik"),u=a.n(f),p=function(e){var t=e.child;return r.a.createElement("mesh",null,r.a.createElement("sphereBufferGeometry",{args:[20,32,32]}),r.a.createElement("meshLambertMaterial",{color:13548840,emissive:13222977}),t())},h=function(e){var t=e.child,a=Object(n.useRef)(),i=(new o.TextureLoader).load(m.a);return Object(c.c)((function(e){var t=e.clock,n=a.current,r=t.getElapsedTime();n.rotation.y+=.01,n.rotation.x=.5,n.position.x=40*Math.cos(r),n.position.y=40*Math.cos(r),n.position.z=40*Math.sin(r)})),r.a.createElement("mesh",{ref:a},r.a.createElement("sphereBufferGeometry",{args:[7,32,32]}),r.a.createElement("meshLambertMaterial",{map:i}),t())},d=function(){var e=Object(n.useRef)(),t=(new o.TextureLoader).load(u.a);return Object(c.c)((function(){var t=Date.now()/500,a=e.current;a.rotation.y-=.01,a.rotation.x=.5,a.position.x=10*Math.cos(t),a.position.y=10*Math.cos(t),a.position.z=10*Math.sin(t)})),r.a.createElement("mesh",{ref:e},r.a.createElement("sphereBufferGeometry",{args:[2,32,32]}),r.a.createElement("meshLambertMaterial",{map:t}))};t.default=function(){return r.a.createElement("div",{className:"full-page"},r.a.createElement("div",{className:"pull-right"},r.a.createElement(i.a,{to:"/"},"Home")),r.a.createElement(c.a,{camera:{fov:75,near:.1,far:1e3,look:[0,0,0],position:[100,20,60]}},r.a.createElement("directionalLight",{color:16777215,intensity:1,position:[-10,0,30]}),r.a.createElement("ambientLight",{color:16777215,intensity:.5}),r.a.createElement("pointLight",{color:16777215,intensity:.5,distance:100}),r.a.createElement(p,{child:function(){return r.a.createElement(h,{child:d})}}),r.a.createElement(s.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-orbit-2-js-e21203df08b179a4ed15.js.map