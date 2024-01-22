import{k as qe,l as Qe,E as Je,V as P,m as z,n as v,Q as Te,o as Ee,h as M,p as $e}from"./three-loader-3diles-87y130yI.js";function Pe(){let a;if(typeof window<"u"&&window.performance)a=window.performance.now();else if(typeof process<"u"&&process.hrtime){const n=process.hrtime();a=n[0]*1e3+n[1]/1e6}else a=Date.now();return a}class Oe{constructor(n,i){this.name=void 0,this.type=void 0,this.sampleSize=1,this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this.name=n,this.type=i,this.reset()}reset(){return this.time=0,this.count=0,this.samples=0,this.lastTiming=0,this.lastSampleTime=0,this.lastSampleCount=0,this._count=0,this._time=0,this._samples=0,this._startTime=0,this._timerPending=!1,this}setSampleSize(n){return this.sampleSize=n,this}incrementCount(){return this.addCount(1),this}decrementCount(){return this.subtractCount(1),this}addCount(n){return this._count+=n,this._samples++,this._checkSampling(),this}subtractCount(n){return this._count-=n,this._samples++,this._checkSampling(),this}addTime(n){return this._time+=n,this.lastTiming=n,this._samples++,this._checkSampling(),this}timeStart(){return this._startTime=Pe(),this._timerPending=!0,this}timeEnd(){return this._timerPending?(this.addTime(Pe()-this._startTime),this._timerPending=!1,this._checkSampling(),this):this}getSampleAverageCount(){return this.sampleSize>0?this.lastSampleCount/this.sampleSize:0}getSampleAverageTime(){return this.sampleSize>0?this.lastSampleTime/this.sampleSize:0}getSampleHz(){return this.lastSampleTime>0?this.sampleSize/(this.lastSampleTime/1e3):0}getAverageCount(){return this.samples>0?this.count/this.samples:0}getAverageTime(){return this.samples>0?this.time/this.samples:0}getHz(){return this.time>0?this.samples/(this.time/1e3):0}_checkSampling(){this._samples===this.sampleSize&&(this.lastSampleTime=this._time,this.lastSampleCount=this._count,this.count+=this._count,this.time+=this._time,this.samples+=this._samples,this._time=0,this._count=0,this._samples=0)}}let et=class{constructor(n){this.id=void 0,this.stats={},this.id=n.id,this.stats={},this._initializeStats(n.stats),Object.seal(this)}get(n){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"count";return this._getOrCreate({name:n,type:i})}get size(){return Object.keys(this.stats).length}reset(){for(const n of Object.values(this.stats))n.reset();return this}forEach(n){for(const i of Object.values(this.stats))n(i)}getTable(){const n={};return this.forEach(i=>{n[i.name]={time:i.time||0,count:i.count||0,average:i.getAverageTime()||0,hz:i.getHz()||0}}),n}_initializeStats(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).forEach(i=>this._getOrCreate(i))}_getOrCreate(n){const{name:i,type:e}=n;let s=this.stats[i];return s||(n instanceof Oe?s=n:s=new Oe(i,e),this.stats[i]=s),s}};(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();const Ce={type:"change"},ee={type:"start"},Me={type:"end"},G=new qe,we=new Qe,tt=Math.cos(70*$e.DEG2RAD);class lt extends Je{constructor(n,i){super(),this.object=n,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:z.ROTATE,MIDDLE:z.DOLLY,RIGHT:z.PAN},this.touches={ONE:v.ROTATE,TWO:v.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",J),this._domElementKeyEvents=t},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",J),this._domElementKeyEvents=null},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(Ce),e.update(),r=s.NONE},this.update=function(){const t=new P,o=new Te().setFromUnitVectors(n.up,new P(0,1,0)),l=o.clone().invert(),d=new P,g=new Te,R=new P,O=2*Math.PI;return function(Ve=null){const Se=e.object.position;t.copy(Se).sub(e.target),t.applyQuaternion(o),h.setFromVector3(t),e.autoRotate&&r===s.NONE&&H(je(Ve)),e.enableDamping?(h.theta+=y.theta*e.dampingFactor,h.phi+=y.phi*e.dampingFactor):(h.theta+=y.theta,h.phi+=y.phi);let w=e.minAzimuthAngle,A=e.maxAzimuthAngle;isFinite(w)&&isFinite(A)&&(w<-Math.PI?w+=O:w>Math.PI&&(w-=O),A<-Math.PI?A+=O:A>Math.PI&&(A-=O),w<=A?h.theta=Math.max(w,Math.min(A,h.theta)):h.theta=h.theta>(w+A)/2?Math.max(w,h.theta):Math.min(A,h.theta)),h.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,h.phi)),h.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(u,e.dampingFactor):e.target.add(u),e.target.sub(e.cursor),e.target.clampLength(e.minTargetRadius,e.maxTargetRadius),e.target.add(e.cursor),e.zoomToCursor&&F||e.object.isOrthographicCamera?h.radius=q(h.radius):h.radius=q(h.radius*T),t.setFromSpherical(h),t.applyQuaternion(l),Se.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(y.theta*=1-e.dampingFactor,y.phi*=1-e.dampingFactor,u.multiplyScalar(1-e.dampingFactor)):(y.set(0,0,0),u.set(0,0,0));let $=!1;if(e.zoomToCursor&&F){let k=null;if(e.object.isPerspectiveCamera){const U=t.length();k=q(U*T);const B=U-k;e.object.position.addScaledVector(se,B),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const U=new P(D.x,D.y,0);U.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/T)),e.object.updateProjectionMatrix(),$=!0;const B=new P(D.x,D.y,0);B.unproject(e.object),e.object.position.sub(B).add(U),e.object.updateMatrixWorld(),k=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;k!==null&&(this.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(k).add(e.object.position):(G.origin.copy(e.object.position),G.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(G.direction))<tt?n.lookAt(e.target):(we.setFromNormalAndCoplanarPoint(e.object.up,e.target),G.intersectPlane(we,e.target))))}else e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/T)),e.object.updateProjectionMatrix(),$=!0);return T=1,F=!1,$||d.distanceToSquared(e.object.position)>c||8*(1-g.dot(e.object.quaternion))>c||R.distanceToSquared(e.target)>0?(e.dispatchEvent(Ce),d.copy(e.object.position),g.copy(e.object.quaternion),R.copy(e.target),!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",_e),e.domElement.removeEventListener("pointerdown",ge),e.domElement.removeEventListener("pointercancel",N),e.domElement.removeEventListener("wheel",ye),e.domElement.removeEventListener("pointermove",Q),e.domElement.removeEventListener("pointerup",N),e._domElementKeyEvents!==null&&(e._domElementKeyEvents.removeEventListener("keydown",J),e._domElementKeyEvents=null)};const e=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const c=1e-6,h=new Ee,y=new Ee;let T=1;const u=new P,f=new M,p=new M,E=new M,_=new M,b=new M,m=new M,C=new M,x=new M,j=new M,se=new P,D=new M;let F=!1;const S=[],K={};function je(t){return t!==null?2*Math.PI/60*e.autoRotateSpeed*t:2*Math.PI/60/60*e.autoRotateSpeed}function X(t){const o=Math.abs(t)/(100*(window.devicePixelRatio|0));return Math.pow(.95,e.zoomSpeed*o)}function H(t){y.theta-=t}function Z(t){y.phi-=t}const oe=function(){const t=new P;return function(l,d){t.setFromMatrixColumn(d,0),t.multiplyScalar(-l),u.add(t)}}(),ae=function(){const t=new P;return function(l,d){e.screenSpacePanning===!0?t.setFromMatrixColumn(d,1):(t.setFromMatrixColumn(d,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(l),u.add(t)}}(),L=function(){const t=new P;return function(l,d){const g=e.domElement;if(e.object.isPerspectiveCamera){const R=e.object.position;t.copy(R).sub(e.target);let O=t.length();O*=Math.tan(e.object.fov/2*Math.PI/180),oe(2*l*O/g.clientHeight,e.object.matrix),ae(2*d*O/g.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(oe(l*(e.object.right-e.object.left)/e.object.zoom/g.clientWidth,e.object.matrix),ae(d*(e.object.top-e.object.bottom)/e.object.zoom/g.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function W(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?T/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function re(t){e.object.isPerspectiveCamera||e.object.isOrthographicCamera?T*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function V(t,o){if(!e.zoomToCursor)return;F=!0;const l=e.domElement.getBoundingClientRect(),d=t-l.left,g=o-l.top,R=l.width,O=l.height;D.x=d/R*2-1,D.y=-(g/O)*2+1,se.set(D.x,D.y,1).unproject(e.object).sub(e.object.position).normalize()}function q(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function le(t){f.set(t.clientX,t.clientY)}function Le(t){V(t.clientX,t.clientX),C.set(t.clientX,t.clientY)}function ce(t){_.set(t.clientX,t.clientY)}function Ie(t){p.set(t.clientX,t.clientY),E.subVectors(p,f).multiplyScalar(e.rotateSpeed);const o=e.domElement;H(2*Math.PI*E.x/o.clientHeight),Z(2*Math.PI*E.y/o.clientHeight),f.copy(p),e.update()}function ze(t){x.set(t.clientX,t.clientY),j.subVectors(x,C),j.y>0?W(X(j.y)):j.y<0&&re(X(j.y)),C.copy(x),e.update()}function ve(t){b.set(t.clientX,t.clientY),m.subVectors(b,_).multiplyScalar(e.panSpeed),L(m.x,m.y),_.copy(b),e.update()}function He(t){V(t.clientX,t.clientY),t.deltaY<0?re(X(t.deltaY)):t.deltaY>0&&W(X(t.deltaY)),e.update()}function Ne(t){let o=!1;switch(t.code){case e.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?Z(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):L(0,e.keyPanSpeed),o=!0;break;case e.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?Z(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):L(0,-e.keyPanSpeed),o=!0;break;case e.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?H(2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):L(e.keyPanSpeed,0),o=!0;break;case e.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?H(-2*Math.PI*e.rotateSpeed/e.domElement.clientHeight):L(-e.keyPanSpeed,0),o=!0;break}o&&(t.preventDefault(),e.update())}function he(t){if(S.length===1)f.set(t.pageX,t.pageY);else{const o=I(t),l=.5*(t.pageX+o.x),d=.5*(t.pageY+o.y);f.set(l,d)}}function me(t){if(S.length===1)_.set(t.pageX,t.pageY);else{const o=I(t),l=.5*(t.pageX+o.x),d=.5*(t.pageY+o.y);_.set(l,d)}}function de(t){const o=I(t),l=t.pageX-o.x,d=t.pageY-o.y,g=Math.sqrt(l*l+d*d);C.set(0,g)}function ke(t){e.enableZoom&&de(t),e.enablePan&&me(t)}function Ue(t){e.enableZoom&&de(t),e.enableRotate&&he(t)}function ue(t){if(S.length==1)p.set(t.pageX,t.pageY);else{const l=I(t),d=.5*(t.pageX+l.x),g=.5*(t.pageY+l.y);p.set(d,g)}E.subVectors(p,f).multiplyScalar(e.rotateSpeed);const o=e.domElement;H(2*Math.PI*E.x/o.clientHeight),Z(2*Math.PI*E.y/o.clientHeight),f.copy(p)}function fe(t){if(S.length===1)b.set(t.pageX,t.pageY);else{const o=I(t),l=.5*(t.pageX+o.x),d=.5*(t.pageY+o.y);b.set(l,d)}m.subVectors(b,_).multiplyScalar(e.panSpeed),L(m.x,m.y),_.copy(b)}function pe(t){const o=I(t),l=t.pageX-o.x,d=t.pageY-o.y,g=Math.sqrt(l*l+d*d);x.set(0,g),j.set(0,Math.pow(x.y/C.y,e.zoomSpeed)),W(j.y),C.copy(x);const R=(t.pageX+o.x)*.5,O=(t.pageY+o.y)*.5;V(R,O)}function Ye(t){e.enableZoom&&pe(t),e.enablePan&&fe(t)}function Fe(t){e.enableZoom&&pe(t),e.enableRotate&&ue(t)}function ge(t){e.enabled!==!1&&(S.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",Q),e.domElement.addEventListener("pointerup",N)),Ge(t),t.pointerType==="touch"?Ze(t):Ke(t))}function Q(t){e.enabled!==!1&&(t.pointerType==="touch"?Be(t):Xe(t))}function N(t){We(t),S.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",Q),e.domElement.removeEventListener("pointerup",N)),e.dispatchEvent(Me),r=s.NONE}function Ke(t){let o;switch(t.button){case 0:o=e.mouseButtons.LEFT;break;case 1:o=e.mouseButtons.MIDDLE;break;case 2:o=e.mouseButtons.RIGHT;break;default:o=-1}switch(o){case z.DOLLY:if(e.enableZoom===!1)return;Le(t),r=s.DOLLY;break;case z.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;ce(t),r=s.PAN}else{if(e.enableRotate===!1)return;le(t),r=s.ROTATE}break;case z.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;le(t),r=s.ROTATE}else{if(e.enablePan===!1)return;ce(t),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&e.dispatchEvent(ee)}function Xe(t){switch(r){case s.ROTATE:if(e.enableRotate===!1)return;Ie(t);break;case s.DOLLY:if(e.enableZoom===!1)return;ze(t);break;case s.PAN:if(e.enablePan===!1)return;ve(t);break}}function ye(t){e.enabled===!1||e.enableZoom===!1||r!==s.NONE||(t.preventDefault(),e.dispatchEvent(ee),He(t),e.dispatchEvent(Me))}function J(t){e.enabled===!1||e.enablePan===!1||Ne(t)}function Ze(t){switch(be(t),S.length){case 1:switch(e.touches.ONE){case v.ROTATE:if(e.enableRotate===!1)return;he(t),r=s.TOUCH_ROTATE;break;case v.PAN:if(e.enablePan===!1)return;me(t),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(e.touches.TWO){case v.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ke(t),r=s.TOUCH_DOLLY_PAN;break;case v.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Ue(t),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&e.dispatchEvent(ee)}function Be(t){switch(be(t),r){case s.TOUCH_ROTATE:if(e.enableRotate===!1)return;ue(t),e.update();break;case s.TOUCH_PAN:if(e.enablePan===!1)return;fe(t),e.update();break;case s.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ye(t),e.update();break;case s.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;Fe(t),e.update();break;default:r=s.NONE}}function _e(t){e.enabled!==!1&&t.preventDefault()}function Ge(t){S.push(t.pointerId)}function We(t){delete K[t.pointerId];for(let o=0;o<S.length;o++)if(S[o]==t.pointerId){S.splice(o,1);return}}function be(t){let o=K[t.pointerId];o===void 0&&(o=new M,K[t.pointerId]=o),o.set(t.pageX,t.pageY)}function I(t){const o=t.pointerId===S[0]?S[1]:S[0];return K[o]}e.domElement.addEventListener("contextmenu",_e),e.domElement.addEventListener("pointerdown",ge),e.domElement.addEventListener("pointercancel",N),e.domElement.addEventListener("wheel",ye,{passive:!1}),this.update()}}var Y=function(){var a=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(u){u.preventDefault(),e(++a%n.children.length)},!1);function i(u){return n.appendChild(u.dom),u}function e(u){for(var f=0;f<n.children.length;f++)n.children[f].style.display=f===u?"block":"none";a=u}var s=(performance||Date).now(),r=s,c=0,h=i(new Y.Panel("FPS","#0ff","#002")),y=i(new Y.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var T=i(new Y.Panel("MB","#f08","#201"));return e(0),{REVISION:16,dom:n,addPanel:i,showPanel:e,begin:function(){s=(performance||Date).now()},end:function(){c++;var u=(performance||Date).now();if(y.update(u-s,200),u>=r+1e3&&(h.update(c*1e3/(u-r),100),r=u,c=0,T)){var f=performance.memory;T.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){s=this.end()},domElement:n,setMode:e}};Y.Panel=function(a,n,i){var e=1/0,s=0,r=Math.round,c=r(window.devicePixelRatio||1),h=80*c,y=48*c,T=3*c,u=2*c,f=3*c,p=15*c,E=74*c,_=30*c,b=document.createElement("canvas");b.width=h,b.height=y,b.style.cssText="width:80px;height:48px";var m=b.getContext("2d");return m.font="bold "+9*c+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=i,m.fillRect(0,0,h,y),m.fillStyle=n,m.fillText(a,T,u),m.fillRect(f,p,E,_),m.fillStyle=i,m.globalAlpha=.9,m.fillRect(f,p,E,_),{dom:b,update:function(C,x){e=Math.min(e,C),s=Math.max(s,C),m.fillStyle=i,m.globalAlpha=1,m.fillRect(0,0,h,p),m.fillStyle=n,m.fillText(r(C)+" "+a+" ("+r(e)+"-"+r(s)+")",T,u),m.drawImage(b,f+c,p,E-c,_,f,p,E-c,_),m.fillRect(f+E-c,p,c,_),m.fillStyle=i,m.globalAlpha=.9,m.fillRect(f+E-c,p,c,r((1-C/x)*_))}}};const ct=Y,ne=1024,ie=1024*ne,Ae=1024*ie;function xe(a){let n,i,e;return a<1?(n=a*1e3,i="μs",e=0):a<1e3?(n=a,i="ms",e=2):(n=a/1e3,i="s",e=2),"".concat(n.toFixed(e)).concat(i)}function nt(a){let n,i,e;return a<ne?(n=a,i=" bytes",e=0):a<ie?(n=a/ne,i="kB",e=2):a<Ae?(n=a/ie,i="MB",e=2):(n=a/Ae,i="GB",e=2),"".concat(n.toFixed(e)).concat(i)}const it="▶",st="⬇",te={css:{position:"fixed",zIndex:1e4,color:"#ccc",background:"#000",fontFamily:"Helvetica,Arial,sans-serif",padding:"8px",fontSize:"12px",lineSpacing:6},headerCSS:{fontSize:"16px",cursor:"pointer"},itemCSS:{paddingLeft:"8px"}},Re=a=>"".concat(a.name,": ").concat(a.count),De={count:Re,averageTime:a=>"".concat(a.name,": ").concat(xe(a.getAverageTime())),totalTime:a=>"".concat(a.name,": ").concat(xe(a.time)),fps:a=>"".concat(a.name,": ").concat(Math.round(a.getHz()),"fps"),memory:a=>"".concat(a.name,": ").concat(nt(a.count))};class ht{constructor(n,i){this.stats=void 0,this.title=void 0,this.collapsed=!1,this._framesPerUpdate=void 0,this._formatters=De,this._css=void 0,this._headerCSS=void 0,this._itemCSS=void 0,this._container=document.body,this._innerContainer=null,this._statsContainer=null,this._header=null,this._resetOnUpdate={},this._counter=0,this._items={},this._added=!1,this.stats=n,this.title=i==null?void 0:i.title,this._framesPerUpdate=Math.round(Math.max((i==null?void 0:i.framesPerUpdate)||1,1)),this._initializeFormatters(i),this._initializeUpdateConfigs(i),this._css=Object.assign({},te.css,i==null?void 0:i.css),this._headerCSS=Object.assign({},te.headerCSS,this._css.header),this._itemCSS=Object.assign({},te.itemCSS,this._css.item),delete this._css.header,delete this._css.item,this._createDOM(i==null?void 0:i.container),this._createDOMStats()}setStats(n){this.stats=n,this._createDOMStats(),this._setHeaderContent(),this.update()}update(){const n=this.stats&&this.stats.stats;!n||Object.keys(n).length===0||this._counter++%this._framesPerUpdate===0&&this._update()}remove(){this._innerContainer&&this._container.removeChild(this._innerContainer)}setCollapsed(n){this.collapsed=n,this._statsContainer&&(this._statsContainer.style.display=this.collapsed?"none":"block"),this._setHeaderContent()}_update(){this.stats.forEach(n=>{this._createDOMItem(n.name),this._items[n.name].innerHTML=this._getLines(n).join("<BR>"),this._resetOnUpdate[n.name]&&n.reset()})}_initializeFormatters(n){if(n!=null&&n.formatters)for(const i in n.formatters){let e=n.formatters[i];typeof e=="string"&&(e=De[e]),e&&(this._formatters[i]=e)}}_initializeUpdateConfigs(n){if(n!=null&&n.resetOnUpdate)for(const i in n.resetOnUpdate)this._resetOnUpdate[i]=n.resetOnUpdate[i]||!1}_createDOM(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.body;if(!(typeof document>"u"||!document)){this._container=n,this._innerContainer=document.createElement("div");for(const i in this._css)this._innerContainer.style[i]=this._css[i];this._container.appendChild(this._innerContainer),this._createDOMHeader(),this._statsContainer=document.createElement("div"),this._statsContainer.style.display="block",this._innerContainer.appendChild(this._statsContainer)}}_createDOMHeader(){if(!this._header){var n;this._header=document.createElement("div");for(const i in this._headerCSS)this._header.style[i]=this._headerCSS[i];this._header.onclick=this._toggleCollapsed.bind(this),(n=this._innerContainer)===null||n===void 0||n.appendChild(this._header)}this._setHeaderContent()}_setHeaderContent(){if(this._header){const n=this.collapsed?it:st,i=this.title||this.stats&&this.stats.id||"Stats";this._header.innerText="".concat(n," ").concat(i)}}_toggleCollapsed(){this.setCollapsed(!this.collapsed)}_createDOMStats(){this.stats instanceof et&&this.stats.forEach(n=>{this._createDOMItem(n.name)})}_createDOMItem(n){if(this._statsContainer&&!this._items[n]){this._items[n]=document.createElement("div");for(const i in this._itemCSS)this._items[n].style[i]=this._itemCSS[i];this._statsContainer.appendChild(this._items[n])}}_getLines(n){const i=this._formatters[n.name]||this._formatters[n.type||""]||Re;return n?i(n).split(`
`):[]}}export{lt as O,ct as S,ht as a};
