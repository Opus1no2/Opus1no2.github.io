(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3AW9":function(e,t,r){"use strict";var a=r("q1tI"),i=r.n(a),n=r("MHn+"),s=function(){var e=.1*Math.random();return e*=1===Math.floor(2*Math.random())?1:-1},l=function(e,t){return Math.floor(Math.random()*(t-e))+e};t.a=function(){var e=Object(a.useRef)(),t=s(),r=s(),o=s();return Object(n.c)((function(){var a=e.current.position;a.x+=t,a.y+=r,a.z+=o,(a.x>=50||a.x<-50)&&(a.x=-a.x),(a.y>=50||a.y<-50)&&(a.y=-a.y),(a.z>=50||a.z<-50)&&(a.z=-a.z)})),i.a.createElement("mesh",{ref:e,scale:[l(.5,1),l(.5,1),l(.5,1)],position:[0,0,0]},i.a.createElement("sphereBufferGeometry",{args:[1,32,32]}),i.a.createElement("meshPhongMaterial",{color:4313599,shininess:100,specular:16770305,emissive:0}))}},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var a,i,n,s=r("KQm4"),l=r("q1tI"),o=r.n(l),c=function(){return o.a.createElement("div",{className:"box about"},o.a.createElement("h2",null,"About"),o.a.createElement("div",null,"I'm a software developer. My primary focus is front end development, but I also have experience working with a variety of back end technologies. I believe that when it comes to writing code - less is more. When I'm not writing code I'm traveling and reading good books."))},u=function(){return o.a.createElement("div",{className:"box bio space-between"},o.a.createElement("div",{className:"name"},o.a.createElement("h1",null,"Travis Tillotson"),o.a.createElement("div",null,"Software Developer")),o.a.createElement("div",{className:"pic"}),o.a.createElement("div",{className:"row"},o.a.createElement("a",{href:"https://github.com/Opus1no2"},"Github")," ",o.a.createElement("span",null,"/"),o.a.createElement("a",{href:"https://www.linkedin.com/in/travis-tillotson-2b210619/"},"LinkedIn")," ",o.a.createElement("span",null,"/"),o.a.createElement("a",{href:"mailto:tillotson.travis@gmail.com"},"Email")," "))},h=function(){return o.a.createElement("div",{className:"box skills"},o.a.createElement("h2",null,"Skills"),o.a.createElement("ul",null,o.a.createElement("li",null,"Javascript"),o.a.createElement("li",null,"React"),o.a.createElement("li",null,"Vue"),o.a.createElement("li",null,"Ember"),o.a.createElement("li",null,"Ruby"),o.a.createElement("li",null,"Node"),o.a.createElement("li",null,"Sinatra"),o.a.createElement("li",null,"Rails"),o.a.createElement("li",null,"PostgreSQL"),o.a.createElement("li",null,"MYSQL"),o.a.createElement("li",null,"Redis"),o.a.createElement("li",null,"Elastic Search"),o.a.createElement("li",null,"AWS Cloudfront"),o.a.createElement("li",null,"AWS Lambda"),o.a.createElement("li",null,"AWS S3"),o.a.createElement("li",null,"AWS EC2"),o.a.createElement("li",null,"AWS EBS")))},f=function(){return o.a.createElement("div",{className:"box projects"},o.a.createElement("h2",null,"Games"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://evil-snake.com/"},"Snake")),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://sudoku-game.com/"},"Sudoku")),o.a.createElement("li",null,o.a.createElement("a",{target:"_blank",rel:"noreferrer",href:"http://tetro-mania.com/"},"Tetris"))))},m=r("Wbzz"),d=function(){return o.a.createElement("div",{className:"box learning"},o.a.createElement("h2",null,"Prototypes"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(m.a,{to:"/Spheres/"},"Spheres")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/Orbit0/"},"Orbit 0")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/Orbit1/"},"Orbit 1")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/Orbit2/"},"Orbit 2")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/Mandlebrot/"},"Mandlebrot")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/CirclePattern/"},"Circle Patterns")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/FractalTree/"},"Fractal Tree")),o.a.createElement("li",null,o.a.createElement(m.a,{to:"/Narcissus/"},"Narcissus"))))},v=r("MHn+"),p=r("3AW9"),g=r("Womt"),E={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","\tvec4 texel = texture2D( tDiffuse, vUv );","\tgl_FragColor = opacity * texel;","}"].join("\n")};function b(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}Object.assign(b.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),b.FullScreenQuad=(a=new g.OrthographicCamera(-1,1,1,-1,0,1),i=new g.PlaneBufferGeometry(2,2),n=function(e){this._mesh=new g.Mesh(i,e)},Object.defineProperty(n.prototype,"material",{get:function(){return this._mesh.material},set:function(e){this._mesh.material=e}}),Object.assign(n.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(e){e.render(this._mesh,a)}}),n);var x=function(e,t){b.call(this),this.textureID=void 0!==t?t:"tDiffuse",e instanceof g.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=g.UniformsUtils.clone(e.uniforms),this.material=new g.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new b.FullScreenQuad(this.material)};x.prototype=Object.assign(Object.create(b.prototype),{constructor:x,render:function(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}});var y=function(e,t){b.call(this),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1};y.prototype=Object.assign(Object.create(b.prototype),{constructor:y,render:function(e,t,r){var a,i,n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0),this.inverse?(a=0,i=1):(a=1,i=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(i),s.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}});var _=function(){b.call(this),this.needsSwap=!1};_.prototype=Object.create(b.prototype),Object.assign(_.prototype,{render:function(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}});var S=function(e,t){if(this.renderer=e,void 0===t){var r={minFilter:g.LinearFilter,magFilter:g.LinearFilter,format:g.RGBAFormat},a=e.getSize(new g.Vector2);this._pixelRatio=e.getPixelRatio(),this._width=a.width,this._height=a.height,(t=new g.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===E&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===x&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new x(E),this.clock=new g.Clock};Object.assign(S.prototype,{swapBuffers:function(){var e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e},addPass:function(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},insertPass:function(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)},isLastEnabledPass:function(e){for(var t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0},render:function(e){void 0===e&&(e=this.clock.getDelta());var t,r,a=this.renderer.getRenderTarget(),i=!1,n=this.passes.length;for(r=0;r<n;r++)if(!1!==(t=this.passes[r]).enabled){if(t.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),t.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),t.needsSwap){if(i){var s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==y&&(t instanceof y?i=!0:t instanceof _&&(i=!1))}this.renderer.setRenderTarget(a)},reset:function(e){if(void 0===e){var t=this.renderer.getSize(new g.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(e,t){this._width=e,this._height=t;var r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(var i=0;i<this.passes.length;i++)this.passes[i].setSize(r,a)},setPixelRatio:function(e){this._pixelRatio=e,this.setSize(this._width,this._height)}});var w=function(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1};Object.assign(w.prototype,{setSize:function(){},render:function(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}),w.FullScreenQuad=function(){var e=new g.OrthographicCamera(-1,1,1,-1,0,1),t=new g.PlaneBufferGeometry(2,2),r=function(e){this._mesh=new g.Mesh(t,e)};return Object.defineProperty(r.prototype,"material",{get:function(){return this._mesh.material},set:function(e){this._mesh.material=e}}),Object.assign(r.prototype,{dispose:function(){this._mesh.geometry.dispose()},render:function(t){t.render(this._mesh,e)}}),r}();var C=function(e,t,r,a,i){b.call(this),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=void 0!==i?i:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1};C.prototype=Object.assign(Object.create(b.prototype),{constructor:C,render:function(e,t,r){var a,i,n,s=e.autoClear;e.autoClear=!1,void 0!==this.overrideMaterial&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(a=e.getClearColor().getHex(),i=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(a,i),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=n),e.autoClear=s}});var D={uniforms:{tDiffuse:{value:null},tSize:{value:new g.Vector2(256,256)},center:{value:new g.Vector2(.5,.5)},angle:{value:1.57},scale:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform vec2 center;","uniform float angle;","uniform float scale;","uniform vec2 tSize;","uniform sampler2D tDiffuse;","varying vec2 vUv;","float pattern() {","\tfloat s = sin( angle ), c = cos( angle );","\tvec2 tex = vUv * tSize - center;","\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;","\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;","}","void main() {","\tvec4 color = texture2D( tDiffuse, vUv );","\tfloat average = ( color.r + color.g + color.b ) / 3.0;","\tgl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );","}"].join("\n")},T={uniforms:{tDiffuse:{value:null},amount:{value:.005},angle:{value:0}},vertexShader:["varying vec2 vUv;","void main() {","\tvUv = uv;","\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float amount;","uniform float angle;","varying vec2 vUv;","void main() {","\tvec2 offset = amount * vec2( cos(angle), sin(angle));","\tvec4 cr = texture2D(tDiffuse, vUv + offset);","\tvec4 cga = texture2D(tDiffuse, vUv);","\tvec4 cb = texture2D(tDiffuse, vUv - offset);","\tgl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);","}"].join("\n")},M={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform int byp;","uniform sampler2D tDiffuse;","uniform sampler2D tDisp;","uniform float amount;","uniform float angle;","uniform float seed;","uniform float seed_x;","uniform float seed_y;","uniform float distortion_x;","uniform float distortion_y;","uniform float col_s;","varying vec2 vUv;","float rand(vec2 co){","return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);","}","void main() {","if(byp<1) {","vec2 p = vUv;","float xs = floor(gl_FragCoord.x / 0.5);","float ys = floor(gl_FragCoord.y / 0.5);","vec4 normal = texture2D (tDisp, p*seed*seed);","if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {","if(seed_x>0.){","p.y = 1. - (p.y + distortion_y);","}","else {","p.y = distortion_y;","}","}","if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {","if(seed_y>0.){","p.x=distortion_x;","}","else {","p.x = 1. - (p.x + distortion_x);","}","}","p.x+=normal.x*seed_x*(seed/5.);","p.y+=normal.y*seed_y*(seed/5.);","vec2 offset = amount * vec2( cos(angle), sin(angle));","vec4 cr = texture2D(tDiffuse, p + offset);","vec4 cga = texture2D(tDiffuse, p);","vec4 cb = texture2D(tDiffuse, p - offset);","gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);","vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.05);","gl_FragColor = gl_FragColor+ snow;","}","else {","gl_FragColor=texture2D (tDiffuse, vUv);","}","}"].join("\n")},R=function(e){b.call(this),void 0===M&&console.error("THREE.GlitchPass relies on THREE.DigitalGlitch");var t=M;this.uniforms=g.UniformsUtils.clone(t.uniforms),void 0===e&&(e=64),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new g.ShaderMaterial({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.camera=new g.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new g.Scene,this.quad=new g.Mesh(new g.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.factor=0};R.prototype=Object.assign(Object.create(b.prototype),{constructor:R,render:function(e,t,r,a,i){var n=Math.max(0,this.factor);this.uniforms.tDiffuse.value=r.texture,this.uniforms.seed.value=Math.random()*n,this.uniforms.byp.value=0,n?(this.uniforms.amount.value=Math.random()/90*n,this.uniforms.angle.value=g.Math.randFloat(-Math.PI,Math.PI)*n,this.uniforms.distortion_x.value=g.Math.randFloat(0,1)*n,this.uniforms.distortion_y.value=g.Math.randFloat(0,1)*n,this.uniforms.seed_x.value=g.Math.randFloat(-.3,.3)*n,this.uniforms.seed_y.value=g.Math.randFloat(-.3,.3)*n):this.uniforms.byp.value=1,this.quad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),e.render(this.scene,this.camera)):(e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera))},generateHeightmap:function(e){for(var t=new Float32Array(e*e*3),r=e*e,a=0;a<r;a++){var i=g.Math.randFloat(0,1);t[3*a+0]=i,t[3*a+1]=i,t[3*a+2]=i}var n=new g.DataTexture(t,e,e,g.RGBFormat,g.FloatType);return n.needsUpdate=!0,n}}),Object(v.b)({EffectComposer:S,RenderPass:C,ShaderPass:x,GlitchPass:R});var j=function(){var e=Object(v.d)(),t=e.gl,r=e.scene,a=e.camera,i=Object(l.useRef)(),n=Object(l.useState)(!1),s=n[0],c=n[1],u=Object(l.useState)(0),h=u[0],f=u[1];return Object(v.c)((function(){i.current.render()}),1),Object(l.useEffect)((function(){var e=setInterval((function(){return c(!0)}),5e3);return function(){return clearInterval(e)}})),Object(l.useEffect)((function(){s&&(f(.5),setTimeout((function(){return f(0)}),1e3),c(!1))}),[s,h]),o.a.createElement("effectComposer",{ref:i,args:[t]},o.a.createElement("renderPass",{attachArray:"passes",args:[r,a]}),o.a.createElement("shaderPass",{attachArray:"passes",args:[D],"uniforms-scale-value":4}),o.a.createElement("shaderPass",{attachArray:"passes",args:[T],"uniforms-amount-value":.0015}),o.a.createElement("glitchPass",{attachArray:"passes",factor:h}))};function O(){var e=Object(s.a)(Array(700).fill(null));return console.log("t"),o.a.createElement("main",null,o.a.createElement("div",{className:"cont"},o.a.createElement("div",{className:"row"},o.a.createElement(u,null),o.a.createElement(c,null),o.a.createElement(h,null)),o.a.createElement("div",{className:"row last space-between"},o.a.createElement(f,null),o.a.createElement(d,null))),o.a.createElement("div",{className:"full-page"},o.a.createElement(v.a,{camera:{fov:75,near:.1,far:1e3,look:[0,0,0],position:[30,20,30]}},o.a.createElement("directionalLight",{position:[-10,10,10],intensity:1,color:16777215}),o.a.createElement("ambientLight",{intensity:.1,color:16777215}),o.a.createElement("fog",{attach:"fog",args:["skyblue",0,25]}),e.map((function(e,t){return o.a.createElement(p.a,{key:t})})),o.a.createElement(j,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-66ef5be50bf2a629903a.js.map