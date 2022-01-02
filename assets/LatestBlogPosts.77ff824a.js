import{S as Y,i as H,s as N,O as q,g as k,L as se,k as A,K as re,t as S,d,c as G,e as _,a as b,b as g,f as p,u as J,h as K,j as R,J as ne,A as m,l as j,m as B,n as E,r as w,V as v,W,q as D,v as F,x as M,y as Z,R as Q,B as L,o as P,p as ae,F as le,G as ie,H as ce,I as ue}from"./vendor.3134bd84.js";import{$ as de,a as I}from"./Layout.4ee04532.js";/* empty css                                           */import"./Nav.2cf1fbec.js";/* empty css                                          */import"./Hero.025c71bd.js";/* empty css                                           */function me(a){let e,o;const r=a[4].default,n=G(r,a,a[3],null);return{c(){e=_("div"),n&&n.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var t=g(e);n&&n.l(t),t.forEach(d),this.h()},h(){p(e,"class",a[1])},m(s,t){k(s,e,t),n&&n.m(e,null),o=!0},p(s,t){n&&n.p&&(!o||t&8)&&J(n,r,s,s[3],o?R(r,s[3],t,null):K(s[3]),null)},i(s){o||(S(n,s),o=!0)},o(s){A(n,s),o=!1},d(s){s&&d(e),n&&n.d(s)}}}function fe(a){let e,o,r;const n=a[4].default,s=G(n,a,a[3],null);return{c(){e=_("a"),o=_("div"),s&&s.c(),this.h()},l(t){e=b(t,"A",{href:!0});var i=g(e);o=b(i,"DIV",{id:!0,class:!0});var l=g(o);s&&s.l(l),l.forEach(d),i.forEach(d),this.h()},h(){p(o,"id","container"),p(o,"class",""+(ne(`${a[1]} cursor-pointer`)+" svelte-3tgkrm")),p(e,"href",a[0])},m(t,i){k(t,e,i),m(e,o),s&&s.m(o,null),r=!0},p(t,i){s&&s.p&&(!r||i&8)&&J(s,n,t,t[3],r?R(n,t[3],i,null):K(t[3]),null),(!r||i&1)&&p(e,"href",t[0])},i(t){r||(S(s,t),r=!0)},o(t){A(s,t),r=!1},d(t){t&&d(e),s&&s.d(t)}}}function pe(a){let e,o,r,n;const s=[fe,me],t=[];function i(l,c){return l[0]?0:1}return e=i(a),o=t[e]=s[e](a),{c(){o.c(),r=q()},l(l){o.l(l),r=q()},m(l,c){t[e].m(l,c),k(l,r,c),n=!0},p(l,[c]){let u=e;e=i(l),e===u?t[e].p(l,c):(se(),A(t[u],1,1,()=>{t[u]=null}),re(),o=t[e],o?o.p(l,c):(o=t[e]=s[e](l),o.c()),S(o,1),o.m(r.parentNode,r))},i(l){n||(S(o),n=!0)},o(l){A(o),n=!1},d(l){t[e].d(l),l&&d(r)}}}function he(a,e,o){let{$$slots:r={},$$scope:n}=e,{href:s}=e,{fullWidth:t=!1}=e;const i=`overflow-hidden shadow-lg ${t?"w-full":"w-80"}
  `.replace(`
`," ");return a.$$set=l=>{"href"in l&&o(0,s=l.href),"fullWidth"in l&&o(2,t=l.fullWidth),"$$scope"in l&&o(3,n=l.$$scope)},[s,i,t,n,r]}class _e extends Y{constructor(e){super();H(this,e,he,pe,N,{href:0,fullWidth:2})}}const be=j(import.meta.url,{modules:[],hydratedComponents:[],hoisted:[]}),ge=B(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/"),U=E(async(a,e,o)=>{const r=a.createAstro(ge,e,o),{title:n,description:s,permalink:t}=r.props;return w`
<link rel="stylesheet"${v(r.resolve("../styles/global.css"),"href")}>

<!-- Global Metadata -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<link rel="icon" type="image/x-icon" href="/favicon.ico">


<!-- Primary Meta Tags -->
<title>${n}</title>
<meta name="title"${v(n,"content")}>
<meta name="description"${v(s,"content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${v(t,"content")}>
<meta property="og:title"${v(n,"content")}>
<meta property="og:description"${v(s,"content")}>
<meta property="og:image" content="https://astro.build/assets/nick_profile.png?v=1">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${v(t,"content")}>
<meta property="twitter:title"${v(n,"content")}>
<meta property="twitter:description"${v(s,"content")}>
<meta property="twitter:image" content="https://astro.build/assets/nick_profile.png?v=1">
`});var ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",$$metadata:be,default:U});function ye(a){let e,o,r,n,s,t,i=W(a[1]).format("Do MMM YYYY")+"",l;return{c(){e=_("div"),o=_("div"),r=_("h1"),n=D(a[0]),s=F(),t=_("p"),l=D(i),this.h()},l(c){e=b(c,"DIV",{class:!0});var u=g(e);o=b(u,"DIV",{});var h=g(o);r=b(h,"H1",{class:!0});var f=g(r);n=M(f,a[0]),f.forEach(d),h.forEach(d),s=Z(u),t=b(u,"P",{class:!0});var y=g(t);l=M(y,i),y.forEach(d),u.forEach(d),this.h()},h(){p(r,"class","font-bold text-4xl"),p(t,"class","font-light"),p(e,"class","flex justify-between items-end")},m(c,u){k(c,e,u),m(e,o),m(o,r),m(r,n),m(e,s),m(e,t),m(t,l)},p(c,[u]){u&1&&Q(n,c[0]),u&2&&i!==(i=W(c[1]).format("Do MMM YYYY")+"")&&Q(l,i)},i:L,o:L,d(c){c&&d(e)}}}function we(a,e,o){let{Name:r=""}=e,{Description:n=""}=e,{Published:s=""}=e;return a.$$set=t=>{"Name"in t&&o(0,r=t.Name),"Description"in t&&o(2,n=t.Description),"Published"in t&&o(1,s=t.Published)},[r,s,n]}class ee extends Y{constructor(e){super();H(this,e,we,ye,N,{Name:0,Description:2,Published:1})}}var $e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee});const O=j(import.meta.url,{modules:[{module:ve,specifier:"../components/BaseHead.astro",assert:{}},{module:$e,specifier:"../components/BlogPostHeader.svelte",assert:{}},{module:de,specifier:"../components/Layout.astro",assert:{}}],hydratedComponents:[I],hoisted:[]}),ke=B(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/"),te=E(async(a,e,o)=>{const r=a.createAstro(ke,e,o),{content:n}=r.props,{Name:s,Description:t,Published:i,Author:l,Cover:c,HeroImageDescription:u}=n,h=[{props:{global:!0},children:`#blog-content img {
  margin: 2rem auto;
}`}];for(const f of h)a.styles.add(f);return w`<html${v(n.lang||"en","lang")}>
  <head>
    ${P(a,"BaseHead",U,{title:s,description:t,permalink:"some-permalink"})}
  </head>

  <body>
  ${P(a,"Layout",I,{heroImageSrc:c,"client:load":!0,"client:component-path":O.getPath(I),"client:component-export":O.getExport(I)},{default:()=>w`<div class="mt-12 container mx-auto px-2">
      ${P(a,"BlogPostHeader",ee,{Name:s,Description:t,Published:i})}
        <div id="blog-content" class="mt-8">
        ${ae(a,o.default)}
        </div>
      </div>`})}
  

</body></html>`});var Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",$$metadata:O,default:te});const Se={headers:[],source:`
This website is currently under construction... come back later for more awesomeness
`,html:"<p>This website is currently under construction\u2026 come back later for more awesomeness</p>"},De={Cover:"https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",Name:"Website under construction",Description:"Coming soon",Published:"2021-10-03T00:00:00.000Z",Author:"Nic Henderson",HeroImageDescription:"A crane building things",astro:{headers:[],source:`
This website is currently under construction... come back later for more awesomeness
`,html:"<p>This website is currently under construction\u2026 come back later for more awesomeness</p>"}},Me=j(import.meta.url,{modules:[{module:Ae,specifier:"../../layouts/BlogPost.astro",assert:{}}],hydratedComponents:[],hoisted:[]}),Pe=B(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/"),Ce=E(async(a,e,o)=>(a.createAstro(Pe,e,o),w`${P(a,"Layout",te,{content:{Cover:"https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",Name:"Website under construction",Description:"Coming soon",Published:"2021-10-03T00:00:00.000Z",Author:"Nic Henderson",HeroImageDescription:"A crane building things",astro:{headers:[],source:`
This website is currently under construction... come back later for more awesomeness
`,html:"<p>This website is currently under construction\u2026 come back later for more awesomeness</p>"}}},{default:()=>w`<p>This website is currently under construction… come back later for more awesomeness</p>`})}`));var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",metadata:Se,frontmatter:De,$$metadata:Me,default:Ce});function Ve(a){let e,o,r,n=W(a[4]).format("Do MMM YYYY")+"",s,t,i,l,c,u,h,f=a[6](a[2],150)+"",y;return{c(){e=_("div"),o=_("div"),r=_("div"),s=D(n),t=F(),i=_("div"),l=_("div"),c=D(a[1]),u=F(),h=_("div"),y=D(f),this.h()},l($){e=b($,"DIV",{class:!0,style:!0});var C=g(e);o=b(C,"DIV",{class:!0});var T=g(o);r=b(T,"DIV",{class:!0});var x=g(r);s=M(x,n),x.forEach(d),t=Z(T),i=b(T,"DIV",{class:!0});var V=g(i);l=b(V,"DIV",{class:!0});var X=g(l);c=M(X,a[1]),X.forEach(d),u=Z(V),h=b(V,"DIV",{class:!0});var z=g(h);y=M(z,f),z.forEach(d),V.forEach(d),T.forEach(d),C.forEach(d),this.h()},h(){p(r,"class","text-sm justify-end flex text-gray-200 flex-1"),p(l,"class","text-4xl font-semibold "),p(h,"class","text-sm my-2 text-gray-200 leading-loose"),p(i,"class","p-2 flex-1"),p(o,"class","w-full h-full bg-cover bg-center bg-black bg-opacity-40 p-2 flex flex-col justify-between"),p(e,"class","h-96 bg-cover bg-center text-white"),p(e,"style",`background-image: url('${a[3]}');`)},m($,C){k($,e,C),m(e,o),m(o,r),m(r,s),m(o,t),m(o,i),m(i,l),m(l,c),m(i,u),m(i,h),m(h,y)},p:L,d($){$&&d(e)}}}function je(a){let e,o;return e=new _e({props:{fullWidth:a[0],href:a[5],$$slots:{default:[Ve]},$$scope:{ctx:a}}}),{c(){le(e.$$.fragment)},l(r){ie(e.$$.fragment,r)},m(r,n){ce(e,r,n),o=!0},p(r,[n]){const s={};n&1&&(s.fullWidth=r[0]),n&512&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(r){o||(S(e.$$.fragment,r),o=!0)},o(r){A(e.$$.fragment,r),o=!1},d(r){ue(e,r)}}}function Be(a,e,o){let{fullWidth:r=!1}=e,{post:n}=e;const{Name:s,Description:t,Cover:i,HeroImageDescription:l,Published:c,url:u}=n,h=(f,y)=>f.length>y?f.substring(0,y)+"...":f;return a.$$set=f=>{"fullWidth"in f&&o(0,r=f.fullWidth),"post"in f&&o(7,n=f.post)},[r,s,t,i,c,u,h,n]}class oe extends Y{constructor(e){super();H(this,e,Be,je,N,{fullWidth:0,post:7})}}var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe});j(import.meta.url,{modules:[{module:Ee,specifier:"../components/BlogPostPreview.svelte",assert:{}}],hydratedComponents:[],hoisted:[]});const Ie=B(import.meta.url,"https://nickhendersonmusic.com","file:///home/runner/work/hendo/hendo/");E(async(a,e,o)=>{let n=a.createAstro(Ie,e,o).fetchContent({"../pages/posts/Website under construction.md":Te});n=n.sort((t,i)=>new Date(i.published).valueOf()-new Date(t.published).valueOf());const s=[{props:{"data-astro-id":"VFAXMZSB"},children:"section.astro-VFAXMZSB{-webkit-overflow-scrolling:touch;}section.astro-VFAXMZSB div.astro-VFAXMZSB{flex:0 0 auto;}"}];for(const t of s)a.styles.add(t);return w`  <h1 class="text-4xl font-bold ml-8 mt-8 astro-VFAXMZSB">latest</h1>
<section class=" flex flex-nowrap overflow-x-auto px-8 py-2 pb-8 astro-VFAXMZSB">
      ${n.map(t=>w`<div class="pr-8 astro-VFAXMZSB">
          ${P(a,"BlogPostPreview",oe,{post:t,class:"astro-VFAXMZSB"})}
        </div>`)}
</section>

`});
