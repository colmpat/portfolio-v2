(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7942:function(e,r,t){"use strict";var n=t(5696);r.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(4957),i=t(9898),u=t(639);var l={};function s(e,r,t,n){if(e&&c.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[r+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var r=c.resolveHref(o,e.href,!0),t=n(r,2),a=t[0],i=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,b=e.shallow,g=e.scroll,_=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=(r=a.default.Children.only(h))&&"object"===typeof r&&r.ref,m=u.useIntersection({rootMargin:"200px"}),y=n(m,2),x=y[0],w=y[1],O=a.default.useCallback((function(e){x(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,x]);a.default.useEffect((function(){var e=w&&t&&c.isLocalURL(p),r="undefined"!==typeof _?_:o&&o.locale,n=l[p+"%"+d+(r?"%"+r:"")];e&&!n&&s(o,p,d,{locale:r})}),[d,p,w,_,t,o]);var P={ref:O,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:u,scroll:i}))}(e,o,p,d,v,b,g,_)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(p)&&s(o,p,d,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof _?_:o&&o.locale,L=o&&o.isLocaleDomain&&c.getDomainLocale(d,E,o&&o.locales,o&&o.domainLocales);P.href=L||c.addBasePath(c.addLocale(d,E,o&&o.defaultLocale))}return a.default.cloneElement(r,P)};r.default=f},639:function(e,r,t){"use strict";var n=t(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,l=e.disabled||!c,s=o.useRef(),f=o.useState(!1),p=n(f,2),d=p[0],h=p[1],v=o.useState(r?r.current:null),b=n(v,2),g=b[0],_=b[1],j=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),l||d||e&&e.tagName&&(s.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=u.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=i.get(n):(r=i.get(t),u.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,c=n.elements;return c.set(e,r),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),i.delete(o);var r=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&u.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:t}))}),[l,g,t,d]);return o.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&_(r.current)}),[r]),[j,d]};var o=t(7294),a=t(6286),c="undefined"!==typeof IntersectionObserver;var i=new Map,u=[]},2855:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r),t.d(r,{default:function(){return p}});var o=t(621),a=t.n(o),c=t(1664),i=t(5893);function u(){return(0,i.jsx)("div",{className:a().topbar,children:(0,i.jsxs)("div",{className:a().wrapper,children:[(0,i.jsx)("div",{className:a().left,children:(0,i.jsx)(c.default,{href:"/",children:(0,i.jsx)("a",{className:a().logo,children:"cpl."})})}),(0,i.jsx)("div",{className:a().right,children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(c.default,{href:"/#intro",children:(0,i.jsx)("a",{children:(0,i.jsxs)("li",{children:["01. ",(0,i.jsx)("span",{children:"Intro"})]})})}),(0,i.jsx)(c.default,{href:"/#projects",children:(0,i.jsx)("a",{children:(0,i.jsxs)("li",{children:["02. ",(0,i.jsx)("span",{children:"Featured Projects"})]})})}),(0,i.jsx)("a",{href:"https://resume.io/r/wSh41saKj",target:"_blank",className:a().button+" button",children:"Resume"})]})})]})})}var l=function(e){var r=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{}),r]})};t(4831);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p=function(e){var r=e.Component,t=e.pageProps;return(0,i.jsx)(l,{children:(0,i.jsx)(r,f({},t))})}},71:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(2855)}])},621:function(e){e.exports={mainNavy:"#003844",mainGrey:"#edeef7",secondaryGrey:"#005366",mainLightBlue:"#94e9f7",secondaryLightBlue:"#e4fbff",mainLightPurple:"#b8b5ff",mainPurple:"#7868e6",topbar:"topbar_topbar__nvFAK",wrapper:"topbar_wrapper__vno0D",left:"topbar_left__hfuRs",logo:"topbar_logo__WS17b",right:"topbar_right__7_Phm",button:"topbar_button___ptIb"}},4831:function(){},1664:function(e,r,t){e.exports=t(7942)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(71),r(9898)}));var t=e.O();_N_E=t}]);