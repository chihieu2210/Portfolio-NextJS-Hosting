(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var s=l.apply(null,i);s&&e.push(s)}}else if("object"===r){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var a in i)n.call(i,a)&&i[a]&&e.push(a)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(i=(function(){return l}).apply(t,[]))&&(e.exports=i)}()},1118:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(4275)}])},7498:function(e,t){"use strict";var i,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{PrefetchKind:function(){return i},ACTION_REFRESH:function(){return l},ACTION_NAVIGATE:function(){return r},ACTION_RESTORE:function(){return s},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return o},ACTION_SERVER_ACTION:function(){return d},isThenable:function(){return u}});let l="refresh",r="navigate",s="restore",a="server-patch",c="prefetch",o="fast-refresh",d="server-action";function u(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=i||(i={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,i){"use strict";function n(e,t,i,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),i(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3271:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Image}});let n=i(8754),l=i(1757),r=l._(i(7294)),s=n._(i(3935)),a=n._(i(9201)),c=i(3914),o=i(5494),d=i(869);i(1905);let u=i(1823),h=n._(i(4545)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Portfolio-NextJS-Hosting/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,i,n,l,r){let s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&l(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,l=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function x(e){let[t,i]=r.version.split(".",2),n=parseInt(t,10),l=parseInt(i,10);return n>18||18===n&&l>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,r.forwardRef)((e,t)=>{let{src:i,srcSet:n,sizes:l,height:s,width:a,decoding:c,className:o,style:d,fetchPriority:u,placeholder:h,loading:f,unoptimized:p,fill:g,onLoadRef:j,onLoadingCompleteRef:v,setBlurComplete:N,setShowAltText:b,onLoad:y,onError:_,...w}=e;return r.default.createElement("img",{...w,...x(u),loading:f,width:a,height:s,decoding:c,"data-nimg":g?"fill":"1",className:o,style:d,sizes:l,srcSet:n,src:i,ref:(0,r.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,h,j,v,N,p))},[i,h,j,v,N,_,p,t]),onLoad:e=>{let t=e.currentTarget;m(t,h,j,v,N,p)},onError:e=>{b(!0),"empty"!==h&&N(!0),_&&_(e)}})});function g(e){let{isAppRouter:t,imgAttributes:i}=e,n={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...x(i.fetchPriority)};return t&&s.default.preload?(s.default.preload(i.src,n),null):r.default.createElement(a.default,null,r.default.createElement("link",{key:"__nimg-"+i.src+i.srcSet+i.sizes,rel:"preload",href:i.srcSet?void 0:i.src,...n}))}let Image=(0,r.forwardRef)((e,t)=>{let i=(0,r.useContext)(u.RouterContext),n=(0,r.useContext)(d.ImageConfigContext),l=(0,r.useMemo)(()=>{let e=f||n||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[n]),{onLoad:s,onLoadingComplete:a}=e,m=(0,r.useRef)(s);(0,r.useEffect)(()=>{m.current=s},[s]);let x=(0,r.useRef)(a);(0,r.useEffect)(()=>{x.current=a},[a]);let[j,v]=(0,r.useState)(!1),[N,b]=(0,r.useState)(!1),{props:y,meta:_}=(0,c.getImgProps)(e,{defaultLoader:h.default,imgConf:l,blurComplete:j,showAltText:N});return r.default.createElement(r.default.Fragment,null,r.default.createElement(p,{...y,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:m,onLoadingCompleteRef:x,setBlurComplete:v,setShowAltText:b,ref:t}),_.priority?r.default.createElement(g,{isAppRouter:!i,imgAttributes:y}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return N}});let n=i(8754),l=n._(i(7294)),r=i(4450),s=i(2227),a=i(4364),c=i(109),o=i(3607),d=i(1823),u=i(9031),h=i(920),f=i(30),m=i(7192),x=i(7498),p=new Set;function g(e,t,i,n,l,r){if(!r&&!(0,s.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,r=t+"%"+i+"%"+l;if(p.has(r))return;p.add(r)}let a=r?e.prefetch(t,l):e.prefetch(t,i,n);Promise.resolve(a).catch(e=>{})}function j(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=l.default.forwardRef(function(e,t){let i,n;let{href:a,as:p,children:v,prefetch:N=null,passHref:b,replace:y,shallow:_,scroll:w,locale:C,onClick:S,onMouseEnter:O,onTouchStart:E,legacyBehavior:P=!1,...k}=e;i=v,P&&("string"==typeof i||"number"==typeof i)&&(i=l.default.createElement("a",null,i));let T=l.default.useContext(d.RouterContext),I=l.default.useContext(u.AppRouterContext),R=null!=T?T:I,M=!T,A=!1!==N,L=null===N?x.PrefetchKind.AUTO:x.PrefetchKind.FULL,{href:D,as:B}=l.default.useMemo(()=>{if(!T){let e=j(a);return{href:e,as:p?j(p):e}}let[e,t]=(0,r.resolveHref)(T,a,!0);return{href:e,as:p?(0,r.resolveHref)(T,p):t||e}},[T,a,p]),z=l.default.useRef(D),G=l.default.useRef(B);P&&(n=l.default.Children.only(i));let H=P?n&&"object"==typeof n&&n.ref:t,[F,K,U]=(0,h.useIntersection)({rootMargin:"200px"}),V=l.default.useCallback(e=>{(G.current!==B||z.current!==D)&&(U(),G.current=B,z.current=D),F(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[B,H,D,U,F]);l.default.useEffect(()=>{R&&K&&A&&g(R,D,B,{locale:C},{kind:L},M)},[B,D,K,C,A,null==T?void 0:T.locale,R,M,L]);let W={ref:V,onClick(e){P||"function"!=typeof S||S(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,i,n,r,a,c,o,d){let{nodeName:u}=e.currentTarget,h="A"===u.toUpperCase();if(h&&(function(e){let t=e.currentTarget,i=t.getAttribute("target");return i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!(0,s.isLocalURL)(i)))return;e.preventDefault();let f=()=>{let e=null==c||c;"beforePopState"in t?t[r?"replace":"push"](i,n,{shallow:a,locale:o,scroll:e}):t[r?"replace":"push"](n||i,{scroll:e})};d?l.default.startTransition(f):f()}(e,R,D,B,y,_,w,C,M)},onMouseEnter(e){P||"function"!=typeof O||O(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(A||!M)&&g(R,D,B,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:L},M)},onTouchStart(e){P||"function"!=typeof E||E(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(A||!M)&&g(R,D,B,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:L},M)}};if((0,c.isAbsoluteUrl)(B))W.href=B;else if(!P||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,f.getDomainLocale)(B,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);W.href=t||(0,m.addBasePath)((0,o.addLocale)(B,e,null==T?void 0:T.defaultLocale))}return P?l.default.cloneElement(n,W):l.default.createElement("a",{...k,...W},i)}),N=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=i(7294),l=i(3436),r="function"==typeof IntersectionObserver,s=new Map,a=[];function c(e){let{rootRef:t,rootMargin:i,disabled:c}=e,o=c||!r,[d,u]=(0,n.useState)(!1),h=(0,n.useRef)(null),f=(0,n.useCallback)(e=>{h.current=e},[]);(0,n.useEffect)(()=>{if(r){if(o||d)return;let e=h.current;if(e&&e.tagName){let n=function(e,t,i){let{id:n,observer:l,elements:r}=function(e){let t;let i={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===i.root&&e.margin===i.margin);if(n&&(t=s.get(n)))return t;let l=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e);return t={id:i,observer:r,elements:l},a.push(i),s.set(i,t),t}(i);return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),s.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:i});return n}}else if(!d){let e=(0,l.requestIdleCallback)(()=>u(!0));return()=>(0,l.cancelIdleCallback)(e)}},[o,i,t,d,h.current]);let m=(0,n.useCallback)(()=>{u(!1)},[]);return[f,d,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(1905);let n=i(2393),l=i(5494);function r(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,c,o,{src:d,sizes:u,unoptimized:h=!1,priority:f=!1,loading:m,className:x,quality:p,width:g,height:j,fill:v=!1,style:N,onLoad:b,onLoadingComplete:y,placeholder:_="empty",blurDataURL:w,fetchPriority:C,layout:S,objectFit:O,objectPosition:E,lazyBoundary:P,lazyRoot:k,...T}=e,{imgConf:I,showAltText:R,blurComplete:M,defaultLoader:A}=t,L=I||l.imageConfigDefault;if("allSizes"in L)a=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);a={...L,allSizes:e,deviceSizes:t}}let D=T.loader||A;delete T.loader,delete T.srcSet;let B="__next_img_default"in D;if(B){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:i,...n}=t;return e(n)}}if(S){"fill"===S&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(N={...N,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!u&&(u=t)}let z="",G=s(g),H=s(j);if("object"==typeof(i=d)&&(r(i)||void 0!==i.src)){let e=r(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(c=e.blurWidth,o=e.blurHeight,w=w||e.blurDataURL,z=e.src,!v){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let F=!f&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:z)||d.startsWith("data:")||d.startsWith("blob:"))&&(h=!0,F=!1),a.unoptimized&&(h=!0),B&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(h=!0),f&&(C="high");let K=s(p),U=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:E}:{},R?{}:{color:"transparent"},N),V=M||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:c,blurHeight:o,blurDataURL:w||"",objectFit:U.objectFit})+'")':'url("'+_+'")',W=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:i,unoptimized:n,width:l,quality:r,sizes:s,loader:a}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:c,kind:o}=function(e,t,i){let{deviceSizes:n,allSizes:l}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:l,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let r=[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))];return{widths:r,kind:"x"}}(t,l,s),d=c.length-1;return{sizes:s||"w"!==o?s:"100vw",srcSet:c.map((e,n)=>a({config:t,src:i,quality:r,width:e})+" "+("w"===o?e:n+1)+o).join(", "),src:a({config:t,src:i,quality:r,width:c[d]})}}({config:a,src:d,unoptimized:h,width:G,quality:K,sizes:u,loader:D}),X={...T,loading:F?"lazy":m,fetchPriority:C,width:G,height:H,decoding:"async",className:x,style:{...U,...W},sizes:J.sizes,srcSet:J.srcSet,src:J.src},q={unoptimized:h,priority:f,placeholder:_,fill:v};return{props:X,meta:q}}},2393:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:l,blurDataURL:r,objectFit:s}=e,a=n?40*n:t,c=l?40*l:i,o=a&&c?"viewBox='0 0 "+a+" "+c+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+o+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(o?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+r+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},645:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return c},default:function(){return o}});let n=i(8754),l=i(3914),r=i(1905),s=i(3271),a=n._(i(4545)),c=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Portfolio-NextJS-Hosting/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},o=s.Image},4545:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:l}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(l||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),i.__next_img_default=!0;let n=i},4275:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return X}});var n=i(5893),l=i(9008),r=i.n(l);i(2611),i(415),i(3293);var s=i(7294),a=i(4184),c=i.n(a);let o=s.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:d,Provider:u}=o;function h(e,t){let{prefixes:i}=(0,s.useContext)(o);return e||i[t]||t}var f=function(e){let t=(0,s.useRef)(e);return(0,s.useEffect)(()=>{t.current=e},[e]),t};void 0!==i.g&&i.g.navigator&&i.g.navigator.product,new WeakMap;let m=["as","disabled"];function x({tagName:e,disabled:t,href:i,target:n,rel:l,role:r,onClick:s,tabIndex:a=0,type:c}){e||(e=null!=i||null!=n||null!=l?"a":"button");let o={tagName:e};if("button"===e)return[{type:c||"button",disabled:t},o];let d=n=>{var l;if(!t&&("a"!==e||(l=i)&&"#"!==l.trim())||n.preventDefault(),t){n.stopPropagation();return}null==s||s(n)};return"a"===e&&(i||(i="#"),t&&(i=void 0)),[{role:null!=r?r:"button",disabled:void 0,tabIndex:t?void 0:a,href:i,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?l:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},o]}let p=s.forwardRef((e,t)=>{let{as:i,disabled:l}=e,r=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,m),[s,{tagName:a}]=x(Object.assign({tagName:i,disabled:l},r));return(0,n.jsx)(a,Object.assign({},r,s,{ref:t}))});p.displayName="Button";let g=["onKeyDown"],j=s.forwardRef((e,t)=>{var i;let{onKeyDown:l}=e,r=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,g),[a]=x(Object.assign({tagName:"a"},r)),c=function(e){let t=f(e);return(0,s.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}(e=>{a.onKeyDown(e),null==l||l(e)});return(i=r.href)&&"#"!==i.trim()&&"button"!==r.role?(0,n.jsx)("a",Object.assign({ref:t},r,{onKeyDown:l})):(0,n.jsx)("a",Object.assign({ref:t},r,a,{onKeyDown:c}))});j.displayName="Anchor";var v=j;let N=s.forwardRef(({bsPrefix:e,active:t=!1,children:i,className:l,as:r="li",linkAs:s=v,linkProps:a={},href:o,title:d,target:u,...f},m)=>{let x=h(e,"breadcrumb-item");return(0,n.jsx)(r,{ref:m,...f,className:c()(x,l,{active:t}),"aria-current":t?"page":void 0,children:t?i:(0,n.jsx)(s,{...a,href:o,title:d,target:u,children:i})})});N.displayName="BreadcrumbItem";let b=s.forwardRef(({bsPrefix:e,className:t,listProps:i={},children:l,label:r="breadcrumb",as:s="nav",...a},o)=>{let d=h(e,"breadcrumb");return(0,n.jsx)(s,{"aria-label":r,className:t,ref:o,...a,children:(0,n.jsx)("ol",{...i,className:c()(d,null==i?void 0:i.className),children:l})})});b.displayName="Breadcrumb";var y=Object.assign(b,{Item:N}),_=i(9462),w=i.n(_),C=function(){return(0,n.jsxs)(y,{className:w().container,children:[(0,n.jsx)(y.Item,{href:"/",children:"Trang chủ"}),(0,n.jsx)(y.Item,{active:!0,children:"Sản phẩm"})]})},S=i(1664),O=i.n(S),E=function(){return(0,n.jsxs)("ul",{className:"nav flex-column nav-pills",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"#",className:"nav-link active","aria-current":"page",children:"Active"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"#",className:"nav-link",children:"Link"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"#",className:"nav-link",children:"Link"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"#",className:"nav-link disabled",children:"Disabled"})})]})},P=function(){return(0,n.jsx)("div",{className:"col-md-3 hidden-xs",children:(0,n.jsx)(E,{})})},k=i(5675),T=i.n(k),I=i(4298),R=i.n(I),M=function(){return(0,n.jsxs)("div",{className:"container text-center my-3",children:[(0,n.jsx)("div",{className:"row mx-auto my-auto justify-content-center",children:(0,n.jsxs)("div",{id:"recipeCarousel",className:"carousel slide","data-bs-ride":"carousel",children:[(0,n.jsxs)("div",{className:"carousel-inner",role:"listbox",children:[(0,n.jsx)("div",{className:"carousel-item active",children:(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-img",children:(0,n.jsx)(T(),{src:"https://via.placeholder.com/700x500.png/CB997E/333333?text=1",alt:"image 01",className:"img-fluid",width:165,height:80})}),(0,n.jsx)("div",{className:"card-img-overlay",children:"Slide 1"})]})})}),(0,n.jsx)("div",{className:"carousel-item",children:(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-img",children:(0,n.jsx)(T(),{src:"https://via.placeholder.com/700x500.png/DDBEA9/333333?text=2",alt:"image 02",className:"img-fluid",width:165,height:80})}),(0,n.jsx)("div",{className:"card-img-overlay",children:"Slide 2"})]})})}),(0,n.jsx)("div",{className:"carousel-item",children:(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-img",children:(0,n.jsx)(T(),{src:"https://via.placeholder.com/700x500.png/FFE8D6/333333?text=3",alt:"image 03",className:"img-fluid",width:165,height:80})}),(0,n.jsx)("div",{className:"card-img-overlay",children:"Slide 3"})]})})}),(0,n.jsx)("div",{className:"carousel-item",children:(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-img",children:(0,n.jsx)(T(),{src:"https://via.placeholder.com/700x500.png/B7B7A4/333333?text=4",alt:"image 04",className:"img-fluid",width:165,height:80})}),(0,n.jsx)("div",{className:"card-img-overlay",children:"Slide 4"})]})})}),(0,n.jsx)("div",{className:"carousel-item",children:(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-img",children:(0,n.jsx)(T(),{src:"https://via.placeholder.com/700x500.png/A5A58D/333333?text=5",alt:"image 05",className:"img-fluid",width:165,height:80})}),(0,n.jsx)("div",{className:"card-img-overlay",children:"Slide 5"})]})})}),(0,n.jsx)("div",{className:"carousel-item",children:(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsx)("div",{className:"card-img",children:(0,n.jsx)(T(),{src:"https://via.placeholder.com/700x500.png/6B705C/eeeeee?text=6",alt:"image 06",className:"img-fluid",width:165,height:80})}),(0,n.jsx)("div",{className:"card-img-overlay",children:"Slide 6"})]})})})]}),(0,n.jsx)("a",{className:"carousel-control-prev bg-transparent w-aut",href:"#recipeCarousel",role:"button","data-bs-slide":"prev",children:(0,n.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"})}),(0,n.jsx)("a",{className:"carousel-control-next bg-transparent w-aut",href:"#recipeCarousel",role:"button","data-bs-slide":"next",children:(0,n.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"})})]})}),(0,n.jsx)(R(),{id:"show-slick",children:"\n      let items = document.querySelectorAll('.carousel .carousel-item');\n\n      items.forEach((el) => {\n              const minPerSlide = 4\n              let next = el.nextElementSibling\n              for (var i=1; i<minPerSlide; i++) {\n                if (!next) {\n                    // wrap carousel by using first child\n                    next = items[0]\n                }\n                let cloneChild = next.cloneNode(true)\n                el.appendChild(cloneChild.children[0])\n                next = next.nextElementSibling\n            }\n        });\n      "})]})},A=i(97),L=i.n(A),D=function(){return(0,n.jsx)("footer",{className:L().footer,children:(0,n.jsx)("div",{className:"content",children:(0,n.jsxs)("div",{className:"site-footer",children:[(0,n.jsx)("div",{className:"footer-inner pt-lg-5 pb-lg-5",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xs-12 col-sm-6 col-lg-3",children:(0,n.jsxs)("div",{className:"footer-widget",children:[(0,n.jsx)("h3",{className:"hastog",children:(0,n.jsx)("span",{children:"Li\xean hệ"})}),(0,n.jsxs)("ul",{className:"list-menu list-showroom",children:[(0,n.jsx)("li",{style:{paddingLeft:0},children:(0,n.jsx)("p",{children:"Ch\xfang t\xf4i chuy\xean cung cấp c\xe1c sản phẩm thực phẩm sạch an to\xe0n cho sức khỏe con người"})}),(0,n.jsxs)("li",{className:"clearfix",children:[(0,n.jsx)("i",{className:"block_icon fa fa-map-marker"})," ",(0,n.jsx)("p",{children:"Ladeco Building, 266 Doi Can Street, H\xe0 Nội,"})]}),(0,n.jsxs)("li",{className:"clearfix",children:[(0,n.jsx)("i",{className:"block_icon fa fa-phone"}),(0,n.jsx)(O(),{href:"tel:19006750",children:"1900 6750"}),(0,n.jsx)("p",{children:"Thứ 2 - Chủ nhật: 9:00 - 18:00"})]}),(0,n.jsxs)("li",{className:"clearfix",children:[(0,n.jsx)("i",{className:"block_icon fa fa-envelope"}),(0,n.jsx)(O(),{href:"mailto:support@sapo.vn",title:"support@sapo.vn",children:"support@sapo.vn"})]})]})]})}),(0,n.jsx)("div",{className:"col-xs-12 col-sm-6 col-lg-3",children:(0,n.jsxs)("div",{className:"footer-widget",children:[(0,n.jsx)("h3",{className:"hastog",children:(0,n.jsx)("span",{children:"Danh mục"})}),(0,n.jsxs)("ul",{className:"list-menu list-blogs",children:[(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/",title:"Trang chủ",children:"Trang chủ"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/collections/all",title:"Sản phẩm",children:"Sản phẩm"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/gioi-thieu",title:"Giới thiệu",children:"Giới thiệu"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/tin-tuc",title:"Tin tức",children:"Tin tức"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/lien-he",title:"Li\xean hệ",children:"Li\xean hệ"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/chi-duong",title:"Chỉ đường",children:"Chỉ đường"})})]})]})}),(0,n.jsx)("div",{className:"col-xs-12 col-sm-6 col-lg-3",children:(0,n.jsxs)("div",{className:"footer-widget",children:[(0,n.jsx)("h3",{className:"hastog",children:(0,n.jsx)("span",{children:"Hỗ trợ kh\xe1ch h\xe0ng"})}),(0,n.jsxs)("ul",{className:"list-menu list-blogs",children:[(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/",title:"Trang chủ",children:"Trang chủ"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/collections/all",title:"Sản phẩm",children:"Sản phẩm"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/gioi-thieu",title:"Giới thiệu",children:"Giới thiệu"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/tin-tuc",title:"Tin tức",children:"Tin tức"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/lien-he",title:"Li\xean hệ",children:"Li\xean hệ"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/chi-duong",title:"Chỉ đường",children:"Chỉ đường"})})]})]})}),(0,n.jsx)("div",{className:"col-xs-12 col-sm-6 col-lg-3",children:(0,n.jsxs)("div",{className:"footer-widget",children:[(0,n.jsx)("h3",{className:"hastog",children:(0,n.jsx)("span",{children:"Kết nối với Dualeo"})}),(0,n.jsxs)("ul",{className:"list-menu list-blogs",children:[(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/",title:"Trang chủ",children:"Trang chủ"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/collections/all",title:"Sản phẩm",children:"Sản phẩm"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/gioi-thieu",title:"Giới thiệu",children:"Giới thiệu"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/tin-tuc",title:"Tin tức",children:"Tin tức"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/lien-he",title:"Li\xean hệ",children:"Li\xean hệ"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/chi-duong",title:"Chỉ đường",children:"Chỉ đường"})})]})]})})]})})}),(0,n.jsx)("div",{className:c()(L().copyright,"pt-3 pb-3"),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-6 text-left",children:(0,n.jsxs)("span",{children:["\xa9 Bản quyền thuộc về ",(0,n.jsx)("b",{children:"Dualeo"})," ",(0,n.jsx)("b",{className:"fixline",children:"|"})," Cung cấp bởi",(0,n.jsx)(O(),{href:"/",children:"Sapo"})]})}),(0,n.jsx)("div",{className:"col-md-6 text-right hidden-xs",children:(0,n.jsxs)("ul",{className:"mb-0",children:[(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/",title:"Trang chủ",children:"Trang chủ"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/collections/all",title:"Sản phẩm",children:"Sản phẩm"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/gioi-thieu",title:"Giới thiệu",children:"Giới thiệu"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/tin-tuc",title:"Tin tức",children:"Tin tức"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/lien-he",title:"Li\xean hệ",children:"Li\xean hệ"})}),(0,n.jsx)("li",{children:(0,n.jsx)(O(),{href:"/chi-duong",title:"Chỉ đường",children:"Chỉ đường"})})]})})]}),(0,n.jsx)("div",{className:"back-to-top",children:(0,n.jsx)("i",{className:"fa fa-angle-up"})})]})})]})})})},B=i(2273),z=i.n(B),G=function(){return(0,n.jsx)(O(),{href:"/",className:z().logo,children:(0,n.jsx)(T(),{src:"".concat("/Portfolio-NextJS-Hosting","/logo.png"),width:232,height:58,alt:"logo"})})},H=i(7006),F=i.n(H),K=function(){return(0,n.jsx)("nav",{className:c()(F().navBar,"navbar navbar-expand-lg"),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,n.jsx)("span",{className:"navbar-toggler-icon"})}),(0,n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:[(0,n.jsxs)("ul",{className:"navbar-nav",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"/",className:"nav-link",children:"Trang chủ"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"/",className:"nav-link",children:"Sản phẩm"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"/",className:"nav-link",children:"Giới thiệu"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"/",className:"nav-link",children:"Tin tức"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"/contact",className:"nav-link",children:"Li\xean hệ"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(O(),{href:"/",className:"nav-link",children:"Chỉ đường"})})]}),(0,n.jsx)("form",{className:"d-flex ms-auto",role:"search",children:(0,n.jsx)("input",{className:c()(F().searchInput,"form-control"),type:"search",placeholder:"Search","aria-label":"Search"})})]})]})})},U=i(142),V=i.n(U),W=function(){return(0,n.jsxs)("header",{className:V().header,children:[(0,n.jsx)("div",{className:V().topBar,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-sm-6 col-md-9",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Hotline:",(0,n.jsx)("span",{children:(0,n.jsx)("a",{title:"1900 6750",href:"tel:19006750",className:"ps-1",children:"1900 6750"})})]}),(0,n.jsxs)("li",{className:"ps-4",children:[(0,n.jsx)("strong",{children:"Địa chỉ"}),":",(0,n.jsx)("span",{className:"ps-1",children:"Ladeco Building, 266 Doi Can Street, H\xe0 Nội, Vietnam"})]})]})}),(0,n.jsx)("div",{className:"col-sm-6 col-md-3",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("a",{title:"Đăng nhập",href:"/account/login",children:[(0,n.jsx)("i",{className:"fa fa-user"})," Đăng nhập"]})}),(0,n.jsx)("li",{children:(0,n.jsx)("span",{className:"ps-2 pe-2",children:"hoặc"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{title:"Đăng k\xfd",href:"/account/register",children:"Đăng k\xfd"})})]})})]})})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:c()("row align-items-center",V().headerContent),children:[(0,n.jsx)("div",{className:"col-xs-12 col-md-3",children:(0,n.jsx)(G,{})}),(0,n.jsx)("div",{className:"col-xs-12 col-md-8 col-lg-7 hidden-xs",children:(0,n.jsxs)("div",{className:"d-flex justify-content-around",children:[(0,n.jsxs)("div",{className:c()("d-flex align-items-center",V().policyItem),children:[(0,n.jsx)("a",{title:"policy1_title",href:"#",children:(0,n.jsx)(T(),{src:"".concat("/Portfolio-NextJS-Hosting","/images/policy1.png"),alt:"DuaLeo-X",width:43,height:30})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{title:"Miễn ph\xed vận chuyển",href:"#",children:"Miễn ph\xed vận chuyển"}),(0,n.jsx)("p",{children:"B\xe1n k\xednh 100 km"})]})]}),(0,n.jsxs)("div",{className:c()("d-flex align-items-center",V().policyItem),children:[(0,n.jsx)("a",{title:"policy2_title",href:"#",children:(0,n.jsx)(T(),{src:"".concat("/Portfolio-NextJS-Hosting","/images/policy2.png"),alt:"DuaLeo-X",width:34,height:34})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{title:"Hỗ trợ 24/7",href:"#",children:"Hỗ trợ 24/7"}),(0,n.jsxs)("p",{children:["Hotline:",(0,n.jsx)("a",{href:"callto:19001009",className:"ps-1",children:(0,n.jsx)("strong",{children:"19006750"})})]})]})]}),(0,n.jsxs)("div",{className:c()("d-flex align-items-center",V().policyItem),children:[(0,n.jsx)("a",{title:"policy3_title",href:"#",children:(0,n.jsx)(T(),{src:"".concat("/Portfolio-NextJS-Hosting","/images/policy3.png"),alt:"DuaLeo-X",width:35,height:35})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{title:"Giờ l\xe0m việc",href:"#",children:"Giờ l\xe0m việc"}),(0,n.jsx)("p",{children:"T2 - T7 Giờ h\xe0nh ch\xednh"})]})]})]})}),(0,n.jsx)("div",{className:"col-xs-12 col-md-1 col-lg-2 text-end",children:(0,n.jsx)(O(),{href:"/cart",className:V().cartButton,children:"Giỏ h\xe0ng (0)"})})]})}),(0,n.jsx)(K,{})]})},J=function(e){return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsx)(W,{}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(C,{}),(0,n.jsx)(P,{}),(0,n.jsx)("div",{className:"col-md-9 px-md-4 px-0 mb-4",children:(0,n.jsx)("main",{children:e.children})}),(0,n.jsx)(M,{})]})}),(0,n.jsx)(D,{})]})},X=function(e){let{Component:t,pageProps:i}=e;return(0,n.jsxs)(J,{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),(0,n.jsx)(t,{...i})]})}},2611:function(){},3293:function(){},415:function(){},9462:function(e){e.exports={container:"breadcrumb_container__Og4_F"}},97:function(e){e.exports={footer:"footer_footer__vs2V6",copyright:"footer_copyright__bsVRf"}},142:function(e){e.exports={topBar:"header_topBar__sN5IA",headerContent:"header_headerContent__KTHjN",policyItem:"header_policyItem__aGmfW",cartButton:"header_cartButton___lCdc"}},2273:function(e){e.exports={logo:"logo_logo__d2M1M"}},7006:function(e){e.exports={navBar:"main-navigation_navBar__a5Kr_",searchInput:"main-navigation_searchInput__QWGX5"}},9008:function(e,t,i){e.exports=i(9201)},5675:function(e,t,i){e.exports=i(645)},1664:function(e,t,i){e.exports=i(5170)},4298:function(e,t,i){e.exports=i(5354)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9974)}),_N_E=e.O()}]);