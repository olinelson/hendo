import{S as y,i as k,s as w,c as S,e as x,a as P,b as B,d as u,f as C,g as j,u as K,h as R,j as W,t as H,k as N,l as f,m as h,n as _,r as l,o as c,p}from"./vendor.3134bd84.js";import{$ as A,N as d}from"./Nav.2cf1fbec.js";import{$ as E,H as m}from"./Hero.025c71bd.js";/* empty css                                          *//* empty css                                           */function M(o){let a,s;const n=o[1].default,e=S(n,o,o[0],null);return{c(){a=x("div"),e&&e.c(),this.h()},l(t){a=P(t,"DIV",{class:!0});var r=B(a);e&&e.l(r),r.forEach(u),this.h()},h(){C(a,"class","mx-auto w-full max-w-5xl px-6 pt-20 bg-white dark:bg-black")},m(t,r){j(t,a,r),e&&e.m(a,null),s=!0},p(t,[r]){e&&e.p&&(!s||r&1)&&K(e,n,t,t[0],s?W(n,t[0],r,null):R(t[0]),null)},i(t){s||(H(e,t),s=!0)},o(t){N(e,t),s=!1},d(t){t&&u(a),e&&e.d(t)}}}function z(o,a,s){let{$$slots:n={},$$scope:e}=a;return o.$$set=t=>{"$$scope"in t&&s(0,e=t.$$scope)},[e,n]}class g extends y{constructor(a){super();k(this,a,z,M,w,{})}}var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g});const O=f(import.meta.url,{modules:[],hydratedComponents:[],hoisted:[]}),Y=h(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/astro/"),$=_(async(o,a,s)=>{o.createAstro(Y,a,s);const e=new Date().getFullYear();return l`<footer class=" h-56 flex justify-center items-center text-gray-700 text-sm dark:bg-black dark:text-white">© Nick Henderson ${e}</footer>
`});var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",$$metadata:O,default:$});const i=f(import.meta.url,{modules:[{module:A,specifier:"../components/Nav.svelte",assert:{}},{module:F,specifier:"../components/Container.svelte",assert:{}},{module:E,specifier:"../components/Hero.svelte",assert:{}},{module:D,specifier:"../components/Footer.astro",assert:{}}],hydratedComponents:[d,m],hoisted:[]}),I=h(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/astro/"),L=_(async(o,a,s)=>{const n=o.createAstro(I,a,s),{heroImageSrc:e,isTransparent:t,currentPath:r,useContainer:b}=n.props,v=[{props:{"data-astro-id":"PK5WTTRB"},children:"body{grid-template-rows:auto 1fr auto;min-height:calc(100vh - env(safe-area-inset-bottom));}#mainBody.astro-PK5WTTRB{overflow-x:auto;}"}];for(const T of v)o.styles.add(T);return l`<body class="bg-white dark:bg-black h-full grid">
  <div class="astro-PK5WTTRB">
    ${e&&l`${c(o,"Hero",m,{"client:load":!0,src:e,"client:component-path":i.getPath(m),"client:component-export":i.getExport(m),class:"astro-PK5WTTRB"})}`}
    ${c(o,"Nav",d,{isTransparent:t,"client:load":!0,currentPath:r,"client:component-path":i.getPath(d),"client:component-export":i.getExport(d),class:"astro-PK5WTTRB"})}
    ${p(o,s.hero)}
  </div>

  ${b?l`${c(o,"Container",g,{id:"mainBody",class:"astro-PK5WTTRB"},{default:()=>l`${p(o,s.default)}`})}`:l`<div id="mainBody" class="pt-10 bg-white dark:bg-black text-black dark:text-white astro-PK5WTTRB">
    ${p(o,s.default)}
  </div>`}



${c(o,"Footer",$,{class:"astro-PK5WTTRB"})}
</body>`});var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",$$metadata:i,default:L});export{U as $,L as a};
