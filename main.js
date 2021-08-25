(()=>{"use strict";var e={566:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(645),l=n.n(o)()((function(e){return e[1]}));l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap);"]),l.push([e.id,':root {\n    --ReferenceBlue: hsl(228, 45%, 44%);\n    --LightReferenceBlue: hsl(152, 100%, 50%);\n    --BodyLight: hsl(236, 33%, 92%);\n    --BodyDark: hsl(235, 21%, 11%);\n    --fontLight: hsl(0, 0%, 98%);\n    --fontDark: hsl(233, 14%, 35%);\n    --bgDark: hsl(235, 24%, 19%);\n    --bgLight: hsla(197, 96%, 33%, 0.685);\n    --HoverDark: hsl(236, 9%, 61%);\n    --HoverLight: hsl(152, 95%, 60%);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    color: var(--fontDark);\n    font-size: 18px;\n    font-family: "Josefin Sans", sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--BodyDark);\n}',""]);const s=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var l={};if(o)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(l[r]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);o&&l[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var o,l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},o=[],l=0;l<e.length;l++){var i=e[l],c=t.base?i[0]+t.base:i[0],a=n[c]||0,u="".concat(c," ").concat(a);n[c]=a+1;var d=r(u),v={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(v)):s.push({identifier:u,updater:f(v,t),references:1}),o.push(u)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var s=n.nc;s&&(o.nonce=s)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=l(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var a,u=(a=[],function(e,t){return a[e]=t,a.filter(Boolean).join("\n")});function d(e,t,n,o){var l=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,l);else{var s=document.createTextNode(l),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function v(e,t,n){var o=n.css,l=n.media,s=n.sourceMap;if(l?e.setAttribute("media",l):e.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function f(e,t){var n,o,l;if(t.singleton){var s=m++;n=p||(p=c(t)),o=d.bind(null,n,s,!1),l=d.bind(null,n,s,!0)}else n=c(t),o=v.bind(null,n,t),l=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else l()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var l=r(n[o]);s[l].references--}for(var c=i(e,t),a=0;a<n.length;a++){var u=r(n[a]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=c}}}}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(){}function t(e){return e()}function o(){return Object.create(null)}function l(e){e.forEach(t)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e){return 0===Object.keys(e).length}function c(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function a(e){return null==e?"":e}function u(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function f(){return m(" ")}function h(){return m("")}function g(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function $(e,t){e.value=null==t?"":t}let x;function y(e){x=e}function w(){const e=function(){if(!x)throw new Error("Function called outside component initialization");return x}();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const l=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);o.slice().forEach((t=>{t.call(e,l)}))}}}new Set,new Set;const D=[],C=[],T=[],L=[],_=Promise.resolve();let E=!1;function j(e){T.push(e)}let S=!1;const H=new Set;function A(){if(!S){S=!0;do{for(let e=0;e<D.length;e+=1){const t=D[e];y(t),B(t.$$)}for(y(null),D.length=0;C.length;)C.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];H.has(t)||(H.add(t),t())}T.length=0}while(D.length);for(;L.length;)L.pop()();E=!1,S=!1,H.clear()}}function B(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const F=new Set;let M,O;function N(){M={r:0,c:[],p:M}}function z(){M.r||l(M.c),M=M.p}function I(e,t){e&&e.i&&(F.delete(e),e.i(t))}function R(e,t,n,o){if(e&&e.o){if(F.has(e))return;F.add(e),M.c.push((()=>{F.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function q(e){e&&e.c()}function J(e,n,o,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=e.$$;i&&i.m(n,o),r||j((()=>{const n=c.map(t).filter(s);a?a.push(...n):l(n),e.$$.on_mount=[]})),u.forEach(j)}function P(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,n,s,r,i,c,a=[-1]){const u=x;y(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...o)=>{const l=o.length?o[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=l)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](l),p&&function(e,t){-1===e.$$.dirty[0]&&(D.push(e),E||(E=!0,_.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),p=!0,l(d.before_update),d.fragment=!!r&&r(d.ctx),n.target){if(n.hydrate){const e=(m=n.target,Array.from(m.childNodes));d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&I(t.$$.fragment),J(t,n.target,n.anchor,n.customElement),A()}var m;y(u)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(s);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){l(this.$$.on_disconnect)}$destroy(){P(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!i(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class U{$destroy(){P(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!i(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const G=[];const K=function(t,n=e){let o;const l=[];function s(e){if(r(t,e)&&(t=e,o)){const e=!G.length;for(let e=0;e<l.length;e+=1){const n=l[e];n[1](),G.push(n,t)}if(e){for(let e=0;e<G.length;e+=2)G[e][0](G[e+1]);G.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(r,i=e){const c=[r,i];return l.push(c),1===l.length&&(o=n(s)||e),r(t),()=>{const e=l.indexOf(c);-1!==e&&l.splice(e,1),0===l.length&&(o(),o=null)}}}}(localStorage.getItem("theme")||"dark");function Q(t){let n,o,l,s,r,i,c,a,m,h;return{c(){n=p("div"),o=p("div"),l=p("div"),s=p("h1"),s.textContent="TODO",r=f(),i=p("span"),c=p("img"),b(s,"class","svelte-1ugpuge"),c.src!==(a="dark"==t[0]?"images/icon-sun.svg":"images/icon-moon.svg")&&b(c,"src",a),b(c,"alt","toggle theme"),b(i,"class","svelte-1ugpuge"),b(l,"class","Header-content svelte-1ugpuge"),b(o,"class","Header-container svelte-1ugpuge"),b(n,"class","Header svelte-1ugpuge")},m(e,a){d(e,n,a),u(n,o),u(o,l),u(l,s),u(l,r),u(l,i),u(i,c),m||(h=g(c,"click",t[1]),m=!0)},p(e,[t]){1&t&&c.src!==(a="dark"==e[0]?"images/icon-sun.svg":"images/icon-moon.svg")&&b(c,"src",a)},i:e,o:e,d(e){e&&v(n),m=!1,h()}}}function V(e,t,n){let o;return c(e,K,(e=>n(0,o=e))),[o,function(){"dark"==o?K.set("light"):K.set("dark")}]}K.subscribe((e=>{localStorage.setItem("theme","dark"===e?"dark":"light")}));const W=class extends U{constructor(e){var t;super(),document.getElementById("svelte-1ugpuge-style")||((t=p("style")).id="svelte-1ugpuge-style",t.textContent=".Header.svelte-1ugpuge.svelte-1ugpuge{color:aliceblue}.Header-container.svelte-1ugpuge.svelte-1ugpuge{display:grid;margin:auto;height:140px}.Header-content.svelte-1ugpuge.svelte-1ugpuge{width:100%;margin:auto;display:flex;align-items:center;justify-content:space-between}.Header-content.svelte-1ugpuge h1.svelte-1ugpuge{font-size:36px;font-weight:700;letter-spacing:10px}span.svelte-1ugpuge.svelte-1ugpuge:hover{cursor:pointer}",u(document.head,t)),Z(this,e,V,Q,r,{})}};function X(t){let n,o,s,r,i,c,h,$,x,y,w,D,C,T,L,_,E,j,S,H,A=new Date(t[1]).toLocaleDateString()+"";return{c(){n=p("div"),o=p("div"),s=p("div"),r=p("span"),c=f(),h=p("div"),$=p("h5"),x=m(t[0]),w=f(),D=p("div"),C=p("h5"),T=m(A),_=f(),E=p("button"),E.textContent="✖",b(r,"class",i=a(t[2])+" svelte-92uc5v"),b($,"class",y=a("completed"==t[2]?"dash":"")+" svelte-92uc5v"),b(h,"class","Todo-title svelte-92uc5v"),b(C,"class",L=a(t[3])+" svelte-92uc5v"),b(D,"class","Todo-deadline"),b(E,"class","svelte-92uc5v"),b(s,"class","Todo-content  svelte-92uc5v"),b(o,"class","Todo-container  svelte-92uc5v"),b(n,"class",j="Todo "+t[4]+" svelte-92uc5v"),b(n,"draggable","true")},m(e,l){d(e,n,l),u(n,o),u(o,s),u(s,r),u(s,c),u(s,h),u(h,$),u($,x),u(s,w),u(s,D),u(D,C),u(C,T),u(s,_),u(s,E),S||(H=[g(r,"click",t[6]),g(E,"click",t[5]),g(n,"dragover",Y),g(n,"touchmove",ee),g(n,"dragstart",t[7]),g(n,"drop",t[8]),g(n,"touchstart",t[9]),g(n,"touchend",t[10])],S=!0)},p(e,[t]){4&t&&i!==(i=a(e[2])+" svelte-92uc5v")&&b(r,"class",i),1&t&&k(x,e[0]),4&t&&y!==(y=a("completed"==e[2]?"dash":"")+" svelte-92uc5v")&&b($,"class",y),2&t&&A!==(A=new Date(e[1]).toLocaleDateString()+"")&&k(T,A),8&t&&L!==(L=a(e[3])+" svelte-92uc5v")&&b(C,"class",L),16&t&&j!==(j="Todo "+e[4]+" svelte-92uc5v")&&b(n,"class",j)},i:e,o:e,d(e){e&&v(n),S=!1,l(H)}}}const Y=e=>{e.preventDefault()},ee=e=>{e.preventDefault()};function te(e,t,n){let o,l,s;c(e,K,(e=>n(4,s=e)));const r=w();let{name:i}=t,{done:a}=t,{deadline:u}=t;return e.$$set=e=>{"name"in e&&n(0,i=e.name),"done"in e&&n(11,a=e.done),"deadline"in e&&n(1,u=e.deadline)},e.$$.update=()=>{2048&e.$$.dirty&&n(2,o=a?"completed":"pending"),2&e.$$.dirty&&n(3,l=u<(new Date).toLocaleDateString()?"overdue":"")},[i,u,o,l,s,e=>{r("remove",{id:e})},e=>{n(11,a=!a),r("done",{id:e,estado:o})},e=>{r("drag",{id:e})},e=>{r("drop",{id:e})},e=>{r("dragtouch",{id:e})},e=>{console.log("droped at: ",e),r("droptouch",{id:e})},a]}const ne=class extends U{constructor(e){var t;super(),document.getElementById("svelte-92uc5v-style")||((t=p("style")).id="svelte-92uc5v-style",t.textContent=".Todo.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{margin:1px 0 1px 0}.Todo-container.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{background-color:var(--bgDark)}.Todo-content.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{display:flex;align-items:center;justify-content:space-evenly;border-bottom:var(--bgLight) 0.01em outset;margin:auto}.Todo-content.svelte-92uc5v:hover>button.svelte-92uc5v.svelte-92uc5v{cursor:pointer;color:var(--fontDark)}.Todo-title.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{display:flex;border-style:none;height:50px;background-color:transparent;color:var(--HoverDark);align-items:center;width:85%}h5.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{font-size:18px}button.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{background:transparent;font-size:18px;padding:20px;color:var(--bgDark);border:none}span.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{display:block;width:1em;height:1em;border-radius:50%;margin:1em;border:0.1em solid darkslategrey;cursor:pointer}span.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v:hover{border:0.1em solid aliceblue}.completed.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{background-image:url(/todo/images/icon-check.svg);background-size:cover}.dash.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{color:var(--fontDark);text-decoration:line-through;text-decoration-thickness:2px}.overdue.svelte-92uc5v.svelte-92uc5v.svelte-92uc5v{color:tomato}.light.svelte-92uc5v .Todo-container.svelte-92uc5v.svelte-92uc5v{color:var(--fontLight);background-color:var(--bgLight)}.light.svelte-92uc5v .Todo-content.svelte-92uc5v.svelte-92uc5v{border-bottom:none}.light.svelte-92uc5v .Todo-title.svelte-92uc5v.svelte-92uc5v{color:var(--fontLight)}.light.svelte-92uc5v button.svelte-92uc5v.svelte-92uc5v{color:transparent}.light.svelte-92uc5v .Todo-content.svelte-92uc5v:hover>button.svelte-92uc5v{color:var(--fontLight)}.light.svelte-92uc5v span.svelte-92uc5v.svelte-92uc5v{border:0.1em solid var(--fontLight)}",u(document.head,t)),Z(this,e,te,X,r,{name:0,done:11,deadline:1})}};function oe(t){let n,o,s,r,i,c,h,$,x,y,w,D,C,T,L,_,E,j,S,H,A,B,F,M;return{c(){n=p("div"),o=p("div"),s=p("div"),r=p("span"),i=m(t[1]),c=m(" items left"),h=f(),$=p("div"),x=p("button"),y=m("All"),D=f(),C=p("button"),T=m("Active"),_=f(),E=p("button"),j=m("Completed"),H=f(),A=p("span"),A.textContent="Clear Completed",b(r,"class","svelte-xpuhk8"),b(x,"class",w=a("all"==t[0]?"active":"")+" svelte-xpuhk8"),b(C,"class",L=a("pending"==t[0]?"active":"")+" svelte-xpuhk8"),b(E,"class",S=a("completed"==t[0]?"active":"")+" svelte-xpuhk8"),b($,"class","filter svelte-xpuhk8"),b(A,"class","svelte-xpuhk8"),b(s,"class","Filters-content svelte-xpuhk8"),b(o,"class","Filters-container  svelte-xpuhk8"),b(n,"class",B="Filters "+t[2]+" svelte-xpuhk8")},m(e,l){d(e,n,l),u(n,o),u(o,s),u(s,r),u(r,i),u(r,c),u(s,h),u(s,$),u($,x),u(x,y),u($,D),u($,C),u(C,T),u($,_),u($,E),u(E,j),u(s,H),u(s,A),F||(M=[g(x,"click",t[5]),g(C,"click",t[6]),g(E,"click",t[7]),g(A,"click",t[8])],F=!0)},p(e,[t]){2&t&&k(i,e[1]),1&t&&w!==(w=a("all"==e[0]?"active":"")+" svelte-xpuhk8")&&b(x,"class",w),1&t&&L!==(L=a("pending"==e[0]?"active":"")+" svelte-xpuhk8")&&b(C,"class",L),1&t&&S!==(S=a("completed"==e[0]?"active":"")+" svelte-xpuhk8")&&b(E,"class",S),4&t&&B!==(B="Filters "+e[2]+" svelte-xpuhk8")&&b(n,"class",B)},i:e,o:e,d(e){e&&v(n),F=!1,l(M)}}}function le(e,t,n){let o;c(e,K,(e=>n(2,o=e)));const l=w();let{items:s}=t,{filter:r="all"}=t;const i=e=>{n(0,r=e),l("filtrate",{filter:r})},a=()=>{l("clear")};return e.$$set=e=>{"items"in e&&n(1,s=e.items),"filter"in e&&n(0,r=e.filter)},e.$$.update=()=>{e.$$.dirty},[r,s,o,i,a,()=>i("all"),()=>i("pending"),()=>i("completed"),e=>a()]}const se=class extends U{constructor(e){var t;super(),document.getElementById("svelte-xpuhk8-style")||((t=p("style")).id="svelte-xpuhk8-style",t.textContent=".Filters.svelte-xpuhk8.svelte-xpuhk8{height:40px}.Filters-container.svelte-xpuhk8.svelte-xpuhk8{height:100%;display:flex;justify-content:space-evenly;background-color:var(--bgDark);height:50px}.Filters-content.svelte-xpuhk8.svelte-xpuhk8{width:95%;align-items:center;font-size:12px;display:flex;justify-content:space-between}.Filters-content.svelte-xpuhk8 span.svelte-xpuhk8:last-child{color:var(--fontDark);cursor:pointer}span.svelte-xpuhk8.svelte-xpuhk8:last-child:hover{color:var(--HoverDark)}.filter.svelte-xpuhk8.svelte-xpuhk8{margin:1px;font-size:18px;width:45%;display:flex;justify-content:space-between}button.svelte-xpuhk8.svelte-xpuhk8{background-color:var(--bgDark);color:var(--fontDark);border:none;cursor:pointer}button.svelte-xpuhk8.svelte-xpuhk8:hover{color:var(--HoverDark)}.active.svelte-xpuhk8.svelte-xpuhk8,.active.svelte-xpuhk8.svelte-xpuhk8:hover{color:var(--ReferenceBlue)}.light.svelte-xpuhk8 .Filters-container.svelte-xpuhk8{background-color:var(--bgLight)}.light.svelte-xpuhk8 .Filters-content span.svelte-xpuhk8{color:var(--fontLight)}.light.svelte-xpuhk8 .Filters-content span.svelte-xpuhk8:last-child{color:var(--fontLight)}.light.svelte-xpuhk8 span.svelte-xpuhk8:last-child:hover{color:var(--HoverLight)}.light.svelte-xpuhk8 button.svelte-xpuhk8{background-color:transparent;color:var(--fontLight)}.light.svelte-xpuhk8 button.svelte-xpuhk8:hover{color:var(--HoverLight)}.light.svelte-xpuhk8 .active.svelte-xpuhk8,.light.svelte-xpuhk8 .active.svelte-xpuhk8:hover{color:var(--LightReferenceBlue)}",u(document.head,t)),Z(this,e,le,oe,r,{items:1,filter:0})}};function re(e,t,n){const o=e.slice();return o[28]=t[n],o[30]=n,o}function ie(e){let t,n,o="pending"==e[28].status&&ue(e);return{c(){o&&o.c(),t=h()},m(e,l){o&&o.m(e,l),d(e,t,l),n=!0},p(e,n){"pending"==e[28].status?o?(o.p(e,n),1&n&&I(o,1)):(o=ue(e),o.c(),I(o,1),o.m(t.parentNode,t)):o&&(N(),R(o,1,1,(()=>{o=null})),z())},i(e){n||(I(o),n=!0)},o(e){R(o),n=!1},d(e){o&&o.d(e),e&&v(t)}}}function ce(e){let t,n,o="completed"==e[28].status&&de(e);return{c(){o&&o.c(),t=h()},m(e,l){o&&o.m(e,l),d(e,t,l),n=!0},p(e,n){"completed"==e[28].status?o?(o.p(e,n),1&n&&I(o,1)):(o=de(e),o.c(),I(o,1),o.m(t.parentNode,t)):o&&(N(),R(o,1,1,(()=>{o=null})),z())},i(e){n||(I(o),n=!0)},o(e){R(o),n=!1},d(e){o&&o.d(e),e&&v(t)}}}function ae(e){let t,n;return t=new ne({props:{name:e[28].name,deadline:e[28].deadline,done:"completed"==e[28].status}}),t.$on("done",(function(){return e[15](e[30])})),t.$on("remove",(function(){return e[16](e[30])})),t.$on("drag",(function(){return e[17](e[30])})),t.$on("drop",(function(){return e[18](e[30])})),t.$on("tap",e[19]),{c(){q(t.$$.fragment)},m(e,o){J(t,e,o),n=!0},p(n,o){e=n;const l={};1&o&&(l.name=e[28].name),1&o&&(l.deadline=e[28].deadline),1&o&&(l.done="completed"==e[28].status),t.$set(l)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function ue(e){let t,n;return t=new ne({props:{name:e[28].name,done:"completed"==e[28].status}}),t.$on("done",(function(){return e[22](e[30])})),t.$on("remove",(function(){return e[23](e[30])})),{c(){q(t.$$.fragment)},m(e,o){J(t,e,o),n=!0},p(n,o){e=n;const l={};1&o&&(l.name=e[28].name),1&o&&(l.done="completed"==e[28].status),t.$set(l)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function de(e){let t,n;return t=new ne({props:{name:e[28].name,done:"completed"==e[28].status}}),t.$on("done",(function(){return e[20](e[30])})),t.$on("remove",(function(){return e[21](e[30])})),{c(){q(t.$$.fragment)},m(e,o){J(t,e,o),n=!0},p(n,o){e=n;const l={};1&o&&(l.name=e[28].name),1&o&&(l.done="completed"==e[28].status),t.$set(l)},i(e){n||(I(t.$$.fragment,e),n=!0)},o(e){R(t.$$.fragment,e),n=!1},d(e){P(t,e)}}}function ve(e){let t,n,o,l;const s=[ae,ce,ie],r=[];function i(e,t){return"all"==e[3]?0:"completed"==e[3]?1:"pending"==e[3]?2:-1}return~(t=i(e))&&(n=r[t]=s[t](e)),{c(){n&&n.c(),o=h()},m(e,n){~t&&r[t].m(e,n),d(e,o,n),l=!0},p(e,l){let c=t;t=i(e),t===c?~t&&r[t].p(e,l):(n&&(N(),R(r[c],1,1,(()=>{r[c]=null})),z()),~t?(n=r[t],n?n.p(e,l):(n=r[t]=s[t](e),n.c()),I(n,1),n.m(o.parentNode,o)):n=null)},i(e){l||(I(n),l=!0)},o(e){R(n),l=!1},d(e){~t&&r[t].d(e),e&&v(o)}}}function pe(e){let t,n,o,s,r,i,c,a,m,h,k,x,y,w,D,C,T,L,_,E,j,S,H;s=new W({});let A=e[0],B=[];for(let t=0;t<A.length;t+=1)B[t]=ve(re(e,A,t));const F=e=>R(B[e],1,1,(()=>{B[e]=null}));return T=new se({props:{items:e[4]}}),T.$on("clear",e[24]),T.$on("filtrate",e[25]),{c(){t=p("div"),n=p("div"),o=p("div"),q(s.$$.fragment),r=f(),i=p("form"),c=p("span"),a=f(),m=p("input"),h=f(),k=p("input"),x=f(),y=p("button"),w=f(),D=p("div");for(let e=0;e<B.length;e+=1)B[e].c();C=f(),q(T.$$.fragment),L=f(),_=p("div"),_.innerHTML='Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="svelte-522nim">Frontend Mentor</a>. Coded by <a href="https://twitter.com/cld_rojas" class="svelte-522nim">@cld_rojas</a>.',b(c,"class","svelte-522nim"),b(m,"type","text"),b(m,"placeholder","Create a new todo..."),b(m,"class","svelte-522nim"),b(k,"type","date"),b(k,"class","svelte-522nim"),y.hidden=!0,b(i,"class","form svelte-522nim"),b(D,"class","Todos svelte-522nim"),b(o,"class","App-content"),b(_,"class","attribution svelte-522nim"),b(n,"class","App-container svelte-522nim"),b(t,"class",E="App "+e[5]+" svelte-522nim")},m(l,v){d(l,t,v),u(t,n),u(n,o),J(s,o,null),u(o,r),u(o,i),u(i,c),u(i,a),u(i,m),$(m,e[1]),u(i,h),u(i,k),$(k,e[2]),u(i,x),u(i,y),u(o,w),u(o,D);for(let e=0;e<B.length;e+=1)B[e].m(D,null);u(o,C),J(T,o,null),u(n,L),u(n,_),j=!0,S||(H=[g(m,"input",e[13]),g(k,"input",e[14]),g(y,"click",e[6]),g(i,"submit",me)],S=!0)},p(e,[n]){if(2&n&&m.value!==e[1]&&$(m,e[1]),4&n&&$(k,e[2]),6537&n){let t;for(A=e[0],t=0;t<A.length;t+=1){const o=re(e,A,t);B[t]?(B[t].p(o,n),I(B[t],1)):(B[t]=ve(o),B[t].c(),I(B[t],1),B[t].m(D,null))}for(N(),t=A.length;t<B.length;t+=1)F(t);z()}const o={};16&n&&(o.items=e[4]),T.$set(o),(!j||32&n&&E!==(E="App "+e[5]+" svelte-522nim"))&&b(t,"class",E)},i(e){if(!j){I(s.$$.fragment,e);for(let e=0;e<A.length;e+=1)I(B[e]);I(T.$$.fragment,e),j=!0}},o(e){R(s.$$.fragment,e),B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)R(B[e]);R(T.$$.fragment,e),j=!1},d(e){e&&v(t),P(s),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(B,e),P(T),S=!1,l(H)}}}const me=e=>e.preventDefault();function fe(e,t,n){let o;c(e,K,(e=>n(5,o=e)));let l,s,r,i=[{name:"test",status:"pending",deadline:"8/24/2021"}],a="",u="",d="all";function v(e){"completed"==i[e].status?n(0,i[e].status="pending",i):n(0,i[e].status="completed",i),n(0,i=[...i])}function p(e){i.splice(e,1),n(0,i=[...i])}function m(){n(0,i=i.filter((e=>"pending"===e.status)))}function f(e){n(3,d=e.detail.filter)}function h(e){s=i[e],r=e}function g(e){p(r),i.splice(e,0,s),n(0,i=[...i])}return e.$$.update=()=>{1&e.$$.dirty&&n(4,l=i.filter((e=>"pending"===e.status)).length)},[i,a,u,d,l,o,function(){console.log("date aquired: ",u),""!=a&&n(0,i=[{name:a,status:"pending",deadline:u},...i]),n(2,u=""),n(1,a="")},v,p,m,f,h,g,function(){a=this.value,n(1,a)},function(){u=this.value,n(2,u)},e=>v(e),e=>p(e),e=>h(e),e=>g(e),()=>{alert("done")},e=>v(e),e=>p(e),e=>v(e),e=>p(e),()=>m(),e=>f(e)]}var he=n(379),ge=n.n(he),be=n(566);ge()(be.Z,{insert:"head",singleton:!1}),be.Z.locals,new class extends U{constructor(e){var t;super(),document.getElementById("svelte-522nim-style")||((t=p("style")).id="svelte-522nim-style",t.textContent='.App.svelte-522nim.svelte-522nim.svelte-522nim{width:100%;background-image:url("images/bg-desktop-dark.jpg");background-size:contain;background-repeat:no-repeat}.App-container.svelte-522nim.svelte-522nim.svelte-522nim{width:40%;margin:0 auto}.Todos.svelte-522nim.svelte-522nim.svelte-522nim{margin:0}.form.svelte-522nim.svelte-522nim.svelte-522nim{height:60px;display:flex;align-items:center;background-color:var(--bgDark);margin-bottom:1em}span.svelte-522nim.svelte-522nim.svelte-522nim{display:block;width:1em;height:1em;border-radius:50%;margin:1em;border:0.1em solid darkslategrey}.form.svelte-522nim>input.svelte-522nim.svelte-522nim{font-size:18px;font-family:inherit;font-weight:700;color:var(--fontDark);border:none;background-color:var(--bgDark);height:60%;width:80%}.form.svelte-522nim>input.svelte-522nim.svelte-522nim::-webkit-datetime-edit{visibility:hidden}.form.svelte-522nim>input.svelte-522nim.svelte-522nim:focus{outline:var(--fontDark) ridge 1px;color:var(--HoverDark)}.attribution.svelte-522nim.svelte-522nim.svelte-522nim{margin-top:30px;font-size:11px;text-align:center}.attribution.svelte-522nim a.svelte-522nim.svelte-522nim{color:var(--ReferenceBlue)}.light.svelte-522nim.svelte-522nim.svelte-522nim{height:100vh;background-image:url("images/bg-desktop-light.jpg");background-color:aliceblue}.light.svelte-522nim .form.svelte-522nim.svelte-522nim{background-color:var(--bgLight)}.light.svelte-522nim span.svelte-522nim.svelte-522nim{border:0.1em solid aliceblue}.light.svelte-522nim .form.svelte-522nim>input.svelte-522nim{background-color:transparent;color:var(--fontLight)}.light.svelte-522nim .form.svelte-522nim>input.svelte-522nim::placeholder{color:aliceblue}@media only screen and (min-width: 360px) and (max-width: 980px){.App.svelte-522nim.svelte-522nim.svelte-522nim{background-image:url("images/bg-mobile-dark.jpg")}.light.svelte-522nim.svelte-522nim.svelte-522nim{background-image:url("images/bg-mobile-light.jpg")}.App-container.svelte-522nim.svelte-522nim.svelte-522nim{width:85%}}',u(document.head,t)),Z(this,e,fe,pe,r,{})}}({target:document.getElementById("root")})})()})();