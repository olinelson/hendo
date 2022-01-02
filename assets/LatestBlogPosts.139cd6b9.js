import{S as W,i as I,s as H,O as q,g as k,L as se,k as S,K as re,t as A,d as u,c as G,e as _,a as b,b as v,f as p,u as J,h as K,j as R,J as ne,A as m,l as E,m as C,n as Y,r as w,V as g,W as F,q as M,v as Z,x as T,y as L,R as Q,B as O,o as D,p as ae,F as le,G as ie,H as ce,I as de}from"./vendor.3134bd84.js";import{$ as ue,a as P}from"./Layout.41dc780f.js";/* empty css                                           */import"./Nav.ba5746d4.js";/* empty css                                          */import"./Hero.025c71bd.js";/* empty css                                           */function me(a){let e,o;const r=a[4].default,n=G(r,a,a[3],null);return{c(){e=_("div"),n&&n.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var t=v(e);n&&n.l(t),t.forEach(u),this.h()},h(){p(e,"class",a[1])},m(s,t){k(s,e,t),n&&n.m(e,null),o=!0},p(s,t){n&&n.p&&(!o||t&8)&&J(n,r,s,s[3],o?R(r,s[3],t,null):K(s[3]),null)},i(s){o||(A(n,s),o=!0)},o(s){S(n,s),o=!1},d(s){s&&u(e),n&&n.d(s)}}}function fe(a){let e,o,r;const n=a[4].default,s=G(n,a,a[3],null);return{c(){e=_("a"),o=_("div"),s&&s.c(),this.h()},l(t){e=b(t,"A",{href:!0});var i=v(e);o=b(i,"DIV",{id:!0,class:!0});var l=v(o);s&&s.l(l),l.forEach(u),i.forEach(u),this.h()},h(){p(o,"id","container"),p(o,"class",""+(ne(`${a[1]} cursor-pointer`)+" svelte-3tgkrm")),p(e,"href",a[0])},m(t,i){k(t,e,i),m(e,o),s&&s.m(o,null),r=!0},p(t,i){s&&s.p&&(!r||i&8)&&J(s,n,t,t[3],r?R(n,t[3],i,null):K(t[3]),null),(!r||i&1)&&p(e,"href",t[0])},i(t){r||(A(s,t),r=!0)},o(t){S(s,t),r=!1},d(t){t&&u(e),s&&s.d(t)}}}function pe(a){let e,o,r,n;const s=[fe,me],t=[];function i(l,c){return l[0]?0:1}return e=i(a),o=t[e]=s[e](a),{c(){o.c(),r=q()},l(l){o.l(l),r=q()},m(l,c){t[e].m(l,c),k(l,r,c),n=!0},p(l,[c]){let d=e;e=i(l),e===d?t[e].p(l,c):(se(),S(t[d],1,1,()=>{t[d]=null}),re(),o=t[e],o?o.p(l,c):(o=t[e]=s[e](l),o.c()),A(o,1),o.m(r.parentNode,r))},i(l){n||(A(o),n=!0)},o(l){S(o),n=!1},d(l){t[e].d(l),l&&u(r)}}}function he(a,e,o){let{$$slots:r={},$$scope:n}=e,{href:s}=e,{fullWidth:t=!1}=e;const i=`overflow-hidden shadow-lg ${t?"w-full":"w-80"}
  `.replace(`
`," ");return a.$$set=l=>{"href"in l&&o(0,s=l.href),"fullWidth"in l&&o(2,t=l.fullWidth),"$$scope"in l&&o(3,n=l.$$scope)},[s,i,t,n,r]}class _e extends W{constructor(e){super();I(this,e,he,pe,H,{href:0,fullWidth:2})}}const be=E(import.meta.url,{modules:[],hydratedComponents:[],hoisted:[]}),ve=C(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/"),U=Y(async(a,e,o)=>{const r=a.createAstro(ve,e,o),{title:n,description:s,permalink:t}=r.props;return w`
<link rel="stylesheet"${g(r.resolve("../styles/global.css"),"href")}>

<!-- Global Metadata -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<link rel="icon" type="image/x-icon" href="/favicon.ico">


<!-- Primary Meta Tags -->
<title>${n}</title>
<meta name="title"${g(n,"content")}>
<meta name="description"${g(s,"content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${g(t,"content")}>
<meta property="og:title"${g(n,"content")}>
<meta property="og:description"${g(s,"content")}>
<meta property="og:image" content="https://astro.build/assets/nick_profile.png?v=1">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${g(t,"content")}>
<meta property="twitter:title"${g(n,"content")}>
<meta property="twitter:description"${g(s,"content")}>
<meta property="twitter:image" content="https://astro.build/assets/nick_profile.png?v=1">
`});var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",$$metadata:be,default:U});function ye(a){let e,o,r,n,s,t,i=F(a[1]).format("Do MMM YYYY")+"",l;return{c(){e=_("div"),o=_("div"),r=_("h1"),n=M(a[0]),s=Z(),t=_("p"),l=M(i),this.h()},l(c){e=b(c,"DIV",{class:!0});var d=v(e);o=b(d,"DIV",{});var h=v(o);r=b(h,"H1",{class:!0});var f=v(r);n=T(f,a[0]),f.forEach(u),h.forEach(u),s=L(d),t=b(d,"P",{class:!0});var y=v(t);l=T(y,i),y.forEach(u),d.forEach(u),this.h()},h(){p(r,"class","font-bold text-4xl"),p(t,"class","font-light"),p(e,"class","flex justify-between items-end")},m(c,d){k(c,e,d),m(e,o),m(o,r),m(r,n),m(e,s),m(e,t),m(t,l)},p(c,[d]){d&1&&Q(n,c[0]),d&2&&i!==(i=F(c[1]).format("Do MMM YYYY")+"")&&Q(l,i)},i:O,o:O,d(c){c&&u(e)}}}function we(a,e,o){let{title:r=""}=e,{description:n=""}=e,{published:s=""}=e;return a.$$set=t=>{"title"in t&&o(0,r=t.title),"description"in t&&o(2,n=t.description),"published"in t&&o(1,s=t.published)},[r,s,n]}class ee extends W{constructor(e){super();I(this,e,we,ye,H,{title:0,description:2,published:1})}}var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee});const x=E(import.meta.url,{modules:[{module:ge,specifier:"../components/BaseHead.astro",assert:{}},{module:$e,specifier:"../components/BlogPostHeader.svelte",assert:{}},{module:ue,specifier:"../components/Layout.astro",assert:{}}],hydratedComponents:[P],hoisted:[]}),ke=C(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/"),te=Y(async(a,e,o)=>{const r=a.createAstro(ke,e,o),{content:n}=r.props,{title:s,description:t,published:i,author:l,cover:c,coverDescription:d}=n,h=[{props:{global:!0},children:`#blog-content img {
  margin: 2rem auto;
}`}];for(const f of h)a.styles.add(f);return w`<html${g(n.lang||"en","lang")}>
  <head>
    ${D(a,"BaseHead",U,{title:s,description:t,permalink:"some-permalink"})}
  </head>

  <body>
  ${D(a,"Layout",P,{heroImageSrc:c,"client:load":!0,"client:component-path":x.getPath(P),"client:component-export":x.getExport(P)},{default:()=>w`<div class="mt-12 container mx-auto px-4">
      ${D(a,"BlogPostHeader",ee,{title:s,description:t,published:i})}
        <div id="blog-content" class="mt-8">
        ${ae(a,o.default)}
        </div>
      </div>`})}
  

</body></html>`});var Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",$$metadata:x,default:te});const Ae={headers:[],source:`
This website is currently under construction... come back later for more awesomeness!
`,html:"<p>This website is currently under construction\u2026 come back later for more awesomeness!</p>"},Me={cover:"https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",title:"Website under construction",description:"Coming soon",published:"2021-10-03T00:00:00.000Z",author:"Nic Henderson",coverDescription:"A crane building things",astro:{headers:[],source:`
This website is currently under construction... come back later for more awesomeness!
`,html:"<p>This website is currently under construction\u2026 come back later for more awesomeness!</p>"}},Te=E(import.meta.url,{modules:[{module:Se,specifier:"../../layouts/BlogPost.astro",assert:{}}],hydratedComponents:[],hoisted:[]}),De=C(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/"),Ve=Y(async(a,e,o)=>(a.createAstro(De,e,o),w`${D(a,"Layout",te,{content:{cover:"https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",title:"Website under construction",description:"Coming soon",published:"2021-10-03T00:00:00.000Z",author:"Nic Henderson",coverDescription:"A crane building things",astro:{headers:[],source:`
This website is currently under construction... come back later for more awesomeness!
`,html:"<p>This website is currently under construction\u2026 come back later for more awesomeness!</p>"}}},{default:()=>w`<p>This website is currently under construction… come back later for more awesomeness!</p>`})}`));var je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",metadata:Ae,frontmatter:Me,$$metadata:Te,default:Ve});function Be(a){let e,o,r,n=F(a[4]).format("Do MMM YYYY")+"",s,t,i,l,c,d,h,f=a[6](a[2],150)+"",y;return{c(){e=_("div"),o=_("div"),r=_("div"),s=M(n),t=Z(),i=_("div"),l=_("div"),c=M(a[1]),d=Z(),h=_("div"),y=M(f),this.h()},l($){e=b($,"DIV",{class:!0,style:!0});var V=v(e);o=b(V,"DIV",{class:!0});var j=v(o);r=b(j,"DIV",{class:!0});var X=v(r);s=T(X,n),X.forEach(u),t=L(j),i=b(j,"DIV",{class:!0});var B=v(i);l=b(B,"DIV",{class:!0});var z=v(l);c=T(z,a[1]),z.forEach(u),d=L(B),h=b(B,"DIV",{class:!0});var N=v(h);y=T(N,f),N.forEach(u),B.forEach(u),j.forEach(u),V.forEach(u),this.h()},h(){p(r,"class","text-sm justify-end flex text-gray-200 flex-1"),p(l,"class","text-4xl font-semibold "),p(h,"class","text-sm my-2 text-gray-200 leading-loose"),p(i,"class","p-2 flex-1"),p(o,"class","w-full h-full bg-cover bg-center bg-black bg-opacity-40 p-2 flex flex-col justify-between"),p(e,"class","h-96 bg-cover bg-center text-white"),p(e,"style",`background-image: url('${a[3]}');`)},m($,V){k($,e,V),m(e,o),m(o,r),m(r,s),m(o,t),m(o,i),m(i,l),m(l,c),m(i,d),m(i,h),m(h,y)},p:O,d($){$&&u(e)}}}function Ee(a){let e,o;return e=new _e({props:{fullWidth:a[0],href:a[5],$$slots:{default:[Be]},$$scope:{ctx:a}}}),{c(){le(e.$$.fragment)},l(r){ie(e.$$.fragment,r)},m(r,n){ce(e,r,n),o=!0},p(r,[n]){const s={};n&1&&(s.fullWidth=r[0]),n&512&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(r){o||(A(e.$$.fragment,r),o=!0)},o(r){S(e.$$.fragment,r),o=!1},d(r){de(e,r)}}}function Ce(a,e,o){let{fullWidth:r=!1}=e,{post:n}=e;const{title:s,description:t,cover:i,coverDescription:l,published:c,url:d}=n,h=(f,y)=>f.length>y?f.substring(0,y)+"...":f;return a.$$set=f=>{"fullWidth"in f&&o(0,r=f.fullWidth),"post"in f&&o(7,n=f.post)},[r,s,t,i,c,d,h,n]}class oe extends W{constructor(e){super();I(this,e,Ce,Ee,H,{fullWidth:0,post:7})}}var Ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});E(import.meta.url,{modules:[{module:Ye,specifier:"../components/BlogPostPreview.svelte",assert:{}}],hydratedComponents:[],hoisted:[]});const Pe=C(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/");Y(async(a,e,o)=>{let n=a.createAstro(Pe,e,o).fetchContent({"../pages/posts/01_coming_soon.md":je});n=n.sort((t,i)=>new Date(i.published).valueOf()-new Date(t.published).valueOf());const s=[{props:{"data-astro-id":"VFAXMZSB"},children:"section.astro-VFAXMZSB{-webkit-overflow-scrolling:touch;}section.astro-VFAXMZSB div.astro-VFAXMZSB{flex:0 0 auto;}"}];for(const t of s)a.styles.add(t);return w`  <h1 class="text-4xl font-bold ml-8 mt-8 astro-VFAXMZSB">latest</h1>
<section class=" flex flex-nowrap overflow-x-auto px-8 py-2 pb-8 astro-VFAXMZSB">
      ${n.map(t=>w`<div class="pr-8 astro-VFAXMZSB">
          ${D(a,"BlogPostPreview",oe,{post:t,class:"astro-VFAXMZSB"})}
        </div>`)}
</section>

`});
