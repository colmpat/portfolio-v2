(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6154:function(e,t){"use strict";t.Z=[{id:1,title:"Data Visualization Class Website",description:"Built this class website to streamline assignment submissions for CS360 Data Visualization at USFCA. Utilized Next.js for dynamic routing and MDX in tandem with React to modularize new assignment posts.",tools:"React, Next.js, JavaScript, HTML, MDX, Sass",source:"https://github.com/cpl-cs360/cpl-cs360.github.io",live:"https://cpl-cs360.github.io"},{id:2,title:"Satellite Orbit Neural Network",description:"Leveraged Tensorflow.js to use its nueral network model for neuroevolution. Built the physics and graphics engine in P5 and the genetic algorithm and trianing in JavaScript.",tools:"Tensorflow, P5, JavaScript, HTML, CSS",source:"https://github.com/colmpat/satellite-nn",live:"http://colmlang.com/satellite-nn/"},{id:3,title:"Interactive Asteroid Visualization",description:"Produced a digestible, holistic representation of our solar system's many small bodies using D3.",tools:"D3, React, JavaScript, Sass, Python, Pandas",source:"https://github.com/cpl-cs360/sbmap#sbmap",live:"https://cpl-cs360.github.io/sbmap/"}]},8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},i=r(8e3);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,i=e.hasQuery,o=void 0!==i&&i;return r||a&&o}},2717:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(i=r(1585))&&i.__esModule?i:{default:i},c=r(8e3),l=r(5850),u=r(5646);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var i=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(a.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?i=!1:r.add(u);else{var p=a.props[u],d=n[u]||new Set;"name"===u&&o||!d.has(p)?(d.add(p),n[u]=d):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:i})}))}var m=function(e){var t=e.children,r=o.useContext(c.AmpStateContext),n=o.useContext(l.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:u.isInAmpMode(r)},t)};t.default=m},1585:function(e,t,r){"use strict";var n=r(7980),a=r(3227),i=r(8361),o=(r(2191),r(5971)),s=r(2715),c=r(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var p=function(e){o(r,e);var t=l(r);function r(e){var i;return a(this,r),(i=t.call(this,e)).emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(n(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=p},8869:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(9008),a=r(5211),i=r.n(a),o=r(2574),s=r.n(o),c=r(1664),l=r(5893);function u(e){var t=e.id,r=e.title,n=e.description,a=e.tools,i=e.source,o=e.live,u=e.imagePath;return(0,l.jsxs)("li",{className:s().project,children:[(0,l.jsxs)("div",{className:"".concat(s().wrapper," ").concat(t%2===0?s().left:s().right),children:[(0,l.jsxs)("h2",{children:["Project ",t<10?"0"+t:t]}),(0,l.jsx)("h1",{children:r}),(0,l.jsx)("div",{className:s().projectDescription,children:(0,l.jsx)("p",{children:n})}),a&&(0,l.jsx)("div",{className:s().tools,children:(0,l.jsx)("p",{children:a})}),(0,l.jsxs)("div",{className:s().buttonWrapper,children:[i&&(0,l.jsx)("a",{href:i,target:"_blank",className:"button ".concat(s().button),children:"Source Code"}),o&&(0,l.jsx)("a",{href:o,target:"_blank",className:"button ".concat(s().button),children:"Live Deployment"})]})]}),(0,l.jsx)("div",{className:"".concat(s().imageWrapper," ").concat(t%2===0?s().left:s().right),children:(0,l.jsx)(c.default,{href:"/projects/p"+t,children:(0,l.jsx)("a",{className:s().imageClick,children:(0,l.jsx)("img",{src:u,layout:"fill",className:s().image})})})})]})}var p=r(6154);function d(){return(0,l.jsx)("div",{className:i().projects,id:"projects",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:i().labelWrapper,children:(0,l.jsxs)("h1",{className:"sectionLabel",children:[(0,l.jsx)("em",{children:"02."})," Featured Projects"]})}),p.Z.map((function(e){return(0,l.jsx)(u,{id:e.id,title:e.title,description:e.description,tools:e.tools,source:e.source,live:e.live,imagePath:"/images/P".concat(e.id,"_hero.png")},e.id)}))]})})}var f=r(6395),h=r.n(f),m=function(){return(0,l.jsx)("div",{className:h().footer,children:(0,l.jsxs)("p",{children:["Made with <3 by Colm Lang. "," Using ",(0,l.jsx)("a",{href:"https://reactjs.org",rel:"noreferrer",children:"React"}),", ",(0,l.jsx)("a",{href:"https://nextjs.org",rel:"noreferrer",children:"Next.js"}),", ",(0,l.jsx)("a",{href:"https://sass-lang.com",rel:"noreferrer",children:"Sass"}),", and ",(0,l.jsx)("a",{href:"https://mdxjs.com",rel:"noreferrer",children:"MDX"}),".",(0,l.jsxs)("em",{children:[" Design based on ",(0,l.jsx)("a",{href:"https://brittanychiang.com",target:"_blank",children:"Brittany Chiang's"})," personal website."]})]})})},j=r(7216),g=r.n(j);function v(){return(0,l.jsxs)("div",{className:g().intro,id:"intro",children:[(0,l.jsxs)("div",{className:g().left,children:[(0,l.jsxs)("h1",{className:g().sectionLabel+" sectionLabel",children:[(0,l.jsx)("em",{children:"01. "}),"Intro"]}),(0,l.jsxs)("h2",{children:["Computer Science Student ",(0,l.jsx)("em",{children:"@"}),(0,l.jsx)("a",{href:"https://www.usfca.edu",target:"_blank",rel:"noreferrer",children:"USFCA"})]}),(0,l.jsx)("h1",{children:"Software Engineer"}),(0,l.jsx)("h3",{children:"Colm Lang"})]}),(0,l.jsx)("div",{className:g().right})]})}var _=r(1673),y=r.n(_);function b(){return(0,l.jsxs)("div",{className:y().container,children:[(0,l.jsx)(n.default,{children:(0,l.jsx)("title",{children:"Colm Lang"})}),(0,l.jsxs)("div",{className:y().sections,children:[(0,l.jsx)("div",{id:"home"}),(0,l.jsx)(v,{}),(0,l.jsx)(d,{})]}),(0,l.jsx)(m,{})]})}},3685:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8869)}])},6395:function(e){e.exports={mainNavy:"#003844",mainGrey:"#edeef7",secondaryGrey:"#005366",mainLightBlue:"#94e9f7",secondaryLightBlue:"#e4fbff",mainLightPurple:"#b8b5ff",mainPurple:"#7868e6",footer:"footer_footer__LV2HF"}},7216:function(e){e.exports={mainNavy:"#003844",mainGrey:"#edeef7",secondaryGrey:"#005366",mainLightBlue:"#94e9f7",secondaryLightBlue:"#e4fbff",mainLightPurple:"#b8b5ff",mainPurple:"#7868e6",intro:"intro_intro__44dvK",left:"intro_left__K2qjv",sectionLabel:"intro_sectionLabel__CgsUO",right:"intro_right__oyjzU"}},2574:function(e){e.exports={mainNavy:"#003844",mainGrey:"#edeef7",secondaryGrey:"#005366",mainLightBlue:"#94e9f7",secondaryLightBlue:"#e4fbff",mainLightPurple:"#b8b5ff",mainPurple:"#7868e6",project:"project_project__YvdT_",wrapper:"project_wrapper__pj9zF",projectDescription:"project_projectDescription__jBLJb",buttonWrapper:"project_buttonWrapper__p3QG4",button:"project_button__nK2r1",tools:"project_tools__mWdoP",left:"project_left__4SwzO",right:"project_right__Higjm",imageWrapper:"project_imageWrapper__aHrqH",imageClick:"project_imageClick__SkB64",image:"project_image__xVm__"}},5211:function(e){e.exports={mainNavy:"#003844",mainGrey:"#edeef7",secondaryGrey:"#005366",mainLightBlue:"#94e9f7",secondaryLightBlue:"#e4fbff",mainLightPurple:"#b8b5ff",mainPurple:"#7868e6",projects:"projects_projects__gl_WT",labelWrapper:"projects_labelWrapper__VSv9O"}},1673:function(e){e.exports={container:"Home_container__97eC3"}},9008:function(e,t,r){e.exports=r(2717)}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);