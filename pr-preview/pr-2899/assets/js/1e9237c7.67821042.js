"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[67776],{12226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(74848),i=n(28453),c=n(86025);const s={id:"architecture",title:"Sauce Orchestrate Architecture",sidebar_label:"Architecture"},a=void 0,o={id:"orchestrate/architecture",title:"Sauce Orchestrate Architecture",description:"Architecture Components",source:"@site/docs/orchestrate/architecture.md",sourceDirName:"orchestrate",slug:"/orchestrate/architecture",permalink:"/sauce-docs/pr-preview/pr-2899/orchestrate/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/architecture.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1682714244e3,frontMatter:{id:"architecture",title:"Sauce Orchestrate Architecture",sidebar_label:"Architecture"},sidebar:"docs",previous:{title:"FAQ",permalink:"/sauce-docs/pr-preview/pr-2899/orchestrate/faq"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2899/testfairy/"}},h={},l=[{value:"Architecture Components",id:"architecture-components",level:2},{value:"REST API",id:"rest-api",level:3},{value:"Containerized Test Executor",id:"containerized-test-executor",level:3}];function d(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"architecture-components",children:"Architecture Components"}),"\n",(0,r.jsx)(t.p,{children:"From the Sauce Labs side, Sauce Orchestrate includes the following components:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/dev/cli/saucectl",children:"saucectl"})}),"\n",(0,r.jsx)(t.li,{children:"REST API"}),"\n",(0,r.jsx)(t.li,{children:"Containerized Test Executor"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Here is an overview of how these components interact with the user environment:"}),"\n",(0,r.jsx)("img",{src:(0,c.A)("img/hosted/hosted-arch-components.png"),alt:"Sauce Orchestrate components interacting with user\u2019s environment",width:"800"}),"\n",(0,r.jsx)(t.h3,{id:"rest-api",children:"REST API"}),"\n",(0,r.jsx)(t.p,{children:"The REST API service provides the following functionality:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Creates a new Sauce Orchestration session"}),"\n",(0,r.jsx)(t.li,{children:"Gets the status of an existing Sauce Orchestration session"}),"\n",(0,r.jsx)(t.li,{children:"Stops a Sauce Orchestrate session that is being executed"}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"containerized-test-executor",children:"Containerized Test Executor"}),"\n",(0,r.jsx)(t.p,{children:"The main advantage of test containerization is that the application, together with all of its configuration files and dependencies, is environment-agnostic. Containerized tests will run exactly the same way on any machine--CI or local--irrespective of the underlying OS and other dependencies."}),"\n",(0,r.jsx)(t.p,{children:"Sauce Labs provides an environment that, given a container image, would execute containerized tests.\nThe containerized test executor environment requires the following:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"A customer-built container image"}),"\n",(0,r.jsxs)(t.li,{children:["A command to execute (both ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/engine/reference/builder/#entrypoint",children:"entrypoint"})," and ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/engine/reference/builder/#cmd",children:"command"})," are supported as well)"]}),"\n",(0,r.jsx)(t.li,{children:"A number of other optional parameters"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The executor will run the container in the dedicated secure environment. The execution status is available via the REST API."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);