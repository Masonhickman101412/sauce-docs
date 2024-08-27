"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[99628],{14729:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=c(74848),s=c(28453);const i={id:"architecture",title:"saucectl Architecture",sidebar_label:"Architecture"},n=void 0,o={id:"dev/cli/saucectl/architecture",title:"saucectl Architecture",description:"This document provides an overview of the saucectl CLI architecture to help you better understand how it works.",source:"@site/docs/dev/cli/saucectl/architecture.md",sourceDirName:"dev/cli/saucectl",slug:"/dev/cli/saucectl/architecture",permalink:"/sauce-docs/pr-preview/pr-2905/dev/cli/saucectl/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/architecture.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"architecture",title:"saucectl Architecture",sidebar_label:"Architecture"},sidebar:"dev",previous:{title:"Using saucectl",permalink:"/sauce-docs/pr-preview/pr-2905/dev/cli/saucectl"},next:{title:"get",permalink:"/sauce-docs/pr-preview/pr-2905/dev/cli/saucectl/apit/vault/get"}},a={},l=[{value:"Architecture Components",id:"architecture-components",level:2},{value:"More Information",id:"more-information",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This document provides an overview of the ",(0,r.jsx)(t.code,{children:"saucectl"})," CLI architecture to help you better understand how it works."]}),"\n",(0,r.jsx)(t.h2,{id:"architecture-components",children:"Architecture Components"}),"\n",(0,r.jsxs)(t.p,{children:["The following provides a high-level overview of the ",(0,r.jsx)(t.code,{children:"saucectl"})," CLI architecture."]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"saucectl"})," sends the test payload (mobile app, test app, or project files) to the app storage."]}),"\n",(0,r.jsxs)(t.li,{children:["Depending on the capabilities of the underlying test framework (e.g., Playwright or Espresso), ",(0,r.jsx)(t.code,{children:"saucectl"})," will call the appropriate device cloud that is capable of running your tests."]}),"\n",(0,r.jsx)(t.li,{children:"The device cloud allocates a device for your request, retrieves the payload from app storage, and runs the tests."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This diagram illustrates at high level how ",(0,r.jsx)(t.code,{children:"saucectl"})," interacts with the Sauce Labs environment."]}),"\n",(0,r.jsx)("img",{src:"/img/saucectl/components.jpg"}),"\n",(0,r.jsx)(t.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/dev/cli/saucectl",children:"Using the saucectl CLI"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,c)=>{c.d(t,{R:()=>n,x:()=>o});var r=c(96540);const s={},i=r.createContext(s);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);