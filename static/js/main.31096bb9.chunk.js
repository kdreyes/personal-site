(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{18:function(e,t,n){"use strict";var c=n(0),i=n(1),a=n(20),l=n(3),s=n(13),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-68649021-1"}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(j);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},d=n(5),u=n(21),h=[{path:"/",label:"Katrina Delos Reyes",index:!0},{path:"/about",label:"About"},{path:"/resume",label:"Resume"},{path:"/contact",label:"Contact"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,161,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,onClick:function(){return a(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(d.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(d.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(22),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(d.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Katrina Delos Reyes"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:katrina.mdelosreyes@gmail.com",children:"katrina.mdelosreyes@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hi, I'm Katrina! I'm a technology strategist by day, dance teacher by night, avid hiker by weekend, and Founder and Director of &TECH all other times."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(d.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(d.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Katrina Delos Reyes ",Object(c.jsx)(d.b,{to:"/",children:"katrinadelosreyes.com"}),"."]})]})]})},k=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},y=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(k,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Katrina Delos Reyes",defaultTitle:"Katrina Delos Reyes",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};y.defaultProps={children:null,fullPage:!1,title:null,description:"Katrina Delos Reyes' personal website."};t.a=y},22:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(26)),a=n(27),l=n(28),s=n(29),r=n(30),o=n(31),j=[{link:"https://github.com/kdreyes",label:"Github",icon:a.faGithub},{link:"https://facebook.com/katrina.reyes.52090",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/katrinadelrey__/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/katrina-delos-reyes-5a68a1126",label:"LinkedIn",icon:r.faLinkedinIn},{link:"mailto:katrina.mdelosreyes@gmail.com",label:"Email",icon:o.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:j.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n(15),l=n(5),s=n(3),r=n(18),o=(n(44),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,158))}))),j=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,163))})),b=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,159))})),d=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,160))})),u=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,162))})),h=function(){return Object(c.jsx)(l.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(r.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:b}),Object(c.jsx)(s.a,{path:"/about",component:o}),Object(c.jsx)(s.a,{path:"/contact",component:j}),Object(c.jsx)(s.a,{path:"/resume",component:u}),Object(c.jsx)(s.a,{component:d,status:404})]})})})},O=document.getElementById("root");O.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(h,{}),O):Object(a.render)(Object(c.jsx)(h,{}),O)}},[[45,1,3]]]);
//# sourceMappingURL=main.31096bb9.chunk.js.map