let t=!1;const e="undefined"!=typeof window?window:{},n=e.document||{head:{}},l={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},s=t=>Promise.resolve(t),o=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),c=(t,e,n)=>{n&&n.map((([n,s,o])=>{const c=t,a=r(e,o),u=i(n);l.ael(c,s,a,u),(e.o=e.o||[]).push((()=>l.rel(c,s,a,u)))}))},r=(t,e)=>n=>{try{256&t.t?t.i[e](n):(t.u=t.u||[]).push([e,n])}catch(t){z(t)}},i=t=>0!=(2&t),a=new WeakMap,u=t=>"sc-"+t.$,f={},$=t=>"object"==(t=typeof t)||"function"===t,d=(t,e,...n)=>{let l=null,s=!1,o=!1,c=[];const r=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!$(l))&&(l+=""),s&&o?c[c.length-1].h+=l:c.push(s?y(null,l):l),o=s)};if(r(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}const i=y(t,null);return i.p=e,c.length>0&&(i.m=c),i},y=(t,e)=>({t:0,S:t,h:e,g:null,m:null,p:null}),h={},p=(t,e,n,l)=>{if(n!==l&&(e.toLowerCase(),"class"===e)){const e=t.classList,s=b(n),o=b(l);e.remove(...s.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!s.includes(t))))}},m=/\s/,b=t=>t?t.split(m):[],w=(t,e,n,l)=>{const s=11===e.g.nodeType&&e.g.host?e.g.host:e.g,o=t&&t.p||f,c=e.p||f;for(l in o)l in c||p(s,l,o[l],void 0);for(l in c)p(s,l,o[l],c[l])},S=(t,e,l)=>{let s,o,c=e.m[l],r=0;if(s=c.g=n.createElement(c.S),w(null,c),c.m)for(r=0;r<c.m.length;++r)o=S(t,c,r),o&&s.appendChild(o);return s},g=(t,e,n,l,s,o)=>{let c,r=t;for(;s<=o;++s)l[s]&&(c=S(null,n,s),c&&(l[s].g=c,r.insertBefore(c,e)))},j=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.g.remove()},v=(t,e)=>t.S===e.S,M=(t,e)=>{const n=e.g=t.g,l=t.m,s=e.m;w(t,e),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,c=0,r=e.length-1,i=e[0],a=e[r],u=l.length-1,f=l[0],$=l[u];for(;o<=r&&c<=u;)null==i?i=e[++o]:null==a?a=e[--r]:null==f?f=l[++c]:null==$?$=l[--u]:v(i,f)?(M(i,f),i=e[++o],f=l[++c]):v(a,$)?(M(a,$),a=e[--r],$=l[--u]):v(i,$)?(M(i,$),t.insertBefore(i.g,a.g.nextSibling),i=e[++o],$=l[--u]):v(a,f)?(M(a,f),t.insertBefore(a.g,i.g),a=e[--r],f=l[++c]):(s=S(e&&e[c],n,c),f=l[++c],s&&i.g.parentNode.insertBefore(s,i.g));o>r?g(t,null==l[u+1]?null:l[u+1].g,n,l,c,u):c>u&&j(e,o,r)})(n,l,e,s):null!==s?g(n,null,e,s,0,s.length-1):null!==l&&j(l,0,l.length-1)},k=(t,e,n)=>{const l=(t=>N(t).j)(t);return{emit:t=>C(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},C=(t,e,n)=>{const s=l.ce(e,n);return t.dispatchEvent(s),s},O=(t,e)=>{e&&!t.v&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.v=e)))},P=(t,e)=>{if(t.t|=16,!(4&t.t))return O(t,t.M),Z((()=>x(t,e)));t.t|=512},x=(t,e)=>{const n=t.i;return e&&(t.t|=256,t.u&&(t.u.map((([t,e])=>L(n,t,e))),t.u=null)),R(void 0,(()=>E(t,n,e)))},E=async(t,e,l)=>{const s=t.j,o=s["s-rc"];l&&(t=>{const e=t.k;((t,e)=>{let l=u(e),s=G.get(l);if(t=11===t.nodeType?t:n,s)if("string"==typeof s){let e,o=a.get(t=t.head||t);o||a.set(t,o=new Set),o.has(l)||(e=n.createElement("style"),e.innerHTML=s,t.insertBefore(e,t.querySelector("link")),o&&o.add(l))}else t.adoptedStyleSheets.includes(s)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,s])})(t.j.getRootNode(),e)})(t);T(t,e),o&&(o.map((t=>t())),s["s-rc"]=void 0);{const e=s["s-p"],n=()=>A(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},T=(t,e)=>{try{e=e.render(),t.t&=-17,t.t|=2,((t,e)=>{const n=t.j,l=t.C||y(null,null),s=(t=>t&&t.S===h)(e)?e:d(null,null,e);s.S=null,s.t|=4,t.C=s,s.g=l.g=n,M(l,s)})(t,e)}catch(e){z(e,t.j)}return null},A=t=>{const e=t.j,n=t.M;64&t.t||(t.t|=64,U(e),t.O(e),n||H()),t.v&&(t.v(),t.v=void 0),512&t.t&&Y((()=>P(t,!1))),t.t&=-517},H=()=>{U(n.documentElement),Y((()=>C(e,"appload",{detail:{namespace:"a-share"}})))},L=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){z(t)}},R=(t,e)=>t&&t.then?t.then(e):e(),U=t=>t.classList.add("hydrated"),W=(t,e,n)=>{if(e.P){const s=Object.entries(e.P),o=t.prototype;if(s.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>N(this).T.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=N(t),o=s.T.get(e),c=s.t,r=s.i;n=((t,e)=>null==t||$(t)?t:1&e?t+"":t)(n,l.P[e][0]),8&c&&void 0!==o||n===o||(s.T.set(e,n),r&&2==(18&c)&&P(s,!1))})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,s){l.jmp((()=>{const n=e.get(t);this[n]=(null!==s||"boolean"!=typeof this[n])&&s}))},t.observedAttributes=s.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},q=(t,s={})=>{const r=[],i=s.exclude||[],a=e.customElements,f=n.head,$=f.querySelector("meta[charset]"),d=n.createElement("style"),y=[];let h,p=!0;Object.assign(l,s),l.l=new URL(s.resourcesUrl||"./",n.baseURI).href,t.map((t=>t[1].map((e=>{const n={t:e[0],$:e[1],P:e[2],A:e[3]};n.P=e[2],n.A=e[3];const s=n.$,f=class extends HTMLElement{constructor(t){super(t),_(t=this,n)}connectedCallback(){h&&(clearTimeout(h),h=null),p?y.push(this):l.jmp((()=>(t=>{if(0==(1&l.t)){const e=N(t),n=e.k,l=()=>{};if(1&e.t)c(t,e,n.A);else{e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(e,e.M=n);break}}n.P&&Object.entries(n.P).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=D(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(W(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(t){z(t)}e.t&=-9,t()}if(s.style){let t=s.style;const e=u(n);if(!G.has(e)){const l=()=>{};((t,e,n)=>{let l=G.get(t);o&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,G.set(t,l)})(e,t,!!(1&n.t)),l()}}}const c=e.M,r=()=>P(e,!0);c&&c["s-rc"]?c["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){l.jmp((()=>(()=>{if(0==(1&l.t)){const t=N(this);t.o&&(t.o.map((t=>t())),t.o=void 0)}})()))}componentOnReady(){return N(this).H}};n.L=t[0],i.includes(s)||a.get(s)||(r.push(s),a.define(s,W(f,n,1)))})))),d.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),f.insertBefore(d,$?$.nextSibling:f.firstChild),p=!1,y.length?y.map((t=>t.connectedCallback())):l.jmp((()=>h=setTimeout(H,30)))},F=new WeakMap,N=t=>F.get(t),V=(t,e)=>F.set(e.i=t,e),_=(t,e)=>{const n={t:0,j:t,k:e,T:new Map};return n.H=new Promise((t=>n.O=t)),t["s-p"]=[],t["s-rc"]=[],c(t,n,e.A),F.set(t,n)},z=(t,e)=>(0,console.error)(t,e),B=new Map,D=t=>{const e=t.$.replace(/-/g,"_"),n=t.L,l=B.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(B.set(n,t),t[e])),z)},G=new Map,I=[],J=[],K=(e,n)=>s=>{e.push(s),t||(t=!0,n&&4&l.t?Y(X):l.raf(X))},Q=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){z(t)}t.length=0},X=()=>{Q(I),Q(J),(t=I.length>0)&&l.raf(X)},Y=t=>s().then(t),Z=K(J,!0);export{h as H,q as b,k as c,d as h,s as p,V as r}