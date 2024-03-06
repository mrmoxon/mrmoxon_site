import{s as B,e as U,o as q,f as A,t as j}from"../chunks/scheduler.Cs0xm5t1.js";import{S as z,i as M,s as W,y as h,f as F,g as v,v as g,z as P,u as E,d as w,e as G,c as H,a as J,k as D,A as d,t as K,b as Q,j as X,B as L,C as b,o as k,p as I,r as y,w as R}from"../chunks/index.DVZDcXYT.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},m=function(e,i,n){let s=Promise.resolve();if(i&&i.length>0){const f=document.getElementsByTagName("link");s=Promise.all(i.map(t=>{if(t=Z(t,n),t in O)return;O[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!n)for(let u=f.length-1;u>=0;u--){const p=f[u];if(p.href===t&&(!r||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((u,p)=>{o.addEventListener("load",u),o.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(a){let e,i,n;var s=a[1][0];function f(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=b(s,f(a)),a[12](e)),{c(){e&&k(e.$$.fragment),i=h()},l(t){e&&I(e.$$.fragment,t),i=h()},m(t,r){e&&y(e,t,r),v(t,i,r),n=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=b(s,f(t)),t[12](e),k(e.$$.fragment),E(e.$$.fragment,1),y(e,i.parentNode,i)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){n||(e&&E(e.$$.fragment,t),n=!0)},o(t){e&&g(e.$$.fragment,t),n=!1},d(t){t&&w(i),a[12](null),e&&R(e,t)}}}function x(a){let e,i,n;var s=a[1][0];function f(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=b(s,f(a)),a[11](e)),{c(){e&&k(e.$$.fragment),i=h()},l(t){e&&I(e.$$.fragment,t),i=h()},m(t,r){e&&y(e,t,r),v(t,i,r),n=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=b(s,f(t)),t[11](e),k(e.$$.fragment),E(e.$$.fragment,1),y(e,i.parentNode,i)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){n||(e&&E(e.$$.fragment,t),n=!0)},o(t){e&&g(e.$$.fragment,t),n=!1},d(t){t&&w(i),a[11](null),e&&R(e,t)}}}function ee(a){let e,i,n;var s=a[1][1];function f(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=b(s,f(a)),a[10](e)),{c(){e&&k(e.$$.fragment),i=h()},l(t){e&&I(e.$$.fragment,t),i=h()},m(t,r){e&&y(e,t,r),v(t,i,r),n=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=b(s,f(t)),t[10](e),k(e.$$.fragment),E(e.$$.fragment,1),y(e,i.parentNode,i)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){n||(e&&E(e.$$.fragment,t),n=!0)},o(t){e&&g(e.$$.fragment,t),n=!1},d(t){t&&w(i),a[10](null),e&&R(e,t)}}}function T(a){let e,i=a[6]&&V(a);return{c(){e=G("div"),i&&i.c(),this.h()},l(n){e=H(n,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);i&&i.l(s),s.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(n,s){v(n,e,s),i&&i.m(e,null)},p(n,s){n[6]?i?i.p(n,s):(i=V(n),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(n){n&&w(e),i&&i.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(i){e=Q(i,a[7])},m(i,n){v(i,e,n)},p(i,n){n&128&&X(e,i[7])},d(i){i&&w(e)}}}function te(a){let e,i,n,s,f;const t=[x,$],r=[];function l(o,u){return o[1][1]?0:1}e=l(a),i=r[e]=t[e](a);let c=a[5]&&T(a);return{c(){i.c(),n=W(),c&&c.c(),s=h()},l(o){i.l(o),n=F(o),c&&c.l(o),s=h()},m(o,u){r[e].m(o,u),v(o,n,u),c&&c.m(o,u),v(o,s,u),f=!0},p(o,[u]){let p=e;e=l(o),e===p?r[e].p(o,u):(L(),g(r[p],1,1,()=>{r[p]=null}),P(),i=r[e],i?i.p(o,u):(i=r[e]=t[e](o),i.c()),E(i,1),i.m(n.parentNode,n)),o[5]?c?c.p(o,u):(c=T(o),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(o){f||(E(i),f=!0)},o(o){g(i),f=!1},d(o){o&&(w(n),w(s)),r[e].d(o),c&&c.d(o)}}}function ie(a,e,i){let{stores:n}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:c=null}=e;U(n.page.notify);let o=!1,u=!1,p=null;q(()=>{const _=n.page.subscribe(()=>{o&&(i(6,u=!0),j().then(()=>{i(7,p=document.title||"untitled page")}))});return i(5,o=!0),_});function N(_){A[_?"unshift":"push"](()=>{t[1]=_,i(0,t)})}function S(_){A[_?"unshift":"push"](()=>{t[0]=_,i(0,t)})}function C(_){A[_?"unshift":"push"](()=>{t[0]=_,i(0,t)})}return a.$$set=_=>{"stores"in _&&i(8,n=_.stores),"page"in _&&i(9,s=_.page),"constructors"in _&&i(1,f=_.constructors),"components"in _&&i(0,t=_.components),"form"in _&&i(2,r=_.form),"data_0"in _&&i(3,l=_.data_0),"data_1"in _&&i(4,c=_.data_1)},a.$$.update=()=>{a.$$.dirty&768&&n.page.set(s)},[t,f,r,l,c,o,u,p,n,s,N,S,C]}class oe extends z{constructor(e){super(),M(this,e,ie,te,B,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>m(()=>import("../nodes/0.BmZOf6rJ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),()=>m(()=>import("../nodes/1.C_1DICKl.js"),__vite__mapDeps([4,1,2,5]),import.meta.url),()=>m(()=>import("../nodes/2.BS827G5R.js"),__vite__mapDeps([6,1,2,7]),import.meta.url),()=>m(()=>import("../nodes/3.vsljhrPt.js"),__vite__mapDeps([8,1,2,9]),import.meta.url),()=>m(()=>import("../nodes/4.D_AGIB3d.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>m(()=>import("../nodes/5.CKNDPfqU.js"),__vite__mapDeps([12,1,2,13]),import.meta.url),()=>m(()=>import("../nodes/6.Dnrihc6X.js"),__vite__mapDeps([14,1,2,15,16,17]),import.meta.url),()=>m(()=>import("../nodes/7.BV3KVyuf.js"),__vite__mapDeps([18,1,2,15,16,17]),import.meta.url),()=>m(()=>import("../nodes/8.DTdk7OC0.js"),__vite__mapDeps([19,1,2,15,16,17]),import.meta.url),()=>m(()=>import("../nodes/9.B9M3e_xo.js"),__vite__mapDeps([20,1,2,15,16,17]),import.meta.url),()=>m(()=>import("../nodes/10.CdRUX59V.js"),__vite__mapDeps([21,1,2,15,16,17]),import.meta.url),()=>m(()=>import("../nodes/11.UPcpNfb-.js"),__vite__mapDeps([22,1,2,15,16,17]),import.meta.url),()=>m(()=>import("../nodes/12.D2LCGKRA.js"),__vite__mapDeps([23,1,2,15,16,17]),import.meta.url),()=>m(()=>import("../nodes/13.DyOpbhg4.js"),__vite__mapDeps([24,1,2,15,16,17]),import.meta.url)],le=[],_e={"/":[2],"/about":[3],"/contact":[4],"/essays":[5],"/essays/agent-swarms":[6],"/essays/dont-die":[7],"/essays/freemium":[8],"/essays/holy-grail":[9],"/essays/myths-memes-uncertainty":[10],"/essays/pervasive-intelligence":[11],"/essays/template":[12],"/essays/three-stages-of-agi":[13]},fe={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{_e as dictionary,fe as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.BmZOf6rJ.js","../chunks/scheduler.Cs0xm5t1.js","../chunks/index.DVZDcXYT.js","../assets/0.DI_huASN.css","../nodes/1.C_1DICKl.js","../chunks/entry.BGgu8u3z.js","../nodes/2.BS827G5R.js","../assets/2.ueZnYA6j.css","../nodes/3.vsljhrPt.js","../assets/3.MWr94Tpj.css","../nodes/4.D_AGIB3d.js","../assets/4.BVPhWkby.css","../nodes/5.CKNDPfqU.js","../assets/5.CU5-OLzc.css","../nodes/6.Dnrihc6X.js","../chunks/ShareButton.svelte_svelte_type_style_lang.nPKnTWTD.js","../assets/ShareButton.DUFe1Fsj.css","../assets/6.CtwPzXKe.css","../nodes/7.BV3KVyuf.js","../nodes/8.DTdk7OC0.js","../nodes/9.B9M3e_xo.js","../nodes/10.CdRUX59V.js","../nodes/11.UPcpNfb-.js","../nodes/12.D2LCGKRA.js","../nodes/13.DyOpbhg4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
